const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    });

    res.send(surveys);
  });

  app.get("/api/surveys/:surveyId/:choice", async (req, res) => {
    const { surveyId, choice } = req.params;

    if (choice === "yes" || choice === "no") {
      // Handle the 'Yes' or 'No' vote here
      try {
        // Find the survey by ID
        const survey = await Survey.findById(surveyId);

        if (!survey) {
          return res.status(404).send("Survey not found");
        }

        if (survey.recipients) {
          // Check if the recipient with this email exists
          const recipient = survey.recipients.find(
            (recipient) => recipient.email === req.query.email
          );

          if (recipient && !recipient.responded) {
            const recipientIndex = survey.recipients.findIndex(
              (res) => res.email === recipient.email
            );

            if (recipientIndex !== -1) {
              survey.recipients[recipientIndex].response = choice;
              survey.recipients[recipientIndex].responded = true;
              if(choice=='yes'){
                survey.yes= survey.yes+1
              }
              else{
                survey.no= survey.no+1
              }
              await Survey.findByIdAndUpdate(surveyId, survey);
              res.send("Thanks for voting!");
            }
          } else {
            res
              .status(422)
              .send(
                "You have already voted for this survey or are not a valid recipient."
              );
          }
        } else {
          res.status(422).send("No recipients found for this survey.");
        }
      } catch (error) {
        res.status(500).send("Internal server error");
      }
    } else {
      res.status(422).send('Invalid choice. Please vote "yes" or "no".');
    }
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    try {
      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients
          .split(",")
          .map((email) => ({ email: email.trim() })),
        _user: req.user.id,
        dateSent: Date.now(),
      });

      const mailer = new Mailer(survey, surveyTemplate(survey));
      try {
        await mailer.send();
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();
        res.redirect('/')
        res.send(user);
      } catch (err) {
        res.status(422).send(err);
      }
    } catch (err) {
      console.log(err);
    }
  });
};

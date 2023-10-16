const keys = require("../../config/keys");

module.exports = (survey) => {
  return `<html>
  <body>
  <div style="text-align: center;">
  <h3>I'd like your input!</h3>
  <p>please answer the following question: </p>
  <p>${survey.body}</p>
  <div>
  <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes?email=${survey.recipients[0].email}">Yes</a>
  </div>
  <div>
  <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no?email=${survey.recipients[0].email}">No</a>
  </div>
  </div>
  </body>
  </html>`;
};


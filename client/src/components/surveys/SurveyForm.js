// SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field, submit } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";
import { toast } from "react-hot-toast";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        ></Field>
      );
    });
  }

  render() {
    return (
      <div className="px-40 text-secondary ">
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
          className="border border-gray2 p-20 rounded-[40px] "
        >
          {this.renderFields()}
          <span className="flex justify-between text-md">
            <Link
              to="/surveys"
              className="px-4 py-2 rounded-[20px] bg-red-700 text-secondary mt-4"
            >
              Cancel
            </Link>
              <button
                type="submit"
                className="px-4 py-2 rounded-[20px] bg-blue4 text-secondary mt-4"
              >
                Next
              </button>
          </span>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import * as actions from '../../actions';
import { toast } from "react-hot-toast";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {

  const submit = () =>{

    try{
      submitSurvey(formValues, navigate)
    }
    catch{
      toast.error("you don't have enough credits")
    }
  }
  const navigate = useNavigate(); // Use the useNavigate hook to access navigation function
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name} className='p-1'>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
<div className='px-40 text-sm'>

    <div className=' text-secondary border border-gray2 p-20 rounded-[40px] '>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <span className='flex justify-between'>
      <button
        className="px-4 py-2 rounded-[20px] bg-blue4 text-secondary mt-4"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={submit()} 
        className="px-4 py-2 rounded-[20px] bg-blue4 text-secondary mt-4"
      >
        Send Survey
      </button>
      </span>
    </div>
</div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview); // Remove withRouter

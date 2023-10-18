import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import Header from '../Header';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className='px-20 py-8'  key={survey._id}>
          <div className="border border-gray2 rounded-[30px] p-10 bg-blue3 ">
            <span className="text-[25px] font-bold">{survey.title}</span>
            <p className='py-4'>
              {survey.body}
            </p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          <div className="flex gap-5">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="bg text-secondary flex flex-col h-[100%]">
        <Header/>
        {this.props.surveys? this.renderSurveys(): ''}
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);

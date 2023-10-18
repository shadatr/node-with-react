import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from '../components/surveys/SurveyList'
const Dashboard = () => {
  return (
    <div>
      <SurveyList/>
      <div className="flex fixed rounded-full bg-blue3 border border-gray2 text-secondary right-0 bottom-0 text-[40px] m-5">
        <Link to="/surveys/new" >
          <i className='p-5'> +</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
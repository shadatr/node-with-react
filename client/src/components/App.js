import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Routes
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Header from './Header';
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew';
import Footer from './Footer';
import { Toaster } from "react-hot-toast";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="">
        <BrowserRouter>
          <div>
            <Routes> 
              <Route path="/" element={<Landing />} /> 
              <Route exact path="/surveys" element={<Dashboard />} />
              <Route path="/surveys/new" element={<SurveyNew />} /> 
            </Routes>
          </div>
        </BrowserRouter>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Footer/>

      </div>
    );
  }
}

export default connect(null, actions)(App);

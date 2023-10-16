import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Routes
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Header from './Header';
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Routes> {/* Wrap Routes around Route components */}
              <Route path="/" element={<Landing />} /> {/* Use 'element' prop */}
              <Route exact path="/surveys" element={<Dashboard />} /> {/* Use 'element' prop */}
              <Route path="/surveys/new" element={<SurveyNew />} /> {/* Use 'element' prop */}
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

// import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import DailyTracker from './dailyTrackerPage';
import Auth from '../utils/auth';
const axios = require('axios');

function Login() {

  return (

    <>
      {Auth.loggedIn() ? (
        <DailyTracker />
      ) : <>
      <div><h3 className=" mx-auto d-flex justify-content-center">Welcome to Kernel</h3>
      </div>
      <div><p className="d-flex justify-content-center"><img src={require(`../images/image.png`)} className="fade-in-image main-image"></img></p></div>
      <div><p className=" mx-auto d-flex justify-content-center fade-in-image">Track your daily habits, accomplishments, and set your intentions all in one place</p>
      </div>
      <div className="row d-flex pt-4">
        <div className="col-md-4 mx-auto">
          <LoginForm />

        </div>
        <div className="col-md-4 mx-auto">
          <SignupForm />
        </div>
      </div>
      </>
      }


    </>
  );
}



export default Login
// import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import DailyTracker from './dailyTrackerPage';
import Auth from '../utils/auth';
const axios = require('axios');

function Login() {
//   const api_url ="https://zenquotes.io/api/quotes/";

//  const quoteTime = () => {
//     axios
//     .get('https://type.fit/api/quotes')
//     .then(res => {
//       let arrayIndex = Math.floor(Math.random() * res.data.length);
//       console.log(arrayIndex)
//       const randomtxt = res.data[arrayIndex].text
//       const randomauthor = res.data[arrayIndex].author
//       console.log(randomtxt, randomauthor)
      
//     })
//     .catch(error => {
//       console.error(error);
//     });
//   };
//   quoteTime();
  

  return (

    <>
      {Auth.loggedIn() ? (
        <DailyTracker />
      ) : <>
      <div><h3 className=" mx-auto d-flex justify-content-center">Welcome to Kernel</h3>
      </div>
      <div><p className=" mx-auto d-flex justify-content-center">Track your daily habits, accomplishments, and set your intentions all in one place</p>
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
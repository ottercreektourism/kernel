import "../App.css";
import Calendar from "../components/Calendar";
import css from './gridPage.css'

import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import React, { useState } from 'react';
import { Button, Fade } from 'react-bootstrap';

import DayRating from '../components/Dropdown';


function GridPage() {
  // const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];
  console.log(userData)
console.log(userData.firstName)
const meow = userData.savedKernels[0].submissionDate
console.log(new Date(meow * 1000))
console.log(userData.savedKernels[0].dayRating)
// console.log(userData.savedKernels[0].excite)
// console.log(userData.savedKernels[0].proud)
// console.log(userData.savedKernels[0].intention)

// for(let i=0; i < userData.savedKernels.length; i++) {
//     let excite = userData.savedKernels[i].excite
//     let submission = userData.savedKernels[i].submissionDate

//     console.log(excite, submission)
//     // console.log(userData.savedKernels[i]._id)

// }


  
  console.log(date)
  return (
    <div className="grid">
      <div className="mx-auto mt-4 mb-4">
        <h3>Welcome to your Grid</h3>{" "}
      </div>
      <div className="mx-auto mt-4">
        <h5>Click on the grid squares to see your daily results.</h5>{" "}
      </div>

      <div className="d-flex">
        {userData.savedKernels.map((info) => {
            return (
              // <button key={info.submissionDate}>{info.submissionDate}</button>
              <>
              <div className="card" style={{width: '18rem'}}>
  <div className="card-header">
    {info.submissionDate}{console.log(new Date(info.submissionDate * 1))
}
  </div>
  <ul className="list-group list-group-flush">
  <li className="list-group-item">Daily rating: {info.dayRating}</li>
    <li className="list-group-item">Proud: {info.proud}</li>
    <li className="list-group-item">Excite: {info.excite}</li>
    <li className="list-group-item">Daily intention: {info.intention}</li>
    <li className="list-group-item">Habits: {info.habits}</li>

    
  </ul>
</div>
            </>
            );
          })}
          </div>


      <Calendar
        month={month}
        year={year}
        preloadedEvents={[
          {
            id: 1,
            name: "Holiday",
            dateFrom: "2021-09-29T12:00",
            dateTo: "2021-10-03T08:45",
            type: "Holiday"
          },
          {
            id: 2,
            name: "Meeting",
            dateFrom: "2021-10-01T09:45",
            dateTo: "2021-10-04T22:00",
            type: "Standard"
          },
          {
            id: 3,
            name: "Away",
            dateFrom: "2021-10-01T01:00",
            dateTo: "2021-10-01T23:59",
            type: "Busy"
          },
          {
            id: 4,
            name: "Inspection",
            dateFrom: "2021-10-19T07:30",
            dateTo: "2021-10-21T23:59",
            type: "Standard"
          },
          {
            id: 5,
            name: "Holiday - Greece",
            dateFrom: "2021-10-14T08:00",
            dateTo: "2021-10-16T23:59",
            type: "Holiday"
          },
          {
            id: 6,
            name: "Holiday - Spain",
            dateFrom: "2021-10-29T08:00",
            dateTo: "2021-10-31T23:59",
            type: "Holiday"
          }
        ]}
      />
    </div>
  );
};

export default GridPage;

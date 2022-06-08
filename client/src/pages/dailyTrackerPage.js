// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './dailyTracker.css'
import React from "react";
import DailyTrackerForm from "../components/DailyTracker";
import TodaysActivitiesDT from "../components/todaysActivitiesDT";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function DailyTracker() {

  return (
    <div className="grid">
      <div className="row">
        <div className="column-left">
          <Header />
        </div>
      </div>
      <DailyTrackerForm />
      <div>
        <Button className="btn btn-dark" type="button" as={Link} to="/submittedDT">Done</Button>
      </div>
    </div>
  );
}
export default DailyTracker;

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from "react";
import DailyTrackerForm from "../components/DailyTracker";
import TodaysActivitiesDT from "../components/todaysActivitiesDT";
import Header from "../components/Header";
import Activities from "../components/Activities";
import SubmittedDT from "./submittedDTPage";
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
      <div className="row">
        <div className="row dt dailytrackerform col-8">
          <div className="column-left dailytrackerform">
            <DailyTrackerForm />
          </div>
        </div>
        <div className="row dt activities ms-auto mt-4 col-4">
          <h6>
            Click on the grid squares to indicate which activities you've done
            today.
          </h6>
          <div className="column-right activities">
            <Activities />
          </div>
        </div>
      </div>
      <div>
        {/* TODO: make the button save data from the whole page and allocate it to the present day */}
        <Button type="button" as={Link} to="/submittedDT">Done</Button>
      </div>
    </div>
  );
}
export default DailyTracker;

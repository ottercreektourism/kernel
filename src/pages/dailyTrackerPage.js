// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from "react";
import DailyTrackerForm from '../components/DailyTracker';
import TodaysActivitiesDT from '../components/todaysActivitiesDT';
import Header from '../components/Header';

function DailyTracker() {
  return (
    //   <row className='sideBySideDT'>
    //         <HeaderDT />
    //         <DailyTracker />
    //         <TodaysActivitiesDT />
    //     </row>
    <div className="grid">
        <div className="row">
            <div className="column-left"><Header /></div>
        </div>
         <div className="row1">
            <div className="column-right"><TodaysActivitiesDT /></div>
         </div>
        <div className="row">
            <div className="column-left"><DailyTrackerForm /></div>
        </div>
    </div>

  );
}

export default DailyTracker;

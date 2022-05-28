import React from "react";

// import { Link } from 'react-router-dom';

// const name = 'namePlaceholder'

function DailyTrackerForm() {
  return (
    <>
      {/* <div className="mx-auto mt-4"><h5>Hi {name}, how was your day?</h5> </div> */}
      <div className="d-inline p-2">
        <div className="form-group col-md-8">
          <label htmlFor="exampleFormControlTextarea1"></label>
          <textarea
            placeholder="What did you feel most proud of today?"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
        <div className="form-group col-md-8">
          <label htmlFor="exampleFormControlTextarea1"></label>
          <textarea
            placeholder="What excites you most about the coming week?"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
        <div className="form-group col-md-8">
          <label htmlFor="exampleFormControlTextarea1"></label>
          <textarea
            placeholder="Set your intention for tomorrow"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
      </div>
    </>
  );
}

export default DailyTrackerForm;

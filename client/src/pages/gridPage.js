// import "../App.css";
import Calendar from "../components/Calendar";
import css from "./gridPage.css";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function GridPage() {
  // const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];
  console.log(userData);
  console.log(userData.firstName);
  const meow = userData.savedKernels[0].submissionDate;
  console.log(new Date(meow * 1000));
  console.log(userData.savedKernels[0].dayRating);
  // console.log(userData.savedKernels[0].excite)
  // console.log(userData.savedKernels[0].proud)
  // console.log(userData.savedKernels[0].intention)

  // for(let i=0; i < userData.savedKernels.length; i++) {
  //     let excite = userData.savedKernels[i].excite
  //     let submission = userData.savedKernels[i].submissionDate

  //     console.log(excite, submission)
  //     // console.log(userData.savedKernels[i]._id)

  // }

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }
  console.log(timeConverter(0));

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  function handleButtonClick(event) {
    event.preventDefault();

    if (event.target.id === userData.submissionDate) {
      console.log(true);
    }
  }

  console.log(uuidv4());

  const myStyle = {
    backgroundcolor: "2px solid rgb(41, 11, 124)",
  };
  return (
    <div className="grid">
      <div className="mx-auto mt-4 mb-4">
        <h3>Welcome to your Grid</h3>{" "}
      </div>
      <div className="mx-auto mt-4">
        <h5>Click on the grid squares to see your daily results.</h5>{" "}
      </div>

      <div className="d-flex">
        {/* {userData.savedKernels.length ? */}
        {userData.savedKernels.map((info) => {
          const newId = uuidv4();
          const newDate = new Date(info.submissionDate * 1);
          return (
            // <button key={info.submissionDate}>{info.submissionDate}</button>
            <>
              {/* <div className="card" style={{ width: '18rem' }}>
                <div className="card-header">
                </div>
                {/* {timeConverter(info.submissionDate)} */}
              {/* {console.log(new Date(info.submissionDate * 1))
} */}
              {/* <button onClick={handleButtonClick} id={info.submissionDate}>{timeConverter(info.submissionDate)}</button>
                <ul className="list-group list-group-flush" id={info.submissionDate}>
                  <li className="list-group-item">Daily rating: {info.dayRating}</li>
                  <li className="list-group-item">Proud: {info.proud}</li>
                  <li className="list-group-item">Excite: {info.excite}</li>
                  <li className="list-group-item">Daily intention: {info.intention}</li>
                  <li className="list-group-item">Habits: {info.habits.join(', ')}</li>



                </ul>
              </div> */}
              <div className="d-flex mx-auto mt-4">
                <div
                  className="justify-content-center"
                  id="accordionExample"
                >
                  <div className="card m-2">
                    <div
                      className="card-header background-blue"
                      id="headingOne"
                    >
                      <h2 className="mb-0">
                        <button
                          className="btn text-decoration-none text-light"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          {timeConverter(info.submissionDate)}
                        </button>
                      </h2>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                    >
                      <div class="card-body">
                        <ul
                          className="list-group list-group-flush"
                          id={info.submissionDate}
                        >
                          <li className="list-group-item">
                            Daily rating: {info.dayRating}
                          </li>
                          <li className="list-group-item">
                            Proud of: {info.proud}
                          </li>
                          <li className="list-group-item">
                            Excited for: {info.excite}
                          </li>
                          <li className="list-group-item">
                            Intent for tomorrow: {info.intention}
                          </li>
                          <li className="list-group-item">
                            Habits: {info.habits.join(", ")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <Calendar />
    </div>
  );
}

export default GridPage;

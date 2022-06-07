import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DayRating = ({rating, handleSelect}) => {
//   const [rating, setRating] = useState("");
//   const handleSelect = (e) => {
//     console.log(e);
//     setRating(e);
//   };

  return (
      <>
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        How would you rate your day?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">Terrible</Dropdown.Item>
        <Dropdown.Item eventKey="2">Not great</Dropdown.Item>
        <Dropdown.Item eventKey="3">Average</Dropdown.Item>
        <Dropdown.Item eventKey="4">Pretty good</Dropdown.Item>
        <Dropdown.Item eventKey="5">Very happy</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <h4>You selected {rating}</h4>
    </>
  );
};
export default DayRating;

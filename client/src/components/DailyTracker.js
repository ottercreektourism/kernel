import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Navigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_KERNEL } from "../utils/mutations";
import Activities from "./Activities";
import DayRating from "../components/Dropdown";

const FormSubmission = () => {
  const [userFormData, setUserFormData] = useState({
    proud: "",
    excite: "",
    intention: "",
  });
  const [addKernel] = useMutation(ADD_KERNEL);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [checkedHabits, setCheckedHabits] = useState([]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    if (
      !userFormData.proud ||
      !userFormData.excite ||
      !userFormData.intention
    ) {
      alert("Enter input in all categories before submitting");
    }

    try {
      console.log({
        input: {
          ...userFormData,
          habits: checkedHabits,
          dayRating: parseInt(rating),
        },
      });

      const { data } = await addKernel({
        variables: {
          input: {
            ...userFormData,
            habits: checkedHabits,
            dayRating: parseInt(rating),
          },
        },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      proud: "",
      excite: "",
      intention: "",
    });
  };

  const [rating, setRating] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setRating(e);
  };

  return (
    <>
      <div className="row">
        <div className="row dt dailytrackerform col-8">
          <div className="column-left dailytrackerform">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleFormSubmit}
              className="form-width col-12"
            >
              <div className="d-inline p-2">
                <div className="form-group">
                  <br />
                  <br />
                  <h5>Kernel Journal</h5>
                  <label htmlFor="proudInput"></label>
                  <textarea
                    name="proud"
                    placeholder="What did you feel most proud of today?"
                    className="form-control col-8"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={userFormData.proud}
                    autoFocus
                    onChange={handleInputChange}
                  ></textarea>
                  <Form.Control.Feedback type="invalid">
                    Name is required!
                  </Form.Control.Feedback>
                </div>
                <div className="form-group">
                  <label htmlFor="exciteInput"></label>
                  <textarea
                    name="excite"
                    placeholder="What excites you most about the coming week?"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={userFormData.excite}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="intentionInput"></label>
                  <textarea
                    name="intention"
                    placeholder="Set your intention for tomorrow"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={userFormData.intention}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <div>
                <DayRating rating={rating} handleSelect={handleSelect} />
              </div>

              <div className="d-flex">
                <Button
                  className="btn btn-dark m-2"
                  type="button"
                  as={Link}
                  to={"/submittedDT"}
                  onClick={handleFormSubmit}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <div className="row dt activities ms-auto mt-4 col-4">
        <br />
        <br />
        <br />
          <h5>Select today's kernels:</h5>
          <div className="column-right activities">
            <Activities
              checkedHabits={checkedHabits}
              setCheckedHabits={setCheckedHabits}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSubmission;

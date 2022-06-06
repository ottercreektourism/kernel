import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_KERNEL } from '../utils/mutations';


const FormSubmission = () => {
      const [userFormData, setUserFormData] = useState({ proud: '', excite: '', intention: ''});
      const [addKernel] = useMutation(ADD_KERNEL);

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });

      };
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
          try {
            const { data } = await addKernel({
              variables: {...userFormData}
            })
            console.log(data);
          } catch (err) {
            console.error(err);
            // setShowAlert(true);
          }
    
        setUserFormData({
          proud: '',
          excite: '',
          intention: '',
        });
      };
      

// class FormSubmission extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       proudInput: "",
//       exciteInput: "",
//       intentionInput: "",
//       error: "",
//       isSubmitted: false,
//     };

//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.handleProudChange = this.handleProudChange.bind(this);
//     this.handleExciteChange = this.handleExciteChange.bind(this);
//     this.handleIntentionChange = this.handleIntentionChange.bind(this);
//   }

//   handleFormSubmit(e) {
//     e.preventDefault();
//     console.log("words");
//     if (
//       !this.state.proudInput ||
//       !this.state.exciteInput ||
//       !this.state.intentionInput
//     ) {
//       this.setState(() => ({
//         error: "Please fill in your journal prompts before submitting!",
//       }));
//     } else {
      
//       this.setState(() => ({ error: "" }, { isSubmitted: true }));



      // submit post req using mutations - new kernel
      // const [userFormData, setUserFormData] = useState({ proud: '', excite: '', intention: ''});
      // const [addKernel] = useMutation(ADD_KERNEL);

      // try {
        //   const { data } = await addKernel({
        //     variables: {...userFormData}
        //   })
        //   console.log(data);
        //   Auth.login(data.addUser.token);
        // } catch (err) {
        //   console.error(err);
        //   setShowAlert(true);
        // }
        // setUserFormData({
        //   proud: '',
        //   excite: '',
        //   intention: '',
        // });
  
  //   }
  // }

  // handleProudChange(e) {
  //   const proudInput = e.target.value;
  //   this.setState({ proudInput });
  // }
  // handleExciteChange(e) {
  //   const exciteInput = e.target.value;
  //   this.setState({ exciteInput });
  // }
  // handleIntentionChange(e) {
  //   const intentionInput = e.target.value;
  //   this.setState({ intentionInput });
  // }


    return (
      <>
        <Form onSubmit={handleFormSubmit}>
          <div className="d-inline p-2">
            <div className="form-group col-md-8">
              <label htmlFor="exampleFormControlTextarea1"></label>
              {/* <Form.Group>
          <Form.Label htmlFor='proud'>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='What did you feel most proud of today'
            name='proud'
            onChange={handleInputChange}
            value={userFormData.proud}
            required
          />
          <Form.Control.Feedback type='invalid'>Name is required!</Form.Control.Feedback>
        </Form.Group> */}
              <textarea
                name="proud"
                placeholder="What did you feel most proud of today?"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={userFormData.proud}
                autoFocus
                onChange={handleInputChange}

              ></textarea>
            </div>
            <div className="form-group col-md-8">
              <label htmlFor="exampleFormControlTextarea1"></label>
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
            <div className="form-group col-md-8">
              <label htmlFor="exampleFormControlTextarea1"></label>
              <textarea
                name="intentionInput"
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
            <Button type="button" as={Link} to="/submittedDT" onClick={handleFormSubmit}>submit</Button>
          </div>
        </Form>
      </>
    );
  }

export default FormSubmission;
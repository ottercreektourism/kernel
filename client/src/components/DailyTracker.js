import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import DayRating from '../components/Slider';
import DayRating from '../components/Dropdown';



class FormSubmission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      proudInput: "",
      exciteInput: "",
      intentionInput: "",
      error: "",
      isSubmitted: false,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleProudChange = this.handleProudChange.bind(this);
    this.handleExciteChange = this.handleExciteChange.bind(this);
    this.handleIntentionChange = this.handleIntentionChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log("words");
    if (
      !this.state.proudInput ||
      !this.state.exciteInput ||
      !this.state.intentionInput
    ) {
      this.setState(() => ({
        error: "Please fill in your journal prompts before submitting!",
      }));
    } else {
      this.setState(() => ({ error: "" }, { isSubmitted: true }));

      fetch("/TODO", {
        method: "POST",
        body: {
          proudInput: this.state.proudInput,
          exciteInput: this.state.exciteInput,
          intentionInput: this.state.intentionInput,
        },
      });
    }
  }

  handleProudChange(e) {
    const proudInput = e.target.value;
    this.setState({ proudInput });
  }
  handleExciteChange(e) {
    const exciteInput = e.target.value;
    this.setState({ exciteInput });
  }
  handleIntentionChange(e) {
    const intentionInput = e.target.value;
    this.setState({ intentionInput });
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleFormSubmit}>
          <div className="d-inline p-2">
            <div className="form-group col-md-8">
              <label htmlFor="exampleFormControlTextarea1"></label>
              <textarea
                name="proud"
                placeholder="What did you feel most proud of today?"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                defaultValue={this.state.proudInput}
                autoFocus
                onChange={this.handleProudChange}
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
                defaultValue={this.state.exciteInput}
                onChange={this.handleExciteChange}
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
                defaultValue={this.state.intentionInput}
                onChange={this.handleIntentionChange}
              ></textarea>
            </div>
          </div>
          <div>
            <DayRating />
          </div>
          <div>
            <Button type="button" as={Link} to="/submittedDT" onClick={this.handleFormSubmit}>submit</Button>
          </div>
        </Form>
        <div>{this.state.error}</div>
      </>
    );
  }
}

export default FormSubmission;
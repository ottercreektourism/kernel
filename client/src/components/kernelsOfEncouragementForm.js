import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

function KernelsOfEncouragement() {
  const [newKernel, setNewKernel] = useState("");

  // function to register that a kernel was submitted so it can be put into the array.
  // TODO: make sure the kernel doesnt get sent back to original user
  const submitKernel = () => {
    fetch("/", {
      method: "POST",
      body: newKernel,
    });
    console.log(newKernel);
  };

  return (
    <div>
      <div className="d-inline p-2"></div>
      <div className="form-group col-md-8"></div>
      <label htmlFor="exampleFormControlTextarea1"></label>
      <textarea
        placeholder="Type some words of encouragement"
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        defaultValue={newKernel}
        onChange={(event) => setNewKernel(event.target.value)}
      />
      {/* submits the kernel when the button is clicked */}
      <Button onClick={submitKernel}>send</Button>
    </div>
    
    // below is an alternate way of using the form submission
    // TODO: Make the form notify you if the message was sent or not.
    // <Content onSubmit={this.submitKernel}>
    //     <Form>
    //         <Form.Group>
    //             <Form.Label htmlFor="message">message</Form.Label>
    //             <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}/>
    //         </Form.Group>
    //     </Form>

    // </Content>

  );
}

export default KernelsOfEncouragement;

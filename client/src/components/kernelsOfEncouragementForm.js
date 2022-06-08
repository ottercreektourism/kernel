import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
const axios = require('axios');

function KernelsOfEncouragement() {
  const [newKernel, setNewKernel] = useState("");

  // function to register that a kernel was submitted so it can be put into the array.
  
 const quoteTime = () => {
    axios
    .get('https://type.fit/api/quotes')
    .then(res => {
      let arrayIndex = Math.floor(Math.random() * res.data.length);
      const randomtxt = res.data[arrayIndex].text
      const randomauthor = res.data[arrayIndex].author
      console.log(randomtxt, randomauthor)
      setNewKernel(randomtxt);
      
    })
    .catch(error => {
      console.error(error);
    });
  };


  return (

    <div className="d-flex mx-auto mt-4">
      {/* submits the kernel when the button is clicked */}
      <div className="justify-content-center "><h1 >{newKernel}</h1>
      <Button className="btn btn-dark justify-content-center mt-2 d-flex mx-auto mt-4" onClick={quoteTime}>Click for encouragement</Button>
      </div>
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

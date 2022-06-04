import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";


function SubmittedDT() {
    return (
      <div>
        <h3>Congrats on your submission.</h3>
        <div>
          <h5>Would you like to send a kernel of encouragement to a fellow Kernel user at random?</h5>
        </div>
        <div>
            <Button type="button" as={Link} to="/wordsOfEncouragement">Yes</Button>
            <Button type="button" as={Link} to="/grid">Maybe next time</Button>
        </div>
      </div>
    );
  }
  
  export default SubmittedDT;
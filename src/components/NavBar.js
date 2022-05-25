import React from "react";
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';



function NavBar() {
  return (

    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">kernel</Navbar.Brand>
          <Nav>
            <Nav.Link  to="#">Daily Tracker</Nav.Link>
            <Nav.Link  to="#">Grid</Nav.Link>
            <Nav.Link  to='#'>Resources</Nav.Link>
            <Nav.Link to="#deets">Kernels of Encouragement</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            Logout
            </Nav.Link>
    </Nav>
        </Container>
      </Navbar>
      <br />

    </>

  );

}


export default NavBar
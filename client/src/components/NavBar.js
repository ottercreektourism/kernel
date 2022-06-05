import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            kernel
          </Navbar.Brand>
          {Auth.loggedIn() ? (
          <Nav>

            <Nav.Link as={Link} to="/dailytracker">
              Daily Tracker
            </Nav.Link>
            <Nav.Link as={Link} to="/grid">
              Grid
            </Nav.Link>
            <Nav.Link as={Link} to="/resources">
              Resources
            </Nav.Link>
            <Nav.Link as={Link} to="/wordsofencouragement">
              Kernels of Encouragement
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Logout
            </Nav.Link>
          </Nav>
          ): <Nav.Link>Login/Sign Up</Nav.Link>
          }
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;

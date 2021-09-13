import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Navb = () => {
  return (
    /*     <div className="nav-bar">
          <Link className="main" to="/">Photosite</Link>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/signup"><button>Sign Up</button></Link>
        </div> */

    <div className="navbar-all">
      <Navbar id="a" fixed="top" collapseOnSelect expand="lg" /* bg="dark" variant="dark" */ className="py-0" >
        <Container fluid>
          <Navbar.Brand> <Link className="main" to="/">Photosite</Link></Navbar.Brand>
          <Nav className="mb-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link href="/login" ><Button className="ms-0 btn btn-warning">Login</Button></Nav.Link>
            <Nav.Link href="/signup" ><Button className="ms-0 btn btn-warning ">Signup</Button></Nav.Link>
          </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navb;
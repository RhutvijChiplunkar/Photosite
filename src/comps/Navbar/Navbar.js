import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Navb = () => {
  return (
    <div className="navbar-all">
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-0" >
        <Container fluid>
          <Navbar.Brand> <Link to="/" className="title">Photosite</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav.Link href="/login" ><Button className="btn">Login</Button></Nav.Link>
            <Nav.Link href="/signup" ><Button className="btn">Signup</Button></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
}

export default Navb;
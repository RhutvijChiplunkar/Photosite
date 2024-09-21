import React,{useContext} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { AuthContext } from '../Auth/Auth';
import fire from '../../firebase/config.js';

const Navb = () => {

  const{currentUser}=useContext(AuthContext)
 
  var usr;
  if(currentUser){
      usr=currentUser.uid
  }

  return (
    <div className="navbar-all">
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-0" >
        <Container fluid>
          <Navbar.Brand> <Link to="/" className="title">Photosite</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav >
            <Nav className="text-center">
            {!currentUser && <Nav.Link href="/login" ><Button className="btn">Login</Button></Nav.Link>}
            {!currentUser && <Nav.Link href="/signup" ><Button className="btn">Signup</Button></Nav.Link>}
            {currentUser && <Button className="so-btn" onClick={()=>fire.auth().signOut()} variant="primary" type="submit">Sign Out</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
}

export default Navb;
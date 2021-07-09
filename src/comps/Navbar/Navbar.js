import React,{Component} from 'react';
import './Navbar.css';
import { Link ,Router} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="nav-bar">
            <Link className="main" to="/">Photosite</Link>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
         </div> 
     );
}
 
export default Navbar;
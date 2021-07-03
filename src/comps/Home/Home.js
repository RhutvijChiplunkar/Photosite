import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import { AuthContext } from '../Auth/Auth';
import './Home.css';

const Home = () => {
    const{currentUser}=useContext(AuthContext)
    return ( 
        <div>
            <h1>Hola Users!</h1>
            <h2>This is site where you can upload your collection of photos and view them in a grid-like structure</h2>
            {currentUser?
                (<p>You are logged in-<Link to="/dashboard">View Your Dashboard</Link></p>):
                (<p>You can Login or Signup</p>)
            }                
        </div>
     );
}
 
export default Home;
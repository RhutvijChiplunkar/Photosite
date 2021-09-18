import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import { AuthContext } from '../Auth/Auth';
import './Home.css';

const Home = () => {
    const{currentUser}=useContext(AuthContext)
 
    var usr;
    if(currentUser){
        usr=currentUser.uid
    }

   
    return ( 
        <div className="home">
            <h1>Hola Users!</h1>
            <h2>This is site where you can upload your collection of photos and view them in a grid-like structure</h2>
            {currentUser?
                (
                <p>You are logged in-<Link to={`/dashboard/${usr}`}>View Your Dashboard</Link></p>
               
                ):
                (
                <div>
                </div>
                )
            }            
        </div>
     );
}
 
export default Home;
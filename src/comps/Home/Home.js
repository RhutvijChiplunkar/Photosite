import React,{useContext,useState} from 'react';
import {Link} from "react-router-dom";
import { AuthContext } from '../Auth/Auth';
import './Home.css';

const Home = () => {
    const{currentUser}=useContext(AuthContext)
    /* const[userId,setUserId]=useState(null); */

    var usr;
    if(currentUser){
        var usr=currentUser.uid
    }

   
    return ( 
        <div>
            <h1>Hola Users!</h1>
            <h2>This is site where you can upload your collection of photos and view them in a grid-like structure</h2>
            {currentUser?
                (
                <p>You are logged in-<Link to={`/dashboard/${usr}`}>View Your Dashboard</Link></p>
               
                ):
                (
                <div>
                    <p>You can Login or Signup from our navbar</p>
                </div>
                )
            }
            <h4>Take a look at the grid :)</h4>                
        </div>
     );
}
 
export default Home;
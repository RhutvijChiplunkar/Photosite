import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import { AuthContext } from '../Auth/Auth';

const Home = () => {
    const{currentUser}=useContext(AuthContext)
    return ( 
        <div>

            <h1>Home Page</h1>
            {currentUser?
                (<p>You are logged in-<Link to="/dashboard">View Your Dashboard</Link></p>):
                (<p>You can Login or Signup</p>)
            }
                
        </div>
     );
}
 
export default Home;
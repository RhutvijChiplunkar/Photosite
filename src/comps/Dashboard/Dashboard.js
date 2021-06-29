import React,{useState,useContext} from 'react';
import fire from '../../firebase/config.js';
/* import './Login.css'; */
import {Redirect } from 'react-router-dom';
import {AuthContext} from '../Auth/Auth';

const Dashboard = () => {
    const{currentUser}=useContext(AuthContext);

    if(!currentUser){
        return <Redirect to="/login" />
    }
    return (  
        <div>
            <h1 style={{color:"white"}}>Welcome to photosite</h1>
            <p>This is your dashboard. You are logged in successfully</p>
            <button onClick={()=>fire.auth().signOut()}>Sign Out</button>
        </div>
    );
}
 
export default Dashboard;
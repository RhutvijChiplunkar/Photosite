import React,{useState,useContext} from 'react';
import fire from '../../firebase/config.js';
import './Dashboard.css';
import {Redirect } from 'react-router-dom';
import {AuthContext} from '../Auth/Auth';
import UploadForm from '../UploadForm/UploadForm';

const Dashboard = () => {
    const{currentUser}=useContext(AuthContext);

    if(!currentUser){
        return <Redirect to="/" />
    }
    return (  
        <div className="dash">
            <h1>Welcome to photosite</h1>
            <p>This is your dashboard. You are logged in successfully</p>
            <UploadForm/>
            <button onClick={()=>fire.auth().signOut()}>Sign Out</button>
        </div>
    );
}
 
export default Dashboard;
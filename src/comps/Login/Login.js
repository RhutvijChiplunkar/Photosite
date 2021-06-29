import React,{useState,useContext} from 'react';
import fire from '../../firebase/config.js';
/* import './Login.css'; */
import {Redirect } from 'react-router-dom';
import {AuthContext} from '../Auth/Auth';

const Login=()=>{

    const handleSubmit=(e)=>{
        e.preventDefault();
        const{email,password}=e.target.elements;
        try{
            fire.auth().signInWithEmailAndPassword(email,password)
        }
        catch(error){
            alert(error);
        }
    }

    const{currentUser}=useContext(AuthContext);
    if(currentUser){
        return <Redirect to="/dashboard" />
    }
    return(
        <div>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="Email" />
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default Login;

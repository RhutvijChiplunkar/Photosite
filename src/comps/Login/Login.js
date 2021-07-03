import React,{useState,useContext} from 'react';
import fire from '../../firebase/config.js';
import './Login.css';
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
        <form className="login-form" onSubmit={handleSubmit}>
            <h1>Log In</h1>
            <label for="email">Email</label><br></br>
            <input type="email" name="email" placeholder="Email" /><br></br>
            <label for="password">Password</label><br></br>
            <input type="password" name="password" placeholder="Password" /><br></br>
            <button type="submit">Login</button>
        </form>
      </div>
    )
}

export default Login;

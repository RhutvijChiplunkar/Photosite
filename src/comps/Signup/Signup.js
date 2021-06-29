import React,{Component} from 'react';
import fire from '../../firebase/config.js';
import { useState } from 'react';


const Signout= () => {
    const[email,setEmail]=useState(null);
    const[password,setPassword]=useState(null);

    const signup=(e)=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email,password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (  
        <div className="login-container">
            <h1>Signup Form</h1>
            <form className="login-form">
                <label className="login">
                <input
                type="email"
                id="email"
                name="email"
                placeholder="enter email address"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                </label>
                <label className="login">
                <input
                name="password"
                type= "password"
                id="password"
                placeholder="enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                </label>
                <button className="btn" onClick={signup}>Signup</button>
            </form>

        </div>
    );
}
 
export default Signout;
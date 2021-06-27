import React,{Component} from 'react';
import fire from '../firebase/config.js';
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
        <div>
            <form>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="enter email address"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                name="password"
                type= "password"
                id="password"
                placeholder="enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button onClick={signup}>Signup</button>
            </form>

        </div>
    );
}
 
export default Signout;
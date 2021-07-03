import React,{useState} from 'react';
import fire from '../../firebase/config.js';
import { Redirect } from 'react-router-dom';
import '../Login/Login.css'


const Signup= () => {
    /* const[email,setEmail]=useState(null);
    const[password,setPassword]=useState(null); */

    const[currentUser,setCurrentUser]=useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const{email,password}=e.target.elements; 

        try{
            fire.auth().createUserWithEmailAndPassword(email.value,password.value);
            setCurrentUser(true);
        }
        catch(error){
            alert(error);
        }
    }

    if(currentUser){
        return <Redirect to="/dashboard" />;
    }

    return (  
        <div>
        <form className="login-form" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <label for="email">Email</label><br></br>
            <input type="email" name="email" placeholder="Email" /><br></br>
            <label for="password">Password</label><br></br>
            <input type="password" name="password" placeholder="Password" /><br></br>
            <button type="submit">Sign Up</button>
        </form>
      </div>
    );
}
 
export default Signup;
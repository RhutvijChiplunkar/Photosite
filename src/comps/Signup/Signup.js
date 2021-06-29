import React,{useState} from 'react';
import fire from '../../firebase/config.js';
import { Redirect } from 'react-router-dom';


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
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="Email" />
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}
 
export default Signup;
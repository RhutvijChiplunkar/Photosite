import React,{useState} from 'react';
import fire from '../../firebase/config.js';
import { Link } from 'react-router-dom';
import '../Login/Login.css'


const Signup= () => {

    const[currentUser,setCurrentUser]=useState(null);
    const[userId,setUserId]=useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const{email,password}=e.target.elements; 

        fire.auth().createUserWithEmailAndPassword(email.value,password.value).then((u)=>{
            setCurrentUser(true);
            setUserId(u.user.uid);
            console.log(u.user.uid);
        }).catch((err)=>{
            alert(err);
        })
    }

    if(currentUser){
        return (
            <div className="signup-conf">
            <h1>User successfully created</h1>
            <h1><Link  to={`/dashboard/${userId}`}>My dashboard</Link></h1>
            </div>
        ); 
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
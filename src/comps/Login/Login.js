import React,{useState,useContext} from 'react';
import fire from '../../firebase/config.js';
import { Form, Button } from "react-bootstrap";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect } from 'react-router-dom';
import {AuthContext} from '../Auth/Auth';

const Login=()=>{
    const[userId,setUserId]=useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
         const{email,password}=e.target.elements;

        fire.auth().signInWithEmailAndPassword(email.value,password.value).then((u)=>{
            console.log(u.user.uid);
            setUserId(u.user.uid);
        }).catch((err)=>{
            alert(err);
        })
    }

    const{currentUser}=useContext(AuthContext);
   

    if(currentUser){
        return <Redirect to={`/dashboard/${userId}` }/>
    }
    
    return(
        <div className="login-forms">
        <Form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <hr/>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>

            <a href='/signup'>New here? Register</a><br/><br/>

            <Button variant="primary" type="submit">
                Login
            </Button>

        </Form>
    </div>
    )
}

export default Login;
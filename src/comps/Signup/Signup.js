import React,{useState} from 'react';
import fire from '../../firebase/config.js';
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
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
        <div className="signup-forms">
        <Form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <hr/>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <a href='/login'>Already have an account? Login</a><br/><br/>

            <Button id="x2" variant="primary" type="submit">
                Signup
            </Button>

        </Form>
    </div>
    );
}
 
export default Signup;
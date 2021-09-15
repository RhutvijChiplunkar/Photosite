import React,{useState,useContext} from 'react';
import fire from '../../firebase/config.js';
import './Dashboard.css';
import {Redirect } from 'react-router-dom';
import {AuthContext} from '../Auth/Auth';
import UploadForm from '../UploadForm/UploadForm';
import TotalPosts from '../TotalPosts/TotalPosts.js';
import ImageGrid from '../ImageGrid/ImageGrid.js';
import Modal from '../Modal/Modal.js';
import { Button } from 'react-bootstrap';

const Dashboard = () => {
    //this is used to enlarge an image when clicked
    const[selectedImage,setSelectedImage]=useState(null);
    const{currentUser}=useContext(AuthContext);

    if(!currentUser){
        return <Redirect to="/" />
    }
    return (  
        <div className="dash">
            <h1>Welcome to photosite</h1>
            <p>This is your dashboard. You are logged in successfully</p>
            <UploadForm/>
            <TotalPosts/>
            <ImageGrid setSelectedImage={setSelectedImage}/>
            {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
            {/* <button onClick={()=>fire.auth().signOut()}>Sign Out</button> */}
            <Button onClick={()=>fire.auth().signOut()} >Sign Out</Button>
        </div>
    );
}
 
export default Dashboard;
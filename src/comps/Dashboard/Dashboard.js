import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../Auth/Auth';
import ImageGrid from '../ImageGrid/ImageGrid.js';
import Modal from '../Modal/Modal.js';
import TotalPosts from '../TotalPosts/TotalPosts.js';
import UploadForm from '../UploadForm/UploadForm';
import './Dashboard.css';

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
            <p>This is your dashboard.</p>
            <UploadForm/>
            <TotalPosts/>
            <ImageGrid setSelectedImage={setSelectedImage}/>
            {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
        </div>
    );
}
 
export default Dashboard;
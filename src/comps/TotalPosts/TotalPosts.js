import { AuthContext } from '../Auth/Auth';
import React, {useContext,useEffect } from 'react';
import useFirestore from '../../hooks/useFirestore';
import './TotalPosts.css';

const TotalPosts = () => {
    const{currentUser}=useContext(AuthContext)
 
    var userId;
    if(currentUser){
        userId=currentUser.uid
    }
    else{
        userId='images';
    }
    const {docs}=useFirestore(`${userId}`);
    var x=docs.length;
    return (  
        <div className="total-posts">
            <h3>Total Posts</h3>
            <h2>{x}</h2>
        </div>
    );
}
 
export default TotalPosts;
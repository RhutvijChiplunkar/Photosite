import React ,{Component} from 'react';
import fire from '../firebase/config.js';

const Logout=({setUser})=>{

    const logout=()=>{
        fire.auth().signOut();
        setUser(null);
    }

    return(
            <div>
               <h1 style={{color:"white"}}>You are logged in !!!</h1>
                <button onClick={logout}>Logout</button>
            </div>
        );
    }

export default Logout;
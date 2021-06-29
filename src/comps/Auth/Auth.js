import React, { useEffect, useState } from "react";
import fire from '../../firebase/config.js';

/*Here we create a AuthContext object which is used to share the currentUser status between our various components. 
onAuthStateChanged is an observer for changes to the user’s sign-in state, this is triggered when user’s sign in or sign out.*/
export const AuthContext=React.createContext();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        fire.auth().onAuthStateChanged((user)=>{
            setCurrentUser(user);
            setLoading(false);
        });
    },[]);

    if(loading){
        return <p>Loading....Please Wait!</p>
    }
    return (  
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
}
 
export default AuthProvider;
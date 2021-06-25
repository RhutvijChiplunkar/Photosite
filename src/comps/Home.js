import React ,{Component} from 'react';
import fire from '../firebase/config.js';

/* const Home=({setUser})=>{

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

export default Home; */


class Home extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            
        }
    }
    logout(){
        fire.auth().signOut();
    }
    render()
    {
        return(
            <div>
               <h1>You are logged in !!!</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
    }
    export default Home;
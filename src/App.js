import React ,{Component, useState } from 'react';
import Title from './comps/Title/Title';
import UploadForm from './comps/UploadForm/UploadForm';
import ImageGrid from './comps/ImageGrid/ImageGrid';
import Modal from './comps/Modal/Modal';
import TotalPosts from './comps/TotalPosts/TotalPosts';
import fire from './firebase/config';
import Logout from './comps/Logout';
import Login from './comps/Login';
import Signup from './comps/Signup';
import Navbar from './comps/Navbar/Navbar';
import Home from './comps/Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

 function App() {

  //this is used to enlarge an image when clicked
  const[selectedImage,setSelectedImage]=useState(null);

  const[user,setUser]=useState({});

  function componentDidMount(){
      this.authListener();
  }
  function authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        setUser({user});
      }
      else{
        setUser({user:null});
      }
    })
  }
  return (
    <Router>
      <Navbar/>

      <div className="App">
        <Switch>
          <Route exact path="/Login"> 
            <Login/>
          </Route>
          <Route exact path="/Signup"> 
            <Signup/>
          </Route>
          <Route exact path="/main"> 
            <Title/>
            <UploadForm/>
            <TotalPosts/>
            <ImageGrid setSelectedImage={setSelectedImage}/>
            {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        

        {user ? (<Logout setUser={setUser}/>): (<Login/>) }
        </Switch>
      </div>
    </Router>
  );
}

export default App;


/* class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.user ? (<Home/>) : (<Login/>)}
      </div>
    );
  }
}

export default App; */
import React ,{useState } from 'react';
import Title from './comps/Title/Title';
import UploadForm from './comps/UploadForm/UploadForm';
import ImageGrid from './comps/ImageGrid/ImageGrid';
import Modal from './comps/Modal/Modal';
import TotalPosts from './comps/TotalPosts/TotalPosts';
import Login from './comps/Login/Login';
import Signup from './comps/Signup/Signup';
import Navbar from './comps/Navbar/Navbar';
import Home from './comps/Home/Home';
import Dashboard from './comps/Dashboard/Dashboard';
import NotFound from './comps/NotFound/NotFound';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import AuthProvider from './comps/Auth/Auth';

const App=()=> {

  //this is used to enlarge an image when clicked
  const[selectedImage,setSelectedImage]=useState(null);

  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <div className="App">
          <Switch>

            <Route exact path="/">
              <Home/>
              <Title/>
              <TotalPosts/>
              <ImageGrid setSelectedImage={setSelectedImage}/>
              {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
            </Route>

            <Route exact path="/login"> 
              <Login/>
            </Route>

            <Route exact path="/signup"> 
              <Signup/>
            </Route>

            <Route path="/dashboard/:id"> 
              <Dashboard/>
            </Route>

            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>

        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

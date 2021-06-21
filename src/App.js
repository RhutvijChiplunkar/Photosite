import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import { useState } from 'react';
import TotalPosts from './comps/TotalPosts';

function App() {

  //this is used to enlarge an image when clicked
  const[selectedImage,setSelectedImage]=useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <TotalPosts/>
      <ImageGrid setSelectedImage={setSelectedImage}/>
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default App;

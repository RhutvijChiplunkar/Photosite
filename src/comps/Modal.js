import React from 'react';
import {motion} from 'framer-motion';

const Modal = ({selectedImage,setSelectedImage}) => {
    const handleClick=(e)=>{

        //check if user clicks outside the image
        if(e.target.classList.contains('backdrop')){
            setSelectedImage(null);
        }
        
    }
    return (  
        <motion.div className="backdrop" onClick={handleClick}
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            <motion.img src={selectedImage} alt="enlarged Pic here"
                initial={{y:"-100vh"}}
                animate={{y: 0}}
            ></motion.img>
        </motion.div>
    );
}
 
export default Modal;
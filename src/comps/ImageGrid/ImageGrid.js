import React, {useContext} from 'react';
import useFirestore from '../../hooks/useFirestore';
import {motion} from 'framer-motion';
import { AuthContext } from '../Auth/Auth';
import './ImageGrid.css'

const ImageGrid= ({setSelectedImage}) => {
    const{currentUser}=useContext(AuthContext)
 
    var userId;
    if(currentUser){
        userId=currentUser.uid;
    }
    else{
        userId='images';
    }
    //const {docs}=useFirestore('images');
    const {docs}=useFirestore(`${userId}`);

    return (

        <div className="img-grid">
        { docs && docs.map(doc=>(
            //motion.div when we want to use motion in div
            <motion.div className="img-wrap" key={doc.id}
            layout
            /* whileHover={{ opacity:1}} */
            whileHover={{scale:1.2}}
            //click event added in div tag
                onClick={()=>setSelectedImage(doc.url)}> 
                    <motion.img src={doc.url} alt="uploaded pic" 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1}}
                    />
            </motion.div>
        ))}
        </div>

    );
}
 
export default ImageGrid;
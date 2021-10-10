import React, { useContext } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';
import { AuthContext } from '../Auth/Auth';
import './ImageGrid.css'
import { projectFirestore } from '../../firebase/config';
const ImageGrid = ({ setSelectedImage }) => {
    const { currentUser } = useContext(AuthContext)

    var userId;
    if (currentUser) {
        userId = currentUser.uid;
    }
    else {
        userId = 'images';
    }
    //const {docs}=useFirestore('images');
    const { docs } = useFirestore(`${userId}`);

    return (

        <div className="img-grid">
            {docs && docs.map(doc => (
                <div>
                    {currentUser ?
                        (
                            <div>
                                <button className="cross" onClick={(e) => { projectFirestore.collection(`${userId}`).doc(doc.id).delete(); }}>x</button>
                            </div>
                        ) :
                        (
                            <div>
                                <button className="cross" disabled="true">x</button>
                            </div>
                        )
                    }
                    <motion.div className="img-wrap" key={doc.id}
                        layout
                        whileHover={{ scale: 1.15 }}
                        //click event added in div tag
                        onClick={() => setSelectedImage(doc.url)}>

                        <motion.img src={doc.url} alt="uploaded pic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        />
                    </motion.div>

                </div>
            ))}

        </div>

    );
}

export default ImageGrid;
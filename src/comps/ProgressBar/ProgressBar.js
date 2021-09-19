import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import {motion} from 'framer-motion';
import './ProgressBar.css';
import { Container } from 'react-bootstrap';

const ProgressBar = ({file,setFile}) => {
    const{url,progress}=useStorage(file);
    
    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url,setFile]);
    return ( 
        <div>
            <Container className="progress-bar-width">
            <motion.div className="progress-bar"
                initial={{width:0}}  
                animate={{width:progress+'%'}}
                ></motion.div>
            <h3>{progress.toFixed(2)}%</h3>
            </Container>
        </div>    
     );
}
 
export default ProgressBar;
import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import {motion} from 'framer-motion';
import './ProgressBar.css';

const ProgressBar = ({file,setFile}) => {
    const{url,progress}=useStorage(file);
    
    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url,setFile]);
    return ( 
        <div>
            <motion.div className="progress-bar"
                initial={{width:0}}  
                animate={{width:progress+'%'}}
                ></motion.div>
            <h3>{progress.toFixed(2)}%</h3>
        </div>
    
     );
}
 
export default ProgressBar;
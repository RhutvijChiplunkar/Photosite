import {useContext,useState,useEffect} from 'react';
import {projectStorage,projectFirestore,timestamp} from '../firebase/config';
import { AuthContext } from '../comps/Auth/Auth';

const useStorage = (file) => {
    
    const{currentUser}=useContext(AuthContext);
    var usr;
    if(currentUser){
        usr=currentUser.uid;
    }

    const[progress,setProgress]=useState(0);
    const[error,setError]=useState(null);
    const[url,setUrl]=useState(null);

    useEffect(()=>{
        //references
        const storageRef=projectStorage.ref(file.name);
        //store refernece url of the image
        const collectionRef=projectFirestore.collection(`${usr}`)

        /* uploading the file to the reference */
        storageRef.put(file).on('state_changed',(snap)=>{
            let percentage=(snap.bytesTransferred / snap.totalBytes)*100;
            setProgress(percentage);
        },(err)=>{
            setError(err);
        },async ()=>{
            const url=await storageRef.getDownloadURL();
            const createdAt=timestamp();
            collectionRef.add({url,createdAt})
            setUrl(url);
        })
    },[file]);
    return {progress,url,error};
}
 
export default useStorage;
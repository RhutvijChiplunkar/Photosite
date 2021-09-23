import firebase from 'firebase/app';
import 'firebase/storage/';
import 'firebase/firestore/';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA1iZvMEy2Em1CX-rDT0lLrFGUqdt3AjSg",
  authDomain: "photosite-c5a99.firebaseapp.com",
  projectId: "photosite-c5a99",
  storageBucket: "photosite-c5a99.appspot.com",
  messagingSenderId: "856159740341",
  appId: "1:856159740341:web:77575258a519e84f8c39fc"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
//to get time of the uploaded image
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
export default fire;
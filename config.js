import firebase from 'firebase'
require("@firebase/firestore")
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBp6X9L_HzQub953Askq3hgEoKf7Zl7SF8",
  authDomain: "pro71-88c54.firebaseapp.com",
  projectId: "pro71-88c54",
  storageBucket: "pro71-88c54.appspot.com",
  messagingSenderId: "138486713650",
  appId: "1:138486713650:web:87c21229cc788595e6db2b"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAL5QDcAR7ZcjNTFI_HnU8tpwnrsXwiAVk",
    authDomain: "react-proyects-eee92.firebaseapp.com",
    databaseURL: "https://react-proyects-eee92.firebaseio.com",
    projectId: "react-proyects-eee92",
    storageBucket: "react-proyects-eee92.appspot.com",
    messagingSenderId: "368539648856",
    appId: "1:368539648856:web:e9bd06a1007da9c06a5b2d"
};

firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}
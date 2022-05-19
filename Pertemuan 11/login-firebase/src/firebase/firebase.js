import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAepD6rU6pXEA9n28t1vmjdp0tZTI6K-5o",
    authDomain: "login-dimas.firebaseapp.com",
    projectId: "login-dimas",
    storageBucket: "login-dimas.appspot.com",
    messagingSenderId: "974430399921",
    appId: "1:974430399921:web:dca91323d4e44d0467e190"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
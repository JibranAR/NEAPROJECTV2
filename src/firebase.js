// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9gXTc9quWGoCfZ4ehPP0ySzpUkV_tx0A",
  authDomain: "nea-auth.firebaseapp.com",
  projectId: "nea-auth",
  storageBucket: "nea-auth.appspot.com",
  messagingSenderId: "753764699860",
  appId: "1:753764699860:web:5e2374425709c9ea2eb541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password);


}
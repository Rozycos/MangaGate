// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,} from "firebase/auth";
import Firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0lKcLgU2tQf_GZMWNkdRbxl9arcpvL0c",
  authDomain: "mangagate-8b765.firebaseapp.com",
  projectId: "mangagate-8b765",
  storageBucket: "mangagate-8b765.appspot.com",
  messagingSenderId: "350597949448",
  appId: "1:350597949448:web:619a906f1afc130dd0c9bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
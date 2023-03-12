// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase } from "firebase/database";
import Firebase from "firebase/app";
import { doc, getDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB0lKcLgU2tQf_GZMWNkdRbxl9arcpvL0c",
  authDomain: "mangagate-8b765.firebaseapp.com",
  projectId: "mangagate-8b765",
  storageBucket: "mangagate-8b765.appspot.com",
  messagingSenderId: "350597949448",
  appId: "1:350597949448:web:619a906f1afc130dd0c9bd",
  databaseURL: "https://manga_gate.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export const db = getFirestore(app);
export const auth = getAuth(app);
//export const firestore = firebase.firestore();


//to do pociągnięcia z bazy danych
// Get a list of cities from your database
// async function getArticles(db) {
//   const articlesCol = collection(db, 'articles');
//   const articleSnapshot = await getDocs(articlesCol);
//   const articleList = articleSnapshot.docs.map(doc => doc.data());
//   return articleList;
// }
// console.log(getArticles(db))


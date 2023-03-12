import { getDocs, collection } from "firebase/firestore"; 
import React, {createContext, useState, useEffect} from "react";
import { auth } from "./firebase";
import {db} from "./firebase";
//import auth from "./firebase";
import firebase from "./firebase";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase } from "firebase/database";
import Firebase from "firebase/app";
import { doc, getDoc } from "firebase/firestore";
import { getDb } from "./db";

const collection_name = "articles"

export const findAll = async () => {
    const doc_refs = await getDocs(collection(getDb(), collection_name))

    const res = []

    doc_refs.forEach(articles => {
        res.push({
            id: articles.id, 
            ...articles.data()
        })
    })

    return res
}




//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// const docRef = doc(db, "articles");
// const docSnap = await getDoc(docRef);
// console.log("Document data:", docSnap.data());

// Get a list of cities from your database
// async function getArticles(db) {
//     const articlesCol = collection(db, 'articles');
//     const articleSnapshot = await getDocs(articlesCol);
//     const articleList = articleSnapshot.docs.map(doc => doc.data());
//     return articleList;
//   }

//    const GetArticles = ()=> {

//   }
// export default GetArticles;




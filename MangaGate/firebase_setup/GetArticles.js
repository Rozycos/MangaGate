import { getDocs, collection } from "firebase/firestore"; 
//import React, {createContext, useState, useEffect} from "react";
//import { auth } from "./firebase";
//import {db} from "./firebase";
//import auth from "./firebase";
//import firebase from "./firebase";
//import { initializeApp } from "firebase/app";
//import {getAuth} from "firebase/auth";
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import { getDatabase } from "firebase/database";
//import Firebase from "firebase/app";
import { doc, getDoc } from "firebase/firestore";
import { getDb } from "./db";
import { query, where, orderBy, limit } from "firebase/firestore";

const collection_name = "articles"

export const findAll = async () => {
    const collection_ref = collection(getDb(), collection_name);
    //const q = query(collection_ref, where("isPublish", "==", true), where("drama", "==", true), where("comedy", "==", true), limit(5)); needs to create index (click on link in console)
    const q = query(collection_ref, orderBy("created", "desc"), limit(5));
    //const q = query(collection_ref, orderBy("created", "desc"), startAt(doc_refs));
    //const q = query(collection_ref, where("isPublish", "==", true), orderBy("created", "desc")); needs to create index (click on link in console)
    const doc_refs = await getDocs(q);
    // const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
    // const next = query(collection_ref,
    // orderBy("created", "desc"),
    // startAfter(lastVisible),
    // limit(5));

    const res = []

    doc_refs.forEach(articles => {
        res.push({
            id: articles.id, 
            ...articles.data()
        })
    })

    return res
};

export const findOne = async id => {
    const d = await getDoc(doc(getDb(), collection_name, id)) 
    return d.data()
};

//console.log(findOne("37buDCJQJdp6x6L66AAU"))
// export const CountNumber = async () =>{
//     const snapshot = await getCountFromServer(collection_name);
//     console.log('count: ', snapshot.data().count);
// }


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




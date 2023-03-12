import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { firebaseConfig } from "./firebase"; 

let db = false;

export const getDb = () => {
    if(!db){
        firebaseConfig
        // const firebaseConfig = {
        //     apiKey: "AIzaSyB0lKcLgU2tQf_GZMWNkdRbxl9arcpvL0c",
        //     authDomain: "mangagate-8b765.firebaseapp.com",
        //     projectId: "mangagate-8b765",
        //     storageBucket: "mangagate-8b765.appspot.com",
        //     messagingSenderId: "350597949448",
        //     appId: "1:350597949448:web:619a906f1afc130dd0c9bd",
        //     databaseURL: "https://manga_gate.firebaseio.com",
        // }

        const app = initializeApp(firebaseConfig)

        db = getFirestore(app)
    }

    return db
}
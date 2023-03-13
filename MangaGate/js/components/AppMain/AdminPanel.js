import React, { useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase_setup/firebase";
import Navigation from "../LandingPage/Navigation";
import LoginForm from "./LoginForm";
import { Link } from 'react-router-dom';
import Hamburger from "../LandingPage/Hamburger";
import { AppContext } from "../context/UserProvider";
import ArticleForm from "./ArticleForm";
import AddArticle from "../Database/AddArticle";

const handleSignOut = () => auth.signOut();

const AppMain = () => {
  const{currentUser} = useContext(AppContext)

  return (
      <>
        <header className="header">
          <Navigation />
        </header> 
        <main className="page__wrapper--admin">
        {currentUser ? (
          <>
             <h2 style={{backgroundColor:"white"}}>Welcome to {currentUser.email} admin panel</h2>
             <button className="btn btn__primary btn__form" onClick={handleSignOut}>LogOut</button>
             <ArticleForm/>
             
          </>
        ):(
            <LoginForm/>
        )}
        </main>
      </>
    
    )
    
  }

 
export default AppMain; 

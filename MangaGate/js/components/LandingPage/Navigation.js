import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { AppContext } from "../context/UserProvider";
import Hamburger from './Hamburger';

const Navigation = () =>{
    const{currentUser} = useContext(AppContext)
    return (
        <nav className="nav">
            <Link className="logo"to="/"><h1 className="logo__element">Manga<span>Gate.com</span></h1></Link>
            <ul className="header__nav">
                {currentUser === null ? (
                <li className="nav__element"></li>
                ) : (
                <li className="nav__element">{"User: " + currentUser.email}</li>)}
                <li className="nav__element"><Link className="nav__link" to="/">Home</Link></li>     
                <li className="nav__element"><Hamburger /></li>                
            </ul>
        </nav>
    )
}

export default Navigation;
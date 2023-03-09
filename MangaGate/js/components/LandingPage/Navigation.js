import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';

const Navigation = (user) =>{

    return (
        <nav className="nav">
            <Link className="logo"to="/"><h1 className="logo__element">Manga<span>Gate.com</span></h1></Link>
            <ul className="header__nav">
                <li className="nav__element">{"User: " + localStorage.userName}</li>
                <li className="nav__element"><Link className="nav__link" to="/">Home</Link></li>     
                <li className="nav__element"><Hamburger /></li>                
            </ul>
        </nav>
    )
}

export default Navigation;
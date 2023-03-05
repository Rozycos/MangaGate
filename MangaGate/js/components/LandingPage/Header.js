import React from "react";
import { Link } from 'react-router-dom';
import Hamburger from "./Hamburger";

const Header = () => {


    return (
        <>
            <header className="header container">
                <nav className="nav">
                    <Link className="logo"to="/"><h1 className="logo__element">Manga<span>Gate.com</span></h1></Link>
                    <ul className="header__nav">
                        <li className="nav__element"><Link className="nav__link" to="/">Home</Link></li>
                        <li className="nav__element"><Link className="nav__link" to="/connect">Connect</Link></li>
                        <li className="nav__element"><Link className="nav__link" to="/sign_up">Sign Up</Link></li>
                        <li className="nav__element"><Link className="nav__link" to="/admin">Login</Link></li>      
                        <li className="nav__element"><Hamburger /></li>                
                    </ul>
                    
                    
                </nav>
                
                <section className=" container slider">
                    <div className="hero"></div>
                </section>
            </header>
        </>
    )
}

export default Header;
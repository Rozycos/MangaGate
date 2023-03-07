import React from "react";
import { Link } from 'react-router-dom';
import Hamburger from "./Hamburger";
import Navigation from "./Navigation";

const Header = () => {


    return (
        <>
            <header className="header container">
                <Navigation/>
                <section className=" container slider">
                    <div className="hero"></div>
                </section>
            </header>
        </>
    )
}

export default Header;
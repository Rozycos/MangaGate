import React from "react";
import { Link } from 'react-router-dom';
import Hamburger from "./Hamburger";
import Navigation from "./Navigation";
import Hero from "./Hero";

const Header = () => {


    return (
        <>
            <header className="header container">
                <Navigation/>
                <Hero/>
            </header>
        </>
    )
}

export default Header;
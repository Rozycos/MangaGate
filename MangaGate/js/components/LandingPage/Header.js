import React from "react";
import { Link } from 'react-router-dom';
import Hamburger from "./Hamburger";
import Navigation from "./Navigation";
import Slider from "./Slider";

const Header = () => {


    return (
        <>
            <header className="header container">
                <Navigation/>
                <Slider/>
            </header>
        </>
    )
}

export default Header;
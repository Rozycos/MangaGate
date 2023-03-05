import React from "react";
import BlogSection from "./BlogSection";
import Footer from "./Footer";
import Header from "./Header";
import NewSection from "./NewSection";
import TrendingSection from "./TrendingSection";
// //import '../scss/main.scss';

const LandingPage = () => {
    return (
        <>
            <Header/>
            <main>
                <NewSection/>
                <TrendingSection/>
                <BlogSection/>
                <Footer/>
            </main>
        </>
    )
}

export default LandingPage;
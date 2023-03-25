import React from "react";
import BlogSection from "./BlogSection/BlogSection";
import Footer from "./Footer";
import Header from "./Header/Header";
import NewSection from "../LandingPage/NewSection/NewSection";
// //import '../scss/main.scss';

const LandingPage = () => {
    return (
        <>
            <Header/>
            <main>
                <NewSection/>
                {/* <TrendingSection/> */}
                <BlogSection/>
            </main>
            <Footer/>
        </>
    )
}

export default LandingPage;
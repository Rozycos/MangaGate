import React from "react";
//import Articlelist from "../Database/ArticleList";
import Footer from "../LandingPage/Footer";
//import Header from "../LandingPage/Header";
import Navigation from "../LandingPage/Navigation";
import { findAll, findOne } from "../../../firebase_setup/GetArticles";
import {useParams} from "react-router-dom";
//import SingleArticle from "./SingleArticle";
import { useState, useEffect } from 'react';

const Page =()=>{
    const { articleId } = useParams();
    const [loading, setLoading] = useState(false)
    const [singleArticle, setSingleArticle] = useState([])

    const fetchData = async () => {
        setLoading(true)

        const oneArticle = await findOne(articleId)
        
        setSingleArticle(oneArticle)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            
            <header className="header container">
                <Navigation/>
            </header>
            <main className="container page__wraper">
                {/* <section className="title__section title__section--container">
                    <div style={style}>dupaaa</div>
                </section> */}
                <article>
                    <section className="title__section">
                        <div className="cropped">
                            <img src={singleArticle.imageURL}/> 
                        </div>
                        <h2><span className="title__section--title">{singleArticle.title}</span></h2>
                        
                    </section>
                    <section className="article article__container">
                        <h3><span className="title__section--subtitle">{singleArticle.subtitle}</span></h3>
                    </section>
                    <section className="article article__container">
                    {/* <Articlelist/> */}
                    { loading && 
                        <p>loading...</p>
                    }
                        <p>
                        {singleArticle.postText}
                        </p>
                            
                        
                    </section>
                    <section>
                        <div>
                            coś tam
                        </div>
                    </section>
                </article>
            </main>
            <Footer/>
        </>
    )
}

export default Page;
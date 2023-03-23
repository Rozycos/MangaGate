import React from "react";
import { useState, useEffect } from 'react';
import { findAll } from '../../../firebase_setup/GetArticles';
import ArticleListItem from './ArticleListItem';

const ArticleList=() =>{
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState([])

    const fetchData = async () => {
        setLoading(true)

        const res = await findAll()
        
        setArticles([...res])
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="container box__article">
            {/* <h2>Artykuły</h2> */}
            <div >
                { loading && 
                    <p>loading...</p>
                }

                <ul>
                    {articles.length > 0 && articles.map(articles => (
                        <ArticleListItem key={articles.id} articles={articles} width={"350px"}/>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ArticleList;

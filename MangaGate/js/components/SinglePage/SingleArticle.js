// import React from "react";
// import { useState, useEffect } from 'react';
// import { findOne } from '../../../firebase_setup/GetArticles';
// //import ArticleListItem from './ArticleListItem';
// import Page from "./Page";
// import {useParams} from "react-router-dom";

// const SingleArticle=() =>{
//     const { articleId } = useParams();
//     //const oneArticle = findOne(articleId)

//     const [loading, setLoading] = useState(false)
//     const [singleArticle, setSingleArticle] = useState([])

//     const fetchData = async () => {
//         setLoading(true)

//         const oneArticle = await findOne(articleId)
        
//         setSingleArticle(oneArticle)
//         setLoading(false)
//     }

//     useEffect(() => {
//         fetchData()
//     }, [articleId])

//     return (
//         <section className="container box__article">
//             <>
//                 { loading && 
//                     <p>loading...</p>
//                 }
                
//                     {singleArticle.map(singleArticle => (
//                        <Page key={singleArticle.id} article={singleArticle} />
//                     ))}
//             </>
//         </section>
//     )
// }

// export default SingleArticle;
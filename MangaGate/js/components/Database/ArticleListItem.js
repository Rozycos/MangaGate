import React from "react";

const ArticleListItem=(props)=> {
    const { articles } = props
    
    console.log(articles.imageURL)
    return (
        <li>
            <h3>{articles.title} {articles.subTitle}</h3>
            <img src={articles.imageURL}/>
            <p>treść posta: {articles.post}{articles.id}</p>
        </li>
    )
}

export default ArticleListItem;
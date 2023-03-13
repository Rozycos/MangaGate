import React from "react";

const ArticleListItem=(props)=> {
    const { articles } = props
    
    return (
        <li>
            <h3>{articles.title} {articles.subTitle}</h3>
            <img src={articles.imageURL}/>
            <p>treść posta: {articles.postText}{articles.id}</p>
        </li>
    )
}

export default ArticleListItem;
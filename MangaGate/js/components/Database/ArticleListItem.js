import React from "react";

const ArticleListItem=(props)=> {
    const { articles } = props
    
    return (
        <li>
            <div>
                <img src={articles.imageURL} width="350px" />
            </div>
            <div>   
                <h3>{articles.title} {articles.subTitle}</h3>
                <p style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", maxWidth: "950px"}}>{articles.postText}{articles.id}</p>
            </div> 
        </li>
    )
}

export default ArticleListItem;

// p {
//     display: -webkit-box;
//     overflow: hidden;
//     -webkit-line-clamp: 3;
//     -webkit-box-orient: vertical;
//   }
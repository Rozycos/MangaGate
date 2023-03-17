import React from "react";

const ArticleListItem=(props)=> {
    const { articles, width } = props
    
    return (
        <li className="box__article--list">
            <div>
                <img src={articles.imageURL} />
            </div>
            <div>   
                <h3>{articles.title}</h3>
                <p>{articles.postText}</p>
                <button className="btn btn__primary btn__form">Edit</button>
                <button className="btn btn__primary btn__form btn__logout">Delete</button>
            </div> 
        </li>
    )
}

export default ArticleListItem;


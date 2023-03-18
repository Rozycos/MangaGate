import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

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
                <button className="btn btn__primary btn__form">
                    <NavLink className="admin__link" to={`/page/${articles.id}/${articles.postURL}`}>Read more...</NavLink>
                    {/* <NavLink className="admin__link" to={`/page/${articles.postURL}/${articles.id}`}>Read more...</NavLink> */}
                </button>
            </div> 
        </li>
    )
}

export default ArticleListItem;


import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const NewSectionList = (props) =>{
    const { articles, width } = props
    const [open, setOpen] = useState(false);

    return(
        <span className="new__box new__box--container new__box--span">
                    <img src={articles.imageURL}/>
                    <div className="new__box--text">
                        <span>Fantasy</span>
                        <h3>{articles.title}</h3>
                        <p>{articles.postText}</p>
                        {/* <a className="new__box--text-link">Read Full &#187;</a> */}
                        <NavLink className="new__box--text-link" to={`/page/${articles.id}/${articles.postURL}`}>Read Full &#187;</NavLink>
                    </div>
                </span>
    )

}

export default NewSectionList;
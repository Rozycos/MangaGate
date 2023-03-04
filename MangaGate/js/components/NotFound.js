import React from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
    <div className="page__wrapper">
      <h1 className="error"><span>Error 404</span></h1>
      <br/>
      <h2 className="error">It looks like you're lost...</h2>
      <br/>
      <button className="btn error">
        <Link className="nav__link" to="/">GO BACK HOME</Link>
      </button>
    </div>
    );
  }

export default NotFound; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="hamburger__menu" onClick={toggleMenu}>
      <div className="hamburger__icon">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && (
        <>
          <ul className="hamburger__nav">
            <li className="hamburger__nav--element hide"><Link className="hamburger__nav--link" to="/">Home</Link></li>
            <li className="hamburger__nav--element hide"><Link className="hamburger__nav--link" to="/sign_up">Dashboard</Link></li>
            <li className="hamburger__nav--element hide"><Link className="hamburger__nav--link" to="/sign_up">Sign Up</Link></li>
            <li className="hamburger__nav--element hide"><Link className="hamburger__nav--link" to="/admin">Login</Link></li>
            <li className="hamburger__nav--element"><Link className="hamburger__nav--link" to="/">Action</Link></li>
            <li className="hamburger__nav--element"><Link className="hamburger__nav--link" to="/comedy">Comedy</Link></li>
            <li className="hamburger__nav--element"><Link className="hamburger__nav--link" to="/drama">Drama</Link></li>
            <li className="hamburger__nav--element"><Link className="hamburger__nav--link" to="/military">Military</Link></li>
            <li className="hamburger__nav--element"><Link className="hamburger__nav--link" to="/fantasy">Fantasy</Link></li>
          </ul>
        </>
      )}
    </div>
  );
}

export default Hamburger;
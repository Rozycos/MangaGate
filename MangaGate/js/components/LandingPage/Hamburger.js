import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="hamburger__menu">
      <div className="hamburger__icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && (
        
          <ul className="hamburger__nav">
            <li className="hamburger__nav--element"><Link className="hamburger__nav--link" to="/">Home</Link></li>
            <li className="hamburger__nav--element"><Link className="hamburger__nav--link" to="/sign_up">Sign Up</Link></li>
            <li className="hamburger__nav--element"><Link className="hamburger__nav--link" to="/admin">Login</Link></li>
          </ul>
        
      )}
    </div>
  );
}

export default Hamburger;
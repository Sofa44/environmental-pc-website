import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img
          src="https://user-images.githubusercontent.com/23085368/141319110-4ad86f60-4567-4c7c-aea6-ed45a6b8697c.png"
          alt="Environment Logo"
        />
        <Link to="/" id="title">
          {' '}
          Natural Technologies{' '}
        </Link>
      </div>

      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;

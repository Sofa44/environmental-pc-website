import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(https://user-images.githubusercontent.com/23085368/141319124-1fc3cfb5-7e60-41cf-9413-38f935d4e262.jpg)`,
      }}
    >
      <div className="headerContainer">
        <h1> Natural Technologies </h1>
        <p> Description </p>
        <Link to="/products">
          <button> Products </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

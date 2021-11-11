import React from 'react';
import { Link } from 'react-router-dom';
import NightBanner from "../assets/NightBanner.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${NightBanner})` }}>
      <div className="headerContainer">
        <h1> Title </h1>
        <p> Description </p>
        <Link to="/products">
          <button> Products </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
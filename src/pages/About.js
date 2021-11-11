import React from 'react';
import '../styles/About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div
      className="about"
      style={{
        backgroundImage: `url(https://user-images.githubusercontent.com/23085368/141319082-94ccb7d8-176b-4909-a5ef-eb17dd2b2289.jpg)`,
      }}
    >
      <div className="aboutText">
        <h1> ABOUT US</h1>
        <p>
          Natural Technologies is a company devoted to selling environmentally
          friendly and helpful computer parts and accesseries. We are a company
          which cares about this planets future and will strive for any cost in
          order to benfit it. You can learn more about each indivaul product by
          going to the <Link to="/products"> Products </Link> page.
        </p>

        <h1> HOW WE SHIP </h1>
        <p>
          Biodegradable packaging which is bio-polymers which is a substance
          found in most living plants. This is a biodegradable material which
          breaks down over a small span of time. The packaging will be made of
          biopolymers, as to decrease environmental waste.
        </p>
      </div>
    </div>
  );
}

export default About;

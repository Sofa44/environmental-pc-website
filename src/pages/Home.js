import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1>Title</h1>
        <p>Description</p>``
        <Link to="/menu">
          <button>Menu Link</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

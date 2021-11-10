import React from 'react';
import './App';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact component={<Home />} />
          <Route path="/products" exact component={<Products />} />
          <Route path="/about" exact component={<About />} />
          <Route path="/contact" exact component={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/home'
import Work from './pages/Work';
import About from './pages/about';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Portfolio from './pages/portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <div className="App">
      <div>
          <Navbar />
      </div>
      <div className="main">
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/services" element={<Work/>} />
      <Route exact path="/portfolio" element={<Portfolio/>} />
      </Routes>
      </div>
      <div className="footer">

      </div>
        <Footer />
        
    </div>
  );
}

export default App;

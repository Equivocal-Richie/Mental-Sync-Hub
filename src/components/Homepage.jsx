import React from 'react';
import '../styles/App.css'

import Home from './homepage/Home';
import About from './homepage/About';
import Features from './homepage/Features';
import Faqs from './homepage/Faqs';
import Footer from './homepage/Footer';

function Homepage() {
  return (
    <div>
      <Home/>
      <About/>
      <Features/>
      <Faqs/>
      <Footer/>
    </div>
  );
}

export default Homepage;

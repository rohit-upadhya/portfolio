import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navigation from './components/index';
import Footer from './components/footer';
import Home from './pages/home'
import './App.css';


const App = () => (
  <div className='background-top'>
    <Navigation />
     <Home />
    <Footer />
  </div>
);

export default App;

import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navigation from './components/index';
import Home from './pages/home'
import './App.css';


const App = () => (
  <div className='background'>
    <Navigation />
     <Home />
  </div>
);

export default App;

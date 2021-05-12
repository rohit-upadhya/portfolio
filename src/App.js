import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navigation from './components/navbar/index';
import Home from './pages/home'
import './App.css';


const App = () => (
  <>
    <Navigation />
     <Home />
  </>
);

export default App;

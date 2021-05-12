import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navigation from './components/navbar/index';
import './App.css';


const App = () => (
  <Container className="p-3">
    <Navigation />
  </Container>
);

export default App;

import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navigation from './components/index';
import Footer from './components/footer';
import Home from './pages/home'
import Blog from './pages/blog'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <div className='background-top'>
    <Router>
        <Navigation />
        <Switch>
          <Route path='/portfolio' exact component={Home} />
          <Route path='/portfolio/blog' component={Blog} />
        </Switch>
        <Footer />
    </Router>
  </div>
);

export default App;

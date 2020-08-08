import React from 'react';
import './App.css';
import Home from './components/home/home'
import Portfolio from './components/portfolio/portfolio'
import Experience from './components/experience/experience'
import Contact from './components/contact/contact'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/contact" exact component={Contact} />
      </Router>
  )
}

export default App;

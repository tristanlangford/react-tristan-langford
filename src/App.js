import './App.css';
import Home from './components/home/home'
import Portfolio from './components/portfolio/portfolio'
import Experience from './components/experience/experience'
import Contact from './components/contact/contact'
import HomeMobile from './components/homeMobile/homeMobile'
import PortfolioMobile from './components/portfolioMobile/portfolioMobile'
import { BrowserRouter as Router, Route } from "react-router-dom";

import React, { useEffect, useState } from "react";

function App() {

  const [windowDimension, setWindowDimension] = useState(window.innerWidth);

  const isMobile = windowDimension >= 700;

  window.addEventListener("resize", (e) => {
    console.log(windowDimension)
    console.log(isMobile)
    return setWindowDimension(window.innerWidth)
  })

  return (
    isMobile ? (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/contact" exact component={Contact} />
      </Router>
    ) : (
      <Router>
        <Route path="/" exact component={HomeMobile} />
        <Route path="/portfolio" exact component={PortfolioMobile} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/contact" exact component={Contact} />
      </Router>
    )
  )
}

export default App;

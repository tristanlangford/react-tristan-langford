import React from "react";
import "./portfolioMobile.css"

export default function PortfolioMobile() {
  return (
    <div className="portfolio mobile">
    <h1>PROJECTS</h1>
    <ul>
        <li>
            <div className='project-mobile-container'>
                <span className='project-title-mobile'>InVimcible</span>
                <a href="https://vimvincible.netlify.app/">
                    <img className="portfolio-image-mobile" src="/images/inVimcible.png" alt="InVimcible"/>
                </a>
                <p>A 'top-down' game designed to help devs learn Vim commands. Built using Node.js, React, Redux.</p>
            </div>
        </li>
        <li>
            <div className='project-mobile-container'>
                <span className='project-title-mobile'>Acebook</span>
                <a href="https://acebook-brainaics.herokuapp.com/">
                    <img className="portfolio-image-mobile" src="/images/AceBook.png" alt="Acebook"/>
                </a>
                <p>A mock of Facebook. With user authentification, user walls and instant messaging. Built with Ruby-on-Rails & PostgresSQL.</p>
            </div>
        </li>
        <li>
            <div className='project-mobile-container'>
                <span className='project-title-mobile'>News-Summary</span>
                <a href="https://news-article-summary.herokuapp.com/">
                    <img className="portfolio-image-mobile" src="/images/news-app-list-view.png" alt="news-app-list-view"/>
                </a>
                <p>A news summary web app, designed for scanning current headlines using the Guardian API. Built with Javascript, HTML & CSS</p>
            </div>
        </li>
        <li>
            <div className='project-mobile-container'>
                <span className='project-title-mobile'>Bank Tech Test</span>
                <a href="https://github.com/tristanlangford/bank_tech_test">
                    <img className="portfolio-image-mobile" src="/images/BankTechTest.png" alt="Bank Tech Test"/>
                </a>
                <p>A small project designed to highlight my code quality and process. I have also completed this tech test in Ruby.</p>
            </div>
        </li>
    </ul>
    </div>
    );
}
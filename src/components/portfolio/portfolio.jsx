import React from "react";
import "./portfolio.css"

export default function Portfolio() {
  return (
    <div class="portfolio">
    <h1>Projects</h1>
    <table class="project-table"> 
      <thead> 
        <tr> 
          <td>InVimcible </td>
          <td>Acebook </td>
          <td>News-Summary </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 
            <div class="portfolio-block"><a href="https://vimvincible.netlify.app/"> <img class="portfolio-image" src="/images/inVimcible.png" alt="InVimcible"/>
                <div class="portfolio-desc-block">
                  <div class="portfolio-desc"> 
                    <p>A 'top-down' game designed to help devs learn Vim commands. Built using Node.js, React, Redux.</p>
                  </div>
                </div></a></div>
          </td>
          <td>
            <div class="portfolio-block"><a href="https://acebook-brainaics.herokuapp.com/"> <img class="portfolio-image" src="/images/AceBook.png" alt="Acebook"/>
                <div class="portfolio-desc-block">
                  <div class="portfolio-desc">A mock of Facebook. With user authentification, user walls and instant messaging. Built with Ruby-on-Rails.</div>
                </div></a></div>
          </td>
          <td> 
            <div class="portfolio-block"><a href="https://news-article-summary.herokuapp.com/"> <img class="portfolio-image" src="/images/news-app-list-view.png" alt="news-app-list-view"/>
                <div class="portfolio-desc-block">
                  <div class="portfolio-desc">A news summary web app, designed for quick scanning and reading of headlines using the Guardian Newspaper API. Built with Javascript, HTML & CSS</div>
                </div></a></div>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr> 
          <td>Bank Tech Test</td>
        </tr>
      </thead>
      <tbody> 
        <tr> 
          <td> 
            <div class="portfolio-block"><a href="https://github.com/tristanlangford/bank_tech_test"> <img class="portfolio-image" src="/images/BankTechTest.png" alt="Bank Tech Test"/>
                <div class="portfolio-desc-block">
                  <div class="portfolio-desc">A small project designed to highlight my code quality and process. I have also completed this tech test in Ruby.</div>
                </div></a></div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    );
}
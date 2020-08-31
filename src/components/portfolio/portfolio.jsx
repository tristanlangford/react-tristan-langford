import React from "react";
import "./portfolio.css"

export default function Portfolio() {
  return (
    <div className="portfolio">
    <h1>PROJECTS</h1>
    <table className="project-table"> 
      <thead> 
        <tr> 
          <td>InVimcible</td>
          <td>Garmin Score Tracker App</td>
          <td>News-Summary</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 
            <div className="portfolio-block"><a href="https://vimvincible.netlify.app/"> 
              <img className="portfolio-image" src="/images/inVimcible.png" alt="InVimcible"/>
                <div className="portfolio-desc-block">
                  <div className="portfolio-desc"> 
                    <p>A 'top-down' game designed to help devs learn Vim commands. Built using Node.js, React, Redux.</p>
                  </div>
                </div></a></div>
          </td>
          <td> 
            <div className="portfolio-block"><a href="https://apps.garmin.com/en-US/apps/5d8fbcc0-b650-4a0d-87dd-f5acb095d1ed"> <img className="portfolio-image" src="/images/GarminFootballScoreTracker.jpg" alt="Garmin Football Score Tracker"/>
                <div className="portfolio-desc-block">
                  <div className="portfolio-desc">A Garmin ConnectIQ App for keeping score in 5 a-side football. Built with Monkey C. Can change and store team names & timer settings.</div>
                </div></a></div>
          </td>
          <td> 
            <div className="portfolio-block"><a href="https://news-article-summary.herokuapp.com/"> <img className="portfolio-image" src="/images/news-app-list-view.png" alt="news-app-list-view"/>
                <div className="portfolio-desc-block">
                  <div className="portfolio-desc">A news summary web app, designed for scanning current headlines using the Guardian API. Built with Javascript, HTML & CSS</div>
                </div></a></div>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr> 
          <td>Bank Tech Test</td>
          <td>Acebook</td>
        </tr>
      </thead>
      <tbody> 
        <tr> 
          <td> 
            <div className="portfolio-block"><a href="https://github.com/tristanlangford/bank_tech_test"> <img className="portfolio-image" src="/images/BankTechTest.png" alt="Bank Tech Test"/>
                <div className="portfolio-desc-block">
                  <div className="portfolio-desc">A small project designed to highlight my code quality and process. I have also completed this tech test in Ruby.</div>
                </div></a></div>
          </td>
          <td>
            <div className="portfolio-block"><a href="https://acebook-brainaics.herokuapp.com/"> <img className="portfolio-image" src="/images/AceBook.png" alt="Acebook"/>
                <div className="portfolio-desc-block">
                  <div className="portfolio-desc">A mock of Facebook. With user authentification, user walls and instant messaging. Built with Ruby-on-Rails & PostgresSQL.</div>
                </div></a></div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    );
}
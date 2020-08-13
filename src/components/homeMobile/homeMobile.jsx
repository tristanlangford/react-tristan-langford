import React from "react";
import './homeMobile.css'


export default function HomeMobile() {
  return (
    <div className="container about mobile">
            <div className="home-title">
                <h1>Tristan Langford</h1>
                <h2>Full Stack Software Engineer</h2>
                        <p>React.js | Node.js | Express.js | Ruby | Rails | PostgresSQL</p>
            </div>
        <div className="About-me-text mobile">
        <h3>About me... </h3>
        </div>
                <div className="about-text mobile">
                    <img src={"/images/TL_image3.png"} className="tristan-image" alt="tristan"/>
                    <br/>
                    <div className="about-text-block mobile">
                    <p>Following a 5-year career in the medical-devices industry, inspired by the growing focus on technology, I joined Makers Academy, London's leading programming bootcamp, learning best practice, tools and methodologies.</p>
                    <ul> 
                        <li><strong>Dulwich Hamlet</strong> - On a Saturday can be found standing in the "rabble" supporting the best team in South London, Dulwich Hamlet FC</li>
                        <li><strong>Cricket</strong> - On a Sunday I'll be playing for one of the worst cricket teams in London (formerly officially the worst)</li>
                        <li><strong>Running</strong> - To keep myself sane and busy during lockdown, I got into running. So far I've completed a couple half marathons. Follow me on <a className="strava" href="https://www.strava.com/athletes/15342123" target="_blank" rel="noopener noreferrer">Strava</a></li>
                    </ul>
                    </div>
                </div>
    </div>
    );
}
import React from "react";
import "./home.css"

export default function Home() {
  return (
    <div className="container about">
        <div className="home-left">
            <div className="home-title">
                <h1>Tristan Langford</h1>
                <h2>Full Stack Software Engineer</h2>
                <table className="tech-table">
                    <tr>
                        <td>React</td>
                        <td>Node.js</td>
                        <td>Express.js</td>
                        <td>Ruby</td>
                        <td>Rails</td>
                        <td>PostgresSQL</td>
                        <td>Redux</td>
                    </tr>
                </table>
            </div>
        </div>
    <div className="home-right">
        <div className="About-me-text">
        <h3>About me... </h3>
        </div>
            <div className="about-block">
                <div className="about-text">
                    <img src={"/images/TL_image2.jpg"} className="tristan-image" alt="tristan"/>
                    <img src={"/images/TL_image1.jpg"} className="tristan-image" alt="tristan"/>
                    <img src={"/images/TL_image3.png"} className="tristan-image" alt="tristan"/>
                    <img src={"/images/TL_image4.png"} className="tristan-image" alt="tristan"/>
                    <br/>
                    <br/>
                    <div className="about-text-block">
                    <p>Following a 5-year career in the medical-devices industry, inspired by the growing focus on technology, I joined Makers Academy, London's leading programming bootcamp, learning best practice, tools and methodologies.</p>
                    <ul> 
                        <li><strong>Dulwich Hamlet</strong> - On a Saturday can be found standing in the "rabble" supporting the best team in South London, Dulwich Hamlet FC</li>
                        <li><strong>Cricket</strong> - On a Sunday I'll be playing for one of the worst cricket teams in London (formerly officially the worst)</li>
                        <li><strong>Running</strong> - To keep myself sane and busy during lockdown, I got into running. So far I've completed a couple half marathons. Follow me on <a className="strava" href="https://www.strava.com/athletes/15342123" target="_blank" rel="noopener noreferrer">Strava</a></li>
                    </ul>
                    </div>
                    <img src={"/images/TL_image5.png"} className="tristan-image" alt="tristan"/>
                    <img src={"/images/TL_image6.jpg"} className="tristan-image" alt="tristan"/>
                    <img src={"/images/TL_image7.jpg"} className="tristan-image" alt="tristan"/>
                    <img src={"/images/TL_image8.jpg"} className="tristan-image" alt="tristan"/>
                </div>
            </div>
    </div>
    </div>
    );
}
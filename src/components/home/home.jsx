import React from "react";
import "./home.css"

export default function Home() {
  return (
    <div class="container about">
    <h1>Tristan Langford</h1>
    <h2>Full Stack Software Engineer</h2>
        <img src={"/images/TL_image2.jpg"} class="tristan-image"/>
        <img src={"/images/TL_image1.jpg"} class="tristan-image"/>
        <img src={"/images/TL_image3.jpg"} class="tristan-image"/>
        <img src={"/images/TL_image4.jpg"} class="tristan-image"/>
        <img src={"/images/TL_image5.jpg"} class="tristan-image"/>
        <img src={"/images/TL_image6.jpg"} class="tristan-image"/>
        <img src={"/images/TL_image7.jpg"} class="tristan-image"/>
        <img src={"/images/TL_image8.jpg"} class="tristan-image"/>
    <h3>About me... </h3>
    <div class="about-me">
      <p>Following a 5-year client-facing career in the healthcare sector, I wanted to do a job that I not only enjoyed but would make a difference. Inspired by the recent focus on technology in the healthcare sector, in early 2020 I found what I had been looking for in software development.</p>
      <p>I have recently graduated from Makers Academy London's leading programming bootcamp, learning best practice, tools and methodologies.</p>
      <ul> 
        <li><strong>Dulwich Hamlet</strong> - On a Saturday can be found standing in the "rabble" supporting the best team in South London, Dulwich Hamlet FC</li>
        <li><strong>Cricket</strong> - On a Sunday I'll be playing for one of the worst cricket teams in London formerly officially the worst</li>
        <li><strong>Running</strong> - To keep myself sane and busy during lockdown, I got into running. So far I've completed a couple half marathons. </li>
      </ul>
    </div>
    </div>
    );
}
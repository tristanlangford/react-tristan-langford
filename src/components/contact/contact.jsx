import React from "react";
import './contact.css'

export default function Contact() {
  return (
    <div className="container contact">
        <ul>
            <li> 
                Email: <a className="contact-link" href="mailto:tristanlangford@hotmail.com" rel="noopener">tristanlangford@hotmail.com</a>
            </li>
            <li> 
                LinkedIn: <a className="contact-link" href="https://www.linkedin.com/in/tristan-langford-61711a70/" rel="noopener">Tristan Langford</a>
            </li>
            <li> 
                Github: <a className="contact-link" href="https://github.com/tristanlangford" target="_blank">tristanlangford</a>
            </li>
            <li> 
                <a className="contact-link" href="/images/TRISTAN_LANGFORD_CV.pdf" download>Download a copy of my CV </a>
            </li>
        </ul>
    </div>
    );
}
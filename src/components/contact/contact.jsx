import React from "react";
import './contact.css'

export default function Contact() {
  return (
    <div class="container contact">
        <ul>
            <li> 
                Email: <a class="contact-link" href="mailto:tristanlangford@hotmail.com">tristanlangford@hotmail.com</a>
            </li>
            <li> 
                LinkedIn: <a class="contact-link" href="https://www.linkedin.com/in/tristan-langford-61711a70/">Tristan Langford</a>
            </li>
            <li> 
                Github: <a class="contact-link" href="https://github.com/tristanlangford">tristanlangford</a>
            </li>
            <li> 
                <a class="contact-link" href="/images/TRISTAN_LANGFORD_CV.pdf" download>Download a copy of my CV </a>
            </li>
        </ul>
    </div>
    );
}
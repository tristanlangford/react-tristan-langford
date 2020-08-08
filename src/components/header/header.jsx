import React from "react";
import './header.css'
export default function Header() {
  return (
    <header>
    <nav class="navbar.navbar-expand-lg.navbar-light">
      <a class="navbar-brand" href='/'>Tristan Langford</a> 
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse.navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav.mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/experience">Experience</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </header>
    );
}
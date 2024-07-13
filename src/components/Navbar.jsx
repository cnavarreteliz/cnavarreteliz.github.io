import React from "react";

import "./Navbar.scss";

export default function Navbar(props) {
  return <>
    <title>Carlos Navarrete, Ph.D.</title>
    <nav className="navbar">
      <div className="container">
        <a className="brand-wrapper" href="/">
          <span className="brand">Carlos Navarrete</span>
          <span>UdeC Assistant Professor</span>
        </a>

        <ul className="menu">
          <a href="/"><li>About me</li></a>
          {/* <a href="/research"><li>Research</li></a>
          <a href="/teaching"><li>Teaching</li></a>
          <a href="/projects"><li>Projects</li></a>
          <a href="/contact"><li>Contact</li></a> */}
        </ul>
      </div>
    </nav>
  </>;
}
import React from "react";

import "./Navbar.scss";

export default function Navbar(props) {
  return <>
    <title>Carlos Navarrete</title>
    <nav className="navbar">
      <div className="container">
        <a href="/">
          <span className="brand">Carlos Navarrete</span>
        </a>
        <ul className="menu">
          <a href="/courses"><li><li>Courses</li></li></a>
        </ul>
      </div>
    </nav>
  </>;
}
import React from "react";

import "./Navbar.scss";

export default function Navbar(props) {
  return <>
    <title></title>
    <nav className="navbar">
      <div className="container">
        <span className="brand">Carlos Navarrete</span>
        <ul className="menu">
          <li>About</li>
          <li>Research</li>
          <li>Digital tools</li>
          <li>Blog</li>
        </ul>
      </div>
    </nav>
  </>;
}
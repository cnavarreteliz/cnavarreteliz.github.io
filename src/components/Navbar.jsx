import React from "react";

import "./Navbar.scss";

export default function Navbar(props) {
  return <>
    <title>Carlos Navarrete, Ph.D.</title>
    <nav className="navbar">
      <div className="container">
        <a href="/">
          <span className="brand">Carlos Navarrete</span>
        </a>
      </div>
    </nav>
  </>;
}
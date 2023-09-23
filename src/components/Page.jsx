import React from "react";
import Navbar from "./Navbar";

import "./Page.scss";

export default function Page(props) {
  const {children} = props;

  return <div className="page">
    <Navbar></Navbar>
    <main className="main columns">
      <div className="column">
        {children}
      </div>
    </main>
  </div>;
}
import React from "react";

import "./Course.scss";

export default function Course(props) {

  const {title, subtitle, notes=[]} = props;
  return <div className="course">
    <h3 className="title">{title}</h3>
    <div>{subtitle}</div>
    <div>
      <ul>
        {notes.map((d, i) => <a key={i} target="_blank" href={d.link} rel="noreferrer"><li>{d.title}</li></a>)}
      </ul>
    </div>
  </div>;
}
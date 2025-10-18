import React from "react";
import "./Title.scss";

export function Title(props) {
  const {label} = props;
  return (
    <h2 className="title text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-200/60 pb-4">
      <a href={`#${props.permalink}`} className="hover:text-slate-700 transition-colors">
        {label}
      </a>
    </h2>
  );
}
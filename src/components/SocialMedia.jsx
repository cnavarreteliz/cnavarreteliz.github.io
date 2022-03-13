import React from "react";

import "./SocialMedia.scss";

export function SocialMedia(props) {
  const {data} = props;
  return <ul className="social-media">
    {data.map((d, i) => <li key={`socialmedia_${i}`} className="item">
      <a target="_blank" href={d.url} rel="noreferrer">{d.name}</a>
    </li>)}
  </ul>;
}
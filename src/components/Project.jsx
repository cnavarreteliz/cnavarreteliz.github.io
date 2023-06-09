import React from "react";

import "./Project.scss";

export default function Project(props) {
  const {article, authors, data, description, journal, keywords, title, year, url=undefined} = props;
  return <div className="project">
    {title && <h3 className="title">
      <a href={url}>{article ? title : url}</a> ({year})
    </h3>}
    
    {!journal && <p className="description">{description}</p>}
    {journal && <div>
      <p className="article-title">
        {url ? <a href={url}>{description}</a> : description}
      </p>
      <p className="authors">{authors}</p>
      <p className="journal">{journal} ({year})</p>
    </div>}
    
    <div className="keywords">
      {keywords.map((d, i) => <span
        key={`keyword_${i}_${title}`}
        className="keyword">{d}</span>)}
    </div>
    <div>
      {data && <a href={data}>Data Collected</a>}
    </div>
  </div>;
}
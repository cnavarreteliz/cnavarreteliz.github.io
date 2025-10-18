import React from "react";

export function SocialMedia({data = [], className = ""}) {
  if (!Array.isArray(data) || data.length === 0) 
    return null;
  
  return (
    <ul
      className={
        "flex flex-wrap gap-2 items-center justify-start " +
        "list-none p-0 m-0 " +
        className
      }
    >
      {data.map((d, i) => {
        const {name, url} = d;
        return (
          <li key={`socialmedia_${i}`}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="
                inline-flex items-center gap-1.5
                rounded-lg px-3 py-2
                text-xs font-medium tracking-wide
                text-slate-700
                bg-slate-50/80
                ring-1 ring-slate-200/80
                hover:bg-slate-100
                hover:text-slate-900
                hover:ring-slate-300
                transition-all duration-200
              "
            >
              {name}
              <span
                className="text-[10px] opacity-50"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
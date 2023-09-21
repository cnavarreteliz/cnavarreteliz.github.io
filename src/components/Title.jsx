import React from "react";
import {FaChevronRight} from "react-icons/fa";

import "./Title.scss";

export function Title(props) {
  const {label} = props;
  return <h2 className="title">
    {/* <span className="icon"><FaChevronRight /></span> */}
    <span className="label">{label}</span>
  </h2>;
}
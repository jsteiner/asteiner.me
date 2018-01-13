import React from "react";
import Link from "gatsby-link";

const NavigationLink = ({ to, text }) => (
  <li
    style={{
      float: "left",
      marginLeft: "10px"
    }}
  >
    <Link
      to={to}
      style={{
        color: "white",
        textDecoration: "none"
      }}
    >
      {text}
    </Link>
  </li>
);

export default NavigationLink;

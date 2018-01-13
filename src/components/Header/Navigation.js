import React from "react";
import Link from "gatsby-link";

const Navigation = () => (
  <div
    style={{
      marginBottom: "1.45rem"
    }}
  >
    <Link
      to="/"
      style={{
        color: "white",
        textDecoration: "none"
      }}
    >
      My Process
    </Link>
    <Link
      to="/about/"
      style={{
        color: "white",
        textDecoration: "none"
      }}
    >
      About Me
    </Link>
    <Link
      to="/projects/"
      style={{
        color: "white",
        textDecoration: "none"
      }}
    >
      Projects
    </Link>
  </div>
);

export default Navigation;

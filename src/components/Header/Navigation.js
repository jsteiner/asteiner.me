import React from "react";

import NavigationLink from "./NavigationLink";

const Navigation = () => (
  <nav>
    <ul
      style={{
        listStyleType: "none",
        margin: 0,
        padding: 0
      }}
    >
      <NavigationLink to="/" text="My Process" />
      <NavigationLink to="/about/" text="About Me" />
      <NavigationLink to="/projects/" text="Projects" />
    </ul>
  </nav>
);

export default Navigation;

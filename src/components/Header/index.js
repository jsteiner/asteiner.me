import React from "react";
import Link from "gatsby-link";

import Navigation from "./Navigation";

const Header = () => (
  <div
    style={{
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          ANDREW STEINER
        </Link>
      </h1>
    </div>

    <Navigation />
  </div>
);

export default Header;

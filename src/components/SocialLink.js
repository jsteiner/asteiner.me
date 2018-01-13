import React from "react";

const SocialLink = ({ href, image, text }) => (
  <li
    style={{
      marginLeft: "10px",
      float: "left"
    }}
  >
    <a
      href={href}
      style={{
        color: "white",
        textDecoration: "none"
      }}
    >
      <img src={image} />
      {text}
    </a>
  </li>
);

export default SocialLink;

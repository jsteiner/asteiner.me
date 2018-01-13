import React from "react";

const SocialLink = ({ href, image, text }) => (
  <div>
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
  </div>
);

export default SocialLink;

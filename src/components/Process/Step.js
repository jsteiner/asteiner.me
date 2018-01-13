import React from "react";

const Step = ({ title, image, caption, text }) => (
  <div>
    <h2>{title.toUpperCase()}</h2>
    <h3>{caption}</h3>
    <img src={image} />
    <p>{text}</p>
  </div>
);

export default Step;

import React from "react";

import Step from "./Step";

import exploreImage from "../../images/explore.png";
import understandImage from "../../images/understand.png";
import actualizeImage from "../../images/actualize.png";

const Process = () => (
  <div>
    <Step
      title="Explore"
      image={exploreImage}
      caption="Analyze, Hypothesize, Discover"
      text="Qualitative + Quantitative Research, Observational Research, Data Analysis, Business/Industry Research"
    />
    <Step
      title="Understand"
      image={understandImage}
      caption="Synthesize, Empathize, Define"
      text="Information Architecture, Persona Development, Problem Definition"
    />
    <Step
      title="Actualize"
      image={actualizeImage}
      caption="Ideate, Iterate, Deliver"
      text="Strategic Design Planning, Wireframing (Sketch), Prototyping (Invision), High Fidelity Mockups"
    />
  </div>
);

export default Process;

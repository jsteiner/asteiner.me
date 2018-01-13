import React from "react";
import Link from "gatsby-link";

import SocialLinks from "../components/SocialLinks";
import Process from "../components/Process";

const IndexPage = () => (
  <div>
    <h1>My Approach To Design</h1>
    <p>
      As a systems thinker I like to see the big picture, understand the entire
      user journey and how it intersects with a product or problem. From there I
      dig into the nitty gritty details. My process isn’t the same every time.
      Different problems require different approaches. Below is my general flow…
    </p>

    <Process />

    <SocialLinks />
  </div>
);

export default IndexPage;

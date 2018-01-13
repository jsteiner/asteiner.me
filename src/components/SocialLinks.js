import React from "react";
import Link from "gatsby-link";

import SocialLink from "./SocialLink";

import instagramIcon from "../images/instagram.svg";
import linkedinIcon from "../images/linkedin.svg";
import emailIcon from "../images/email.svg";
import mediumIcon from "../images/medium.svg";

const SocialLinks = () => (
  <div>
    <SocialLink
      href="https://www.instagram.com/heythisisandrew/"
      image={instagramIcon}
      text="@heythisisandrew"
    />
    <SocialLink
      href="https://www.linkedin.com/in/steinerandrew/"
      image={linkedinIcon}
      text="@steinerandrew"
    />
    <SocialLink
      href="mailto:andrew@asteiner.me"
      image={emailIcon}
      text="andrew@asteiner.me"
    />
    <SocialLink
      href="https://medium.com/@andrewsteiner"
      image={mediumIcon}
      text="@andrewsteiner"
    />
  </div>
);

export default SocialLinks;

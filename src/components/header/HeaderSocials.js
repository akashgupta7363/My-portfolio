import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="headers_scroll">
      <a
        href="https://www.linkedin.com/in/akash-kumar-gupta-576337139/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/akashgupta7363?tab=overview&from=2023-05-01&to=2023-05-06"
        target="_blank"
      >
        <BsGithub />
      </a>
      <a href="https://twitter.com/Akash_Gupta_7" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials;

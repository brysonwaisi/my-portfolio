import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/bryson-nyamwange-a2b21014a/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FaLinkedin />
      </a>
      <a href="https://github.com/brysonwaisi" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://twitter.com/brysonwaisi"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;

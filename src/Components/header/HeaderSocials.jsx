import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/nyamwangeb/"
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
        href="https://medium.com/@brysonnyamwange"
        target="_blank"
        rel="noreferrer"
      >
        <FaMedium />
      </a>
    </div>
  );
};

export default HeaderSocials;

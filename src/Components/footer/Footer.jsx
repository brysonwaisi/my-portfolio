import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsMedium } from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo" rel="noreferrer">
        Bryson Nyamwange
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/bryson.nyamwange"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://medium.com/@brysonnyamwange"
          target="_blank"
          rel="noreferrer"
        >
          <BsMedium />
        </a>
        <a
          href="https://www.linkedin.com/in/nyamwangeb/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bryson Nyamwange.</small>
      </div>
    </footer>
  );
};

export default Footer;

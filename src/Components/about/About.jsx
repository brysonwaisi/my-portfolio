import React from "react";
import "./About.css";
import BRY from "../../assets/Bry.jpg";
import { FaAward } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const data = [
  {
    id: 1,
    github: "https://github.com/brysonwaisi",
  },
];

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={BRY} alt="Bryson" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4 years of Experience</small>
            </article>

            {data.map(({ id, github }) => (
              <a
                key={id}
                href={github}
                target="_blank"
                rel="noreferrer"
                className="about__card about__card--github"
              >
                <AiFillFolderOpen className="about__icon" />
                <h5>Projects</h5>
                <small className="github__cta">
                  View on GitHub
                  <FaGithub className="github__icon" />
                </small>
              </a>
            ))}
          </div>

          <p>
            Hi, I’m Bryson — a Software Engineer passionate about building
            software and applications. I specialize in developing scalable
            full-stack solutions and creating interactive digital experiences.
          </p>

          <a href="#contact" className="btn btn-primary">
            Reach Out
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

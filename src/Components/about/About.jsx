import React from "react";
import "./About.css";
import BRY from "../../assets/Bry.jpg";
import { FaAward } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";

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
            <img src={BRY} alt=" about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years of Experience</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <div>
                {data.map(({ id, github }) => {
                  return (
                    <small key={id}>
                      <a
                        href={github}
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View My Projects
                      </a>
                    </small>
                  );
                })}
              </div>
            </article>
          </div>
          <p>
            Hi, I’m Bryson, a Software Engineer who loves building software and
            applications.
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Reach Out
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

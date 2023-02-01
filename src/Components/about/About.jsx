import React from 'react'
import './About.css'
import BRY from '../../assets/Bry.jpg'
import { FaAward } from 'react-icons/fa'
// import { FiUsers } from 'react-icons/fi'
import { AiFillFolderOpen } from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={BRY} alt=" About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2 year Experience</small>
            </article>
            {/* <article className="about__card">
            <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article> */}
            <article className="about__card">
            <AiFillFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>Completed Projects</small>
            </article>
          </div>
          <p>
            Hi, I’m Bryson, a Software Engineer that loves building software and applications.
          </p>

          <a href='#contact' className='btn btn-primary'> Reach Out</a>
        </div>
      </div>
    </section>
  )
}

export default About
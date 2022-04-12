import React from 'react'
import './Services.css'
import { GiCheckMark } from 'react-icons/gi'

const Services = () => {
  return (
    <section id="services">
    <h5>What I offer</h5>
    <h2>
      Services
    </h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className="service__list">
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>Prototyping, wireframing, user flows, mockups</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>Visual design and design software</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>User research and usability testing</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>Agile</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p> Information architecture </p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>Application development</p>
          </li>
        </ul>
      </article>
      {/* END OF UI/UX */}

      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>

        <ul className="service__list">
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>HTML/CSS/JavaScript</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>React</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>Analytical Services</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>Responsive Design</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p> Testing and Debugging </p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>Backend Integration</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>Search Engine Optimization</p>
          </li>
        </ul>
      </article>
      {/* END OF WEB DEVELOPMENT */}

      <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>

        <ul className="service__list">
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>Develop Strategic Content Goals</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>Create Content and Manage Content Distribution</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>Collaborate With Other Departments on Content Creation</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p>Analyze Key Performance Indicators to Determine Content Effectiveness</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon' />
            <p> Quality Assurance </p>
          </li>
        </ul>
      </article>
      {/* END OF Content Creation */}
    </div>
    </section>
  )
}

export default Services
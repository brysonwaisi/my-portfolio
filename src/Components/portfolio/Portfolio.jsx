import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.PNG'
// import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.PNG'
import IMG4 from '../../assets/portfolio4.PNG'
import IMG5 from '../../assets/portfolio5.PNG'
import IMG6 from '../../assets/portfolio6.PNG'


const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'Pixel Art Maker',
    github: 'https://github.com/brysonwaisi/alc-challenge',
    demo: 'https://brysonwaisi.github.io/alc-challenge/'
  },
  // {
  //   id: 2, 
  //   image: IMG2,
  //   title: 'Budger App',
  //   github: 'https://github.com/brysonwaisi/team-185-frontend',
  //   demo: 'https://demolink.com'
  // },
  {
    id: 3, 
    image: IMG3,
    title: 'Codebank Landing Page',
    github: 'https://github.com/brysonwaisi/CodeBank-landing-page',
    demo: 'https://brysonwaisi.github.io/CodeBank-landing-page/'
  },
  {
    id: 5, 
    image: IMG5,
    title: 'Weather App',
    github: 'https://github.com/brysonwaisi/weather-app',
    demo: 'https://brysonwaisi.github.io/weather-app/'
  },
  {
    id: 6, 
    image: IMG6,
    title: 'Maps Clone',
    github: 'https://github.com/brysonwaisi/Map-Clone',
    demo: 'https://brysonwaisi.github.io/Map-Clone/'
  },
  {
    id: 4, 
    image: IMG4,
    title: 'Album Store - Angular',
    github: 'https://github.com/brysonwaisi/Angular-AlbumStoreProductPage',
    demo: 'https://ps-project-angular-album-store.herokuapp.com/products'
  }

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2> 

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key = {id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className="btn" target='_blank'>Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
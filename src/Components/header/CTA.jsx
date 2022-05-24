//call to action - CTA 

import React from 'react'
import CV from '../../assets/CV Bryson.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact"className='btn btn-primary'> Reach Out</a>
    </div>
  )
}

export default CTA
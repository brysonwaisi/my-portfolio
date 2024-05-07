//call to action - CTA 

import React from 'react'
import CV from '../../assets/Bryson Nyamwange.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download Resume</a>
        <a href="#contact"className='btn btn-primary'> Reach Out</a>
    </div>
  )
}

export default CTA
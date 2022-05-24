import React from 'react'
import './Nav.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { BiBook } from 'react-icons/bi'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { AiFillMessage } from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? "active" : ''}> <AiTwotoneHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "active" : ''}> <FaUserCircle /> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? "active" : ''}> <BiBook /> </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? "active" : ''}> <MdOutlineMiscellaneousServices /> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "active" : ''}> <AiFillMessage /> </a>
    </nav>
  )
}

export default Nav;
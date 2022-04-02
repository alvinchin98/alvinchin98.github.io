import React from 'react'
import {useState} from 'react'
import './Nav.css'

function Nav() {

  const [navbar,setNavbar]=useState(false)
  const [navItem,setNavItem]=useState("#")
  const changeBackground =()=>{
    if(window.scrollY >=150){
      setNavbar(true);
    }
    else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',changeBackground)

  return (
    <nav>
        <div className={ navbar? 'nav__container nav__active': 'nav__container'}>
            <h1>PortFolio</h1>
            <div className='navbar__items'>
              <a href="#" className="">Home</a>
              <a href="#about" className=''>AboutMe</a>
              <a href="#experience" className=''>My Experience</a>
              <a href="#portfolio2" className=''>My Projects</a>
              <a href="#contact" className=''>Contact Me</a>
            </div>
        </div>
    </nav>
  )
}

export default Nav
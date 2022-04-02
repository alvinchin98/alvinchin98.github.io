import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


function Footer() {
  return (
    <footer>
        <a href="#" className='footer__logo'>CHENG HUI'S PORTFOLIO</a>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio2">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='footer__socials'>
            <a href="https://facebook.com" target="_blank"><FaFacebookF/></a>
            <a href="https://instagram.com" target="_blank"><FiInstagram/></a>
            <a href="https://twitter.com" target="_blank"><IoLogoTwitter/></a>
        </div>

        <div className='footer__copyright'>
            <small>&copy; Chin Cheng Hui's Portfolio. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
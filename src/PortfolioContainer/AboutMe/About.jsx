import React from 'react'
import './About.css'
import ME from "../../assets/Home/profilephoto.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5 className='h5_color'> Get To Know</h5>
      <h2 className='h2_color'> About Me </h2> 
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">

            <article className='about__card'>
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small> 3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className="about__icon"/>
              <h5>Experience</h5>
              <small> 3+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className="about__icon"/>
              <h5>Experience</h5>
              <small> 3+ Years Working</small>
            </article>

          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reiciendis, odit minus nihil aliquid assumenda 
            asperiores exercitationem numquam dolore deserunt 
            alias dolores fugiat nemo aliquam cupiditate iusto quas 
            vitae soluta pariatur. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
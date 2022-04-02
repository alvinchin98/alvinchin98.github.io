import React from 'react'
import './Portfolio.css'
import IMG1 from '../../../src/assets/Portfolio/dashboard.jpg'
import IMG2 from '../../../src/assets/Portfolio/dashboard2.jpg'
import IMG3 from '../../../src/assets/Portfolio/dashboard3.jpg'
import IMG4 from '../../../src/assets/Portfolio/dashboard4.jpg'
import IMG5 from '../../../src/assets/Portfolio/dashboard5.jpg'
import IMG6 from '../../../src/assets/Portfolio/dashboard6.jpg'

const data = [
    {
        id:1,
        image:IMG1,
        title:'This is a portfolio item title',
        github:'https://github.com',
        demo:'https://dribbble.com/shots/17812252-Zenny-Branding-Banking-for-gamers'
    },

    {
        id:2,
        image:IMG2,
        title:'This is a portfolio item title',
        github:'https://github.com',
        demo:'https://dribbble.com/shots/17812252-Zenny-Branding-Banking-for-gamers'
    },

    {
        id:3,
        image:IMG3,
        title:'This is a portfolio item title',
        github:'https://github.com',
        demo:'https://dribbble.com/shots/17812252-Zenny-Branding-Banking-for-gamers'
    },

    {
        id:4,
        image:IMG4,
        title:'This is a portfolio item title',
        github:'https://github.com',
        demo:'https://dribbble.com/shots/17812252-Zenny-Branding-Banking-for-gamers'
    },

    {
        id:5,
        image:IMG5,
        title:'This is a portfolio item title',
        github:'https://github.com',
        demo:'https://dribbble.com/shots/17812252-Zenny-Branding-Banking-for-gamers'
    },

    {
        id:6,
        image:IMG6,
        title:'This is a portfolio item title',
        github:'https://github.com',
        demo:'https://dribbble.com/shots/17812252-Zenny-Branding-Banking-for-gamers'
    }

]

function Portfolio() {
  return (
    <section id='Portfolio'>
        <h5> My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
            {
                data.map(({id,image,title,github,demo})=>{
                    return(
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a href={github} className='btn primary-btn' target='_blank'>Github</a>
                                <a href={demo} className='btn highlighted-btn' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                    )
                })
            }
            {/* <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG1} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                    <a href="https:://github.com" className='btn' target='_blank'>Github</a>
                    <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG2} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                    <a href="https:://github.com" className='btn' target='_blank'>Github</a>
                    <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG3} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                    <a href="https:://github.com" className='btn' target='_blank'>Github</a>
                    <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG4} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                    <a href="https:://github.com" className='btn' target='_blank'>Github</a>
                    <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG5} alt="" />   
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                    <a href="https:://github.com" className='btn' target='_blank'>Github</a>
                    <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG6} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                    <a href="https:://github.com" className='btn' target='_blank'>Github</a>
                    <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article> */}
        </div>   
    </section>
  )
}

export default Portfolio
// Swiper.js
import React from 'react'
import "./Portfolio2.css"
import IMG1 from '../../../src/assets/Portfolio/dashboard.jpg'
import IMG2 from '../../../src/assets/Portfolio/dashboard2.jpg'
import IMG3 from '../../../src/assets/Portfolio/dashboard3.jpg'
import IMG4 from '../../../src/assets/Portfolio/dashboard4.jpg'
import IMG5 from '../../../src/assets/Portfolio/dashboard5.jpg'
import IMG6 from '../../../src/assets/Portfolio/dashboard6.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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

function Portfolio2() {
  return (
    <section id='portfolio2'>
        <h5 className='h5_color'> My Recent Work</h5>
        <h2 className='h2_color'>Portfolio</h2>
        <Swiper className="container portfolio2__container" 
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
            {
                data.map(({id,image,title,github,demo})=>{
                    return(
                        <SwiperSlide key={id} className='portfolio2__item'>
                            <div className='portfolio2__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio2__item-cta'>
                                <a href={github} className='btn primary-btn' target='_blank'>Github</a>
                                <a href={demo} className='btn demo-btn' target='_blank'>Live Demo</a>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>   
    </section>
  )
}

export default Portfolio2
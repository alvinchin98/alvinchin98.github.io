import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'
import './Home.css'

export default function Home () {
  return (
    <div className='home-container'>
        <Nav/>
        <Profile />
        <Footer />
    </div>
  )
}

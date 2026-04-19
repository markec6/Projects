import React from 'react'
import HeroSec from '../components/Hero-sec'
import Features from '../components/Features'
import About from '../components/About'
import Customers from '../components/Customers'
import News from '../components/News'
import Letter from '../components/Letter'
import Footer from '../components/Footer'

function HomePage() {
  return (
    // finished 
    <div className='pt-[70px] md:pt-[50px] '>
        <HeroSec />
        <Features/>
        <About/>
        <Customers/>
        <News/>
        <Letter/>
        <Footer/>
    </div>
  )
}

export default HomePage
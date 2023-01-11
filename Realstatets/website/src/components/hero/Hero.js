import React from 'react'
import './HeroStyle.css'
import video from '../../assest/maldivest.mp4' 
const Hero = () => {
  return (
    <div className='hero'>
        <video autoPlay loop id muted='video'>
        <source src={video} type='video/mp4'/>
        </video>
        <div className='Overlay'>
        </div>
        <div className='Content'>
            <h1> first class travel location</h1>
            <h2> top 1% location worldwide web</h2>
            <form className='form'>
            <div>
            <input type='text' placeholder='search Destination'/></div>
            </form>
        </div>

      
    </div>
  )
}

export default Hero

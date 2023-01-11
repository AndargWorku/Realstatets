import React from 'react'
import { useState } from 'react'
import HeroSection from '../Components/HeroSecation'
import InfoSection from '../Components/infoSection'
import Navbar from '../Components/Navbar'
import { homeObjOne, homeObjThree, homeObjTwo } from '../Components/infoSection/data'
import Sidebar from '../Components/Sidebar'

import Footer from '../Components/Footer'
import Services from '../Components/Servicess'


const Home = () => {
    const [isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)
    };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services/>
      <InfoSection {...homeObjThree}/>
      <Footer/>
      
    </>
  )
}

export default Home

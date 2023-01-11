import React from 'react'
import Video from "../../videos/Video.mp4"

import { useState } from 'react';
import { Button } from '../ButtonElements';
import { HeroContainer,HeroBg,VideoBg,
HeroContent,
HeroBtnWrapper,
HeroH1,
HeroP,
ArrowForward,
ArrowRight } from './HeroElements'
const HeroSection = () => {
    const[hover,setHover]=useState(false)
    const onHover=()=>{
        setHover(!hover)
       
    }
  return (
    <HeroContainer id='Home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>
                Virtual banking made easy
            </HeroH1>
            <HeroP>Sign up a new account today and receive
                 $250 in a credit towards your next payment 
                 </HeroP>
                 <HeroBtnWrapper>
                    <Button to='signup'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true}
                    spy={true}
                    duration={500}
                    exact={true}
                    offset={-80}
                    
                    >
                        Get started{hover ? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                 </HeroBtnWrapper>
        </HeroContent>
      
    </HeroContainer>
  )
}

export default HeroSection

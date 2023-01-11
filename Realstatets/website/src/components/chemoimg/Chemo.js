import React from 'react'
import './ChemoStyle.css'
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import se from '../../assest/se.jpg'
import wo from '../../assest/wo.jpg'
import chemo from '../../assest/Chamo.jpg'
const Chemo = () => {
  return (
    <div name="chemo" className='container'>
        <Carousel className='chemo' showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={se} alt='/'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={wo} alt='/' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={chemo} alt='/' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

    </div>
    
      

  )
}

export default Chemo

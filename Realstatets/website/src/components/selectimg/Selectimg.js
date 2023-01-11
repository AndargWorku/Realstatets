import React from 'react'
import './SelectimgStyle.css'
import and from '../../assest/and.jpg'
const Selectimg = ({bgImg,text}) => {
  return (
    <div className='select-location'>
        <img src={bgImg}alt='' className='img'/>
        <div className='overlay'>
            <p className='p'>{text}</p>
        </div>
      
    </div>
  )
}

export default Selectimg

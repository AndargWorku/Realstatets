import React from 'react'
import bole from '../../assest/bole.jpg'
import megenagna from '../../assest/megenagna.jpg'
import merkato from '../../assest/merkato.jpg'
import tall from '../../assest/tall.jpg'
import kill from '../../assest/kill.jpg'
import './FeatureStyle.css'
const Feature = () => {
  return (
    <div className='feature'>
      <h1 className='feature-text'>top features listing</h1>
      <p className='feature-text'>selecting featured by city state and zip based on views</p>
      <div className='Container'>
        <img className='span-3 image-grid-row-2' src={bole} alt='bole'/>
        <img style={{width:500,height:500}} src={megenagna} alt=' megenagna'/>
        <img style={{width:500,height:500}}  src={merkato} alt='merkato'/>
        <img style={{width:500,height:500}} src={tall}alt='tall'/>
        <img style={{width:500,height:500}} src={kill} alt='kill'/>
        
      </div>
      <div className='span 3 image-detail'>
        <div className='top'>
          <h2>123 come St.detail TX</h2>
          <p>House for salary</p>
          <p className='price'>123000000</p>
        </div>
        <div className='info-grid'>
          <div>
            <div className='info'>
              <p className='bold'> bed rooms</p>
              <p>5</p>
            </div>
            <div className='info'>
              <p className='bold'> beth rooms</p>
              <p>7</p>
            </div>
          </div>
          <div>
            <div className='info'>
              <p className='bold'> Square feet 464.768</p>
            </div>
            <div className='info'>
              <p className='bold'> Ese payment &65436765</p>
            </div>
          </div>
        </div>
        <div className='spam-2 right-img-detail'>
          <p> waww it is amazing building across 
            the city so it creates special day for the people to get lives in this house 
            so the people by this house by small amount of birr that creates happiness 
            for that matter it the spical or smartnes for the city</p>
            <button className='btn'>views listing building</button>

        </div>
      </div>
      <div className='Container'>
        
        <img style={{width:500,height:500}} className='order-2' src={megenagna}alt=' megenagna'/>
        <img style={{width:500,height:500}} className='order-3'src={merkato} alt='merkato'/>
        <img style={{width:500,height:500}} className='span-3 image-grid-row-2 order-1' src={bole} alt='bole'/>
        <img style={{width:500,height:500}} className='order-4' src={tall}alt='tall'/>
        <img style={{width:500,height:500}} className='order-5' src={kill} alt='kill'/>
      </div>
      <div className='spam-2 right-img-detail order-7'>
          <p> waw it is amazing building across 
            the city so it creates special day for the people to get lives in this house 
            so the people by this house by small amount of birr that creates happiness 
            for that matter it the spical or smartens for the city</p>
            <button className='btn'>views listing building</button>

        </div>
      <div className='span-3 image-detail order-6'>
        <div className='top'>
          <h2>123 acme St.detail TX</h2>
          <p>House for salary</p>
          <p className='price'>123000000</p>
        </div>
        <div className='info-grid'>
          <div>
            <div className='info'>
              <p className='bold'> bed rooms</p>
              <p>5</p>
            </div>
            <div className='info'>
              <p className='bold'> beth rooms</p>
              <p>7</p>
            </div>
          </div>
          <div>
            <div className='info'>
              <p className='bold'> Square feet 464.768</p>
            </div>
            <div className='info'>
              <p className='bold'> Ese payment &65436765</p>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Feature

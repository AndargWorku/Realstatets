import React from 'react'
import and from '../../assest/and.jpg'
import m from '../../assest/m.jpg'
import se from '../../assest/se.jpg'
import wo from '../../assest/wo.jpg'
import ye from '../../assest/ye.jpg'
import './DestinationStyle.css'

const Destination = () => {
  return (
    <div name="destination" className='destination'>
        <div className='container'>
            <h1>All inclusive Resorts</h1>
            <h2> on the collaborate Resorts</h2>
            <div className='img-container'>
                <img className='span-3 image-grid-row-2' src={and} alt=''/>
                <img src={wo} alt=''/>
                <img src={se} alt=''/>
                <img src={m} alt=''/>
                <img src={ye} alt=''/>

            </div>

        </div>
      
    </div>
  )
}

export default Destination

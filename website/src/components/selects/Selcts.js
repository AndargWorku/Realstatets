import React from 'react'
import and from '../../assest/and.jpg'
import m from '../../assest/m.jpg'
import se from '../../assest/se.jpg'
import wo from '../../assest/wo.jpg'
import ye from '../../assest/ye.jpg'
import Selectimg from '../selectimg/Selectimg'
import './SelectStyle.css'
const Selcts = () => {
  return (
    <div name="views" className='select'>
        <div className='container'>
        <Selectimg bgImg={and} text='and'/>
        <Selectimg bgImg={m} text='m'/>
        <Selectimg bgImg={se} text='se'/>
        <Selectimg bgImg={wo} text='wo'/>
        <Selectimg bgImg={ye} text='ye'/>

        </div>
       
      
    </div>
  )
}

export default Selcts

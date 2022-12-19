import React from 'react'
import Alt1 from '../../assest/Alt1.jpg'
import Alt2 from '../../assest/Alt2.jpg'
import Alt3 from '../../assest/Alt3.jpg'
import './BestStyle.css'
const Best = () => {
  return (
    <div className='best'>
        <h1> find the best properties</h1>
        <div >
            <p><span className='bold'>All</span></p>
            <p>commertial</p>
            <p>Resdental</p>
            <p>Agrcalctural</p>

        </div>
        <div className='Container'>
            <img src={Alt1} alt='/'/>
            <img src={Alt2} alt='/'/>
            <img src={Alt3} alt='/'/>
        </div>
        <button className='btn'>view all</button>
      
    </div>
  )
}

export default Best

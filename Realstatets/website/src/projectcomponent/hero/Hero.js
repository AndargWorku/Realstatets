import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './HeroStyle.css'
const Hero = () => {
  return (
    <div className='hero'>
    <div className='Content'>
        <h1>Find the prefect place</h1>
        <p className='search-text'>search the largest selection library rise apartment around addis abeba</p>
    </div>
    <form className='search'>
        <div>
            <input type='text' placeholder='enter keyword'/>
        </div>
        <div className='radio'>
            <input type='radio' checked/>
            <label>buy</label>
            <input type='radio'/>
            <label>Rent</label>
            <button type='submit'><AiOutlineSearch className='icon'/></button>

        </div>

    </form>
      
    </div>
  )
}

export default Hero



import React, { useState } from 'react'
import './NavbarStyle.css'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'

const Navbar = () => {
    const[click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)
  return (
    
    <div className='navbar'>
        <div className='Container'>
            <h1><span  className='span'><BsFillHouseFill/>Real</span>Estate</h1>
            <button className='btn'>sign in</button>
            <ul className={click ? 'nav-menu':'nav-menu'} >
              <li><a href="#">Home</a></li>
              <li><a href="#">Search</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">contact</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaRegTimesCircle className="icon"/>):( <HiOutlineMenuAlt4 className='icon'/>)}
           
            </div>
           
        </div>
      
    </div>
  )
}

export default Navbar;

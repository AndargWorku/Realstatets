import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebook,FaInstagram,FaTwitter,FaPinterest,FaYoutube} from 'react-icons/fa'
import './NavbarStyles.css'
const Navbar = () => {
    const[nav, setNav]=useState(false)
    const handleNav=()=>setNav(!nav)
  return (
    <div name="home" className={nav ? 'navbar navbar-bg':'navbar'}>
        <div className={nav ?'log dark':'log'}>
            <h2>baches.</h2>
            </div>
            <ul className='nav-menu'>
                <Link to='home' smooth={true} duration={500}><li>home</li></Link>
                <Link to='destination'smooth={true} duration={500} ><li>destination</li></Link>
                <Link to='chemo' smooth={true} duration={500}><li>travel</li></Link>
                <Link to='search' smooth={true} duration={500}><li>books</li></Link>
                <Link to='views' smooth={true} duration={500}><li>views</li></Link>
                
            </ul>
        
        <div className='nav-icons'>
            <BiSearch className='icon' style={{marginRight:'1rem'}}/>
            <BsPerson className='icon'/>

        </div>
        <div className='hamburger' onClick={handleNav}>
           {!nav ? (<HiOutlineMenuAlt4 className='icon'/>):(<AiOutlineClose style={{Color:'green'}} className='icon'/>)}

        </div>
        <div className={nav ? 'mobile-menu active':'mobile-menu'}>
        <ul className='mobile-nav'>
        <Link to='home' smooth={true} duration={500}><li>home</li></Link>
                <Link to='destination'smooth={true} duration={500} ><li>destination</li></Link>
                <Link to='chemo' smooth={true} duration={500}><li>travel</li></Link>
                <Link to='search' smooth={true} duration={500}><li>books</li></Link>
                <Link to='views' smooth={true} duration={500}><li>views</li></Link>
        </ul>
        <div className='mobile-menu-bottom'>
        <div className='menu-icons'>
            <button>search</button>
            <button>account</button>
        </div>
        <div className='social-icons'>
            <FaFacebook className='icon'/>
            <FaInstagram className='icon'/>
            <FaTwitter className='icon'/>
            <FaPinterest className='icon'/>
            <FaYoutube className='icon'/>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar

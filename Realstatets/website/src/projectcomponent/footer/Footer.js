import React from 'react'
import './FooterStyle.css'
import {FaFacebook,FaInstagram,FaTwitter,FaPinterest,FaYoutube} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
         
      <div className='Container'>
        <div className='col'>
            <h3>about</h3>
            <p>campany</p>
            <p>planing</p>
            <p>Detailes</p>
            <p>about us</p>

        </div>
        <div className='col'>
            <h3>company</h3>
            <p>ayate realState </p>
            <p>Beteseb realState</p>
            <p>nafkote realState</p>
            <p>zemen RealSate </p>

        </div>
        <div className='col'>
            <h3>planing</h3>
            <p>Ready to Build</p>
            <p>manage to time</p>
            <p>collect necessary thing</p>
            <p>every thing is ready</p>

        </div>
        <div className='col'>
            <h3>Detailes</h3>
            <p>ayate is costiy</p>
            <p>zemen less than ayate</p>
            <p>covers many area</p>
            <p>the best biasness</p>

        </div>
        <div className='col'>
            <h3>information</h3>
            <p>get by telegram</p>
            <p>by facebook</p>
            <p>by twitter</p>
            <p>by instagram</p>

        </div>
        <div className='social'>
            <FaFacebook className='icon'/> 
            <FaInstagram className='icon'/>
            <FaTwitter className='icon'/> 
           <FaPinterest className='icon'/>
            <FaYoutube className='icon'/>
            </div>
      </div>
    </div>
  )
}

export default Footer

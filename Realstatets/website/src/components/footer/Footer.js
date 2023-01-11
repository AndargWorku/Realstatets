import React from 'react'
import {FaFacebook,FaInstagram,FaTwitter,FaPinterest,FaYoutube} from 'react-icons/fa'
import './FooterStyle.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='top'>
                <h3 className='h3'>baches</h3>
                <div className='social'>
                <FaFacebook className='icon'/>
              <FaInstagram className='icon'/>
              <FaTwitter className='icon'/>
              <FaPinterest className='icon'/>
              <FaYoutube className='icon'/>

                </div>
            </div>
            <div className='bottom'>
            <div className='left'>
                <ul className='li'>
                    <li>about</li>
                    <li>partnership</li>
                    <li>favorite place</li>
                    <li>new rooms</li>
                    <li>advertising</li>
                </ul>

            </div>
            <div className='right'>
                <ul className='li'>
                    <li>conttact</li>
                    <li>terms</li>
                    <li>policy</li>
                    <li>pravicy</li>
                    <li>contacet</li>
                </ul>

            </div>

            </div>

        </div>
      
    </div>
  )
}

export default Footer

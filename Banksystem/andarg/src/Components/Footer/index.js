import React from 'react'
import {animateScroll as scroll} from "react-scroll"

import {FaFacebook,FaYoutube,FaTwitter,FaLinkedin,FaInstagram,} from "react-icons/fa"
import { FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrap,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink ,
SocialMedia,
SocialMediaWrap,
SocialLogo,
SocialIcons,
SocialIconLink,
WebsiteRights} from './FooterElement'

const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop();
        
    };

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrap>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/signin'>how it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>term of services</FooterLink>

                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>Contact</FooterLink>
                        <FooterLink to='/'>Support</FooterLink>
                        <FooterLink to='/'>destination</FooterLink>
                        <FooterLink to='/'>Sponsorship</FooterLink>
                        

                    </FooterLinkItems>
                    </FooterLinksWrap>
                    <FooterLinksWrap>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/'>submit videos</FooterLink>
                        <FooterLink to='/'>Ambassadors</FooterLink>
                        <FooterLink to='/'>Agency</FooterLink>
                        <FooterLink to='/'>Influencer</FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social media</FooterLinkTitle>
                        <FooterLink to='/'>Facebook</FooterLink>
                        <FooterLink to='/'>youtube</FooterLink>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrap>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo t0='/' onClick={toggleHome}>Dollar</SocialLogo>
                    <WebsiteRights >Dollar @{new Date().getFullYear()}
                    All right is Reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="-blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                        <SocialIconLink href='/' target="-blank" aria-label="youtube"><FaYoutube/></SocialIconLink>
                        <SocialIconLink href='/' target="-blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href='/' target="-blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                        <SocialIconLink href='/' target="-blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
      
    </FooterContainer>
  )
}

export default Footer

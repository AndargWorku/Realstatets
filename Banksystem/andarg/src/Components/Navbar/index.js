import React, { useEffect } from 'react'
import {FaBars} from "react-icons/fa";
import { useState } from 'react';
import {IconContext} from "react-icons/lib"
import {animateScroll as scroll} from "react-scroll"

import {Nav,
    NavbarContainer,
    NavLogo,MobileIcon,
    NavLinks,
    NavMenu,
    NavItem,
NavBtn,
NavBtnLink} from "./NavbarElement";
//  import Home from '../../pages';

const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav]=useState(false);
    const changeNav=()=>{
        if(scrollNav>=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav)

    },[ ]);

    const toggleHome=()=>{
        scroll.scrollToTop();
        
    };

  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    Dollar
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                         smooth={true}
                        spy={true}
                        duration={500}
                        exact={true}
                        offset={-80}
                        activeClass="active"
                        color='white'
                        >about</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"
                         smooth={true}
                         spy={true}
                         duration={500}
                         exact={true}
                         offset={-80}
                         activeClass="active"
                         color='white'
                        >Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                         smooth={true}
                         spy={true}
                         duration={500}
                         exact={true}
                         offset={-80}
                         activeClass="active"
                         color='white'
                        >Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="sign up"
                         smooth={true}
                         spy={true}
                         duration={500}
                         exact={true}
                         offset={-80}
                         activeClass="active"
                        
                        >Sign up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/sign in">Sign in</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>

      
    </>
  )
}

export default Navbar

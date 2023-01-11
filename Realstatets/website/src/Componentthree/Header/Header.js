import React from 'react'
import Link from 'next/link'
// import {AiFillGithub,AiFillInstagram,AiLinkedin} from 'react-icons/ai'
import {DiCassock as DiCassock} from 'react-icons/di'
import { Container,Div1, NavLink,} from './HeaderStyle'

const Header = () => {
  return (
    <Container>
        <Div1>
            <Link href="/">
                <a style={{display:'flex',alignItems:'center',Color:'white'}}>
                    <DiCassock size="3rem"/><span>portfilo</span>
                </a>
            </Link>
        </Div1>
        <Div1>
            <li>
                <Link href="#projects">
                    <NavLink>projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                    <NavLink>technology</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <NavLink>about</NavLink>
                </Link>
            </li>
        </Div1>
      
    </Container>
  )
}

export default Header

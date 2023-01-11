import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
// import { startTransition } from "react";
import {Link as LinkS} from "react-scroll"

export const Nav=styled.nav`
background:${({scrollNav})=>(scrollNav? '#0000':'turquoise')};
height:80px;
 margin-top:-80px;
display-flex;
justify-content:center;
align-items:center;
position:sticky;
top:0;
font-size:1rem;
z-index:10;
@media screen and(max-width:960px){
    transition:0.8s all ease;
}
`
;
export const NavbarContainer=styled.div`
display:flex;
justify-content:space-between;
height:80px;
width:100%;
z-index:1;
padding:0.24px;
max-width:1100px;
`
;
export const NavLogo=styled(LinkR)`
 color:#fff;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
align-items:center;
display:flex;
margin-left:24px
font-weight:bold;
font-decoration:none;
`;
export const MobileIcon=styled.div`
display:none;
@media screen and(max-width:760px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
    color:#fff;

}
`
;
export const NavMenu=styled.ul`
display:flex;
align-items:center;
text-algin:center;
list-style:none;
margin-right:-22px;
@media screen and(max-width:768px){
    display:none;
}
`
;
export const NavItem=styled.li`
height:80px;


`
;
export const NavLinks=styled(LinkS)`
display:flex;
align-items:center;
text-decoration :none;
padding:0 1rem;
height:100%;
cursor:pointer;
&.active{
    border-bottom:3px solid #01bf71;
}
`
;
export const NavBtn=styled.nav`
display:flex;
align-items-center;
@media screen and(max-width:768px){
    display:none;
}

`
;
export const NavBtnLink=styled(LinkR)`
border-radius:50px;
background:#01b71;
white-space:nowrap;
padding:10px 22px;
outline:none;
color:#010606;
border:none;
font-size:16px;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;
$.hover{
    transition:all 0.2s ease-in-out;
    color:#010606;

}

`;
import {IoIosArrowDropdown} from 'react-icons/ai';
import styled from 'styled-components';

export const Container=styled.div `
display:grid;
grid-template-columns:repeat(5,1fr);
grid-template-rows:1frs;
grid-template-gap:2rem;
padding:1rem;
padding-top:2rem;
@media${(props)=>props.theme.breakpoints.sm}{
    display:grid;
    grid-template-columns:repeat(5,1fr);
    grid-template-columns:repeat(2,60px);
    grid-template-gap:0.5rem;
    grid-row-gap:0.5rem;
}
`;
export const Div1=styled.div`
grid-area:1/1/2/2;
display:flex;
flex-direction:row;
align-content:center;
@media${(props)=>props.theme.breakpoints.sm}{
    grid-area:1/1/2/3;
}
`
export const NavLink=styled.a`
font-size:2rem;
line-height:32px;
Color:rgba(250,250,250,0.75);
transition :0.4s ease;
&:hover{
Color:#fff;
opacity:1rem;
cursor:pointer;
}
@media${(props)=>props.theme.breakpoints.sm}{
    padding:0.5rem;
}

`
export const ContactDropDown=styled.button`
border:none;
display:flex;
position:relative;
background:none;
font-size:1.7rem;
line-height:32px;
Color:rgba(255,255,255,0.75)
cursor:pointer;
transition:0.3s ease;
& focus{
    outline:none;
}
& hover{
    Color:#fff;
}
@media${(props)=>props.theme.breakpoints.sm}{
    padding:0.4rem 0;
}
@media${(props)=>props.theme.breakpoints.sm}{
    padding:0;
}

`;
export const NavProductIcon=styled(IoIosArrowDropdown)`
margin-left:8px;
display:flex;
align-self:center;
transition:0.3s ease;
opacity:&{({isOpen})=>(isOpen ? '1' : '.75'}};
transform:&{({isOpen})=>(isOpen ? 'scaleY(-1)':scaleY(1))};
& hover{
    opacity:1rem;
}
@media${(props)=>props.theme.breakpoints.sm}{
    padding:2px 0 2px;
    width:15px;
}

`;
export const SocialIcons=styled.a`
transition:0.3s ease;
Color:white;
border-radius:50px;
padding:8px;
`
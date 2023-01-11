import React from 'react'
import { SidebarContainer,
    Icon,
    CloseIcon,
SideBtnWrap,
SidebarLink,
SidebarRoute,
SidebarWrapper,
SidebarMenu ,

} from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to='discover'onClick={toggle}>
                    discover
                </SidebarLink>
                <SidebarLink to='services'onClick={toggle}>
                    services
                </SidebarLink>
                <SidebarLink to='sign up'onClick={toggle}>
                    sign up
                </SidebarLink>  
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/sign in">
                    sign in

                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
      
    </SidebarContainer>
  )
}

export default Sidebar

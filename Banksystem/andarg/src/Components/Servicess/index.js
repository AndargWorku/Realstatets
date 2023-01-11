import React from 'react'
import Icon1 from "../../images/Icon1.jpg"
import Icon2 from "../../images/Icon2.png"
import Icon3 from "../../images/Icon3.png"
import { ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
     ServicesP,
    
 } from './ServicesElements'
 
const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>
            our services

        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2> Reduce experience</ServicesH2>
                <ServicesP>we help reduce your fees and increase your over all revenue </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2> Virtual Offices</ServicesH2>
                <ServicesP>you can access our platform online any world </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2> premium Benefits</ServicesH2>
                <ServicesP>unlock our special membership card that return 5% cash bank</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
      
    </ServicesContainer>
  )
}

export default Services

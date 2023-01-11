import React from 'react'
import { Button } from '../ButtonElements';
// import { Button } from 'react-scroll';
import { InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    ImgWrap,
     Img } from './InfoElements';

const InfoSection = ({LightBg,
id,
imgStart,
topLine,
LightText,
headLine,
darkText,
description,
buttonLabel,
img,
alt,
primary,
dark,
dark2}) => {
  return (
    <>
    <InfoContainer LightBg={LightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>
                        {topLine}
                    </TopLine>
                    <Heading LightText={LightText}>{headLine}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                        <Button to='Home'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={primary ? 1:0}
                        dark={dark ? 1:0}
                        dark2={dark2 ? 1:0}
                        >{buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img src={img} alt={alt}/>
                </ImgWrap>
                    </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
      
    </>
  )
}

export default InfoSection

import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

export const TechnicalSupport = () => {
  return (
    <StyledWrapper>
      <StyledCard>
        <Image src='/logo-raw.svg' width='34px' height='34px' />
        <StyledTitle>Technical Support</StyledTitle>
        <StyledSubtitle>
          Turn your idea into reality.
        </StyledSubtitle>
        <StyledSubtitle>
          Our expert team will help you make valuable and profitable product
        </StyledSubtitle>
        <StyledContainedButton>request a service</StyledContainedButton>

        <StyledBackgroundImage1>
          <Image src='/images/artwork1.svg' width='578.4px' height='368.02px' />
        </StyledBackgroundImage1>
        <StyledBackgroundImage2>
          <Image src='/images/artwork2.svg' width='578.4px' height='368.02px' />
        </StyledBackgroundImage2>
      </StyledCard>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin-top: 74px;
  display: block;
`

const StyledCard = styled.div`
  width: 100%;
  height: 455px;
  background: #171717;
  border-radius: 4px;
  padding: 42px;
  position: relative;
  overflow: hidden;
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color: #FFFFFF;
  mix-blend-mode: luminosity;
  margin-bottom: 0;
`

const StyledSubtitle = styled.p`
  width: 332px;
  height: 64px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.07em;
  color: #667085;
`

const StyledContainedButton = styled.button`
  border: none;
  width: 254px;
  height: 80px;
  left: 76px;
  top: 626px;
  background: #736AE4;
  border-radius: 4px;
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 110%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
  margin-right: 40px;
`

const StyledBackgroundImage1 = styled.div`
  position: absolute;
  top: 150px;
  right: 134px;
  background: url(screencapture-rocki-music-2022-06-24-16_14_50.png), url(ARTWORK.png);
  border-radius: 0px 0px 5.69518px 5.69518px;
  transform: matrix(0.97, 0, -0.26, 1, 0, 0);
  z-index: 2;
`

const StyledBackgroundImage2 = styled.div`
  position: absolute;
  top: 94px;
  right: 64px;
  background: url(screencapture-rocki-music-2022-06-24-16_14_50.png), url(ARTWORK.png);
  border-radius: 0px 0px 5.69518px 5.69518px;
  transform: matrix(0.97, 0, -0.26, 1, 0, 0);
  z-index: 1;
`
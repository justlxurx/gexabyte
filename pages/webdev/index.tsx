import styled from '@emotion/styled'
import Image from 'next/image'
import WebProjects from 'components/custom/projects/WebProjects'
import ContactUs from 'components/custom/home-page/ContactUs'
import TechStack from 'components/custom/home-page/TechStack'
import RoundedAnimation from 'components/custom/RoundedAnimation'
import FirstBlockLayout from 'components/layouts/FirstBlockLayout'
import { RButton } from 'components/UI/atoms/RButton'
import { BlockchainAnimation } from 'components/UI/molecules/BlockchainAnimation/BlockchainAnimation'
import { DeFiService } from 'components/UI/molecules/DeFiService/DeFiService'
import { OurExpertiseWeb } from 'components/UI/molecules/OurExpertise/OurExpertiseWeb'
import React from 'react'
import Link from 'next/link'

const Webdev = () => {
  return (
    <Wrapper>
      <FirstBlock>
        <WebLeftSide>

          <WebTitle>Web & Mobile development</WebTitle>
          <WebSubtitle>
            Web applications for automating processes and solving business problems using modern technologies.
          </WebSubtitle>

          <Link href='#contact'><StyledContainedButton>contact us</StyledContainedButton></Link>
          <Link href='/projects'>
            <StyledTextButton>
              <OrangeText>&gt;&gt;</OrangeText>
              &nbsp;see all projects
            </StyledTextButton>
          </Link>
        </WebLeftSide>
        <WebImage><Image src={`/images/WebFirstblog.svg`} layout="fill" /></WebImage>
        {/* <WebImageMobile><Image src={`/images/WebImageMobile.svg`} layout="fill" /></WebImageMobile> */}
      </FirstBlock>
      <OurExpertiseWeb />
      <WebProjects />
    </Wrapper>

  )
}

export default Webdev;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const FirstBlock = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 10px;
  padding: 76px;
  position: relative;
  overflow: hidden;
  margin-bottom: 20vh;
  @media (max-width: 768px) {
    padding: 16px;
    margin-bottom: 10vh;
    overflow: hidden;
  }
`

const WebLeftSide = styled.div`

`

const WebImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  margin-left: 25vw;
  margin-top: -75px;
  
  @media (max-width: 768px) {
    position: absolute;
    left: 0px;
    right: -60px;
    top: -50px;
    display: block;
    width: 328px;
    height: 400px;
    margin-left: 55vw;
    margin-top: -5vw;
  }
`
const WebTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 5.5vw;
  line-height: 115%;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  margin-bottom: 31px;
`

const WebSubtitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 1.5vw;
  line-height: 133.5%;
  color: #FFFFFF;
  margin-bottom: 37px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const StyledContainedButton = styled.button`
  border: none;
  width: 254px;
  height: 80px;
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
  @media (max-width: 768px) {
    width: 152px;
    height: 50px;
    font-size: 14px;
  }
`

const StyledTextButton = styled.button`
  width: 100%;
  border: none;
  width: 254px;
  height: 80px;
  background: transparent;
  color: white;
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
  @media (max-width: 768px) {
    font-size: 14px;
    width: 164px;
  }
`

const OrangeText = styled.span`
  color: #F0B270;
`

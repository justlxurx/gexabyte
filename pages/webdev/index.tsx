import styled from '@emotion/styled'
import Image from 'next/image'
import WebProjects from 'components/custom/home-page/WebProjects'
import ContactUs from 'components/custom/home-page/ContactUs'
import TechStack from 'components/custom/home-page/TechStack'
import RoundedAnimation from 'components/custom/RoundedAnimation'
import FirstBlockLayout from 'components/layouts/FirstBlockLayout'
import { RButton } from 'components/UI/atoms/RButton'
import { BlockchainAnimation } from 'components/UI/molecules/BlockchainAnimation/BlockchainAnimation'
import { DeFiService } from 'components/UI/molecules/DeFiService/DeFiService'
import { OurExpertiseWeb } from 'components/UI/molecules/OurExpertise/OurExpertiseWeb'
import React from 'react'

const Webdev = () => {
  return (
    <Wrapper>
      <FirstBlock>
        <BlockChainLeftSide>

          <WebTitle>Web & Mobile development</WebTitle>
          <BlockchainSubtitle>
            Web applications for automating processes and solving <br /> business problems using modern technologies.
          </BlockchainSubtitle>

          <StyledContainedButton>contact us</StyledContainedButton>
          <StyledTextButton>
            <OrangeText>&gt;&gt;</OrangeText>
            &nbsp;see all projects
          </StyledTextButton>

        </BlockChainLeftSide>
        <WebImage><Image src={`/images/WebFirstblog.svg`} width='665px' height='706px' /></WebImage>
      </FirstBlock>
      <OurExpertiseWeb />
      <WebProjects />
      <ContactUs />

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
`

const BlockChainLeftSide = styled.div`

`

const WebImage = styled.div`
  position: absolute;
  width: 665px;
  height: 706px;
  margin-left: 55vw;
  margin-top: -5vw;
`

const WebTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 83px;
  line-height: 115%;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  margin-bottom: 31px;
`

const BlockchainSubtitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 133.5%;
  color: #FFFFFF;
  margin-bottom: 106px;
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

const StyledTextButton = styled.button`
  border: none;
  width: 254px;
  height: 80px;
  left: 76px;
  top: 626px;
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

`

const OrangeText = styled.span`
  color: #F0B270;
`

const SecondBlock = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  padding: 76px;
  position: relative;
  height: 480px;
`

const SecondBlockAnimation = styled.div`
  position: absolute;
  left: 470px;
  top: 170px;
`

const SecondBlockTitle = styled.div`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 127.5%;
  color: #FFFFFF;
`

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const StatsOneBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 120px;
`

const StatsNumber = styled.div`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 100%;
  color: #736AE4;
`
const StatsText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: #667085;
`

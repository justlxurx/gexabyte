import styled from '@emotion/styled'
import AllProjects from 'components/custom/home-page/AllProjects'
import ContactUs from 'components/custom/home-page/ContactUs'
import TechStack from 'components/custom/home-page/TechStack'
import RoundedAnimation from 'components/custom/RoundedAnimation'
import FirstBlockLayout from 'components/layouts/FirstBlockLayout'
import { RButton } from 'components/UI/atoms/RButton'
import { BlockchainAnimation } from 'components/UI/molecules/BlockchainAnimation/BlockchainAnimation'
import { DeFiService } from 'components/UI/molecules/DeFiService/DeFiService'
import { OurExpertise } from 'components/UI/molecules/OurExpertise/OurExpertise'
import React from 'react'

export default () => {
  return (
    <Wrapper>
      <FirstBlock>
        <BlockChainLeftSide>

          <BlockchainTitle>Blockchain development</BlockchainTitle>
          <BlockchainSubtitle>
            Web applications for automating processes and solving business problems using modern technologies.
          </BlockchainSubtitle>

          <StyledContainedButton>contact us</StyledContainedButton>
          <StyledTextButton>
            <OrangeText>&gt;&gt;</OrangeText>
            &nbsp;see all projects
          </StyledTextButton>

        </BlockChainLeftSide>
        <BlockchainAnimation />
      </FirstBlock>

      <SecondBlock>
        <SecondBlockTitle>
          We offer<br />
          <OrangeText>informed solutions</OrangeText><br />
          with a&nbsp;<OrangeText>creative approach.</OrangeText>
        </SecondBlockTitle>

        <StatsWrapper>
          <StatsOneBlock>
            <StatsNumber>40+</StatsNumber>
            <StatsText>Blockchain developers</StatsText>
          </StatsOneBlock>

          <StatsOneBlock>
            <StatsNumber>6+</StatsNumber>
            <StatsText>Blockchain development experience</StatsText>
          </StatsOneBlock>

          <StatsOneBlock>
            <StatsNumber>211+</StatsNumber>
            <StatsText>Blockchain and web development </StatsText>
          </StatsOneBlock>

          <StatsOneBlock>
            <StatsNumber>12+</StatsNumber>
            <StatsText>We work on different blockchain networks</StatsText>
          </StatsOneBlock>
        </StatsWrapper>

        <SecondBlockAnimation>
          <RoundedAnimation />
        </SecondBlockAnimation>
      </SecondBlock>

      <OurExpertise />
      <DeFiService />
      <TechStack />
      <AllProjects />
      <ContactUs />

    </Wrapper>

  )
}

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

const BlockchainTitle = styled.p`
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

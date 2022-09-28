import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import ContactUs from 'components/custom/home-page/ContactUs'
import TechStack from 'components/custom/home-page/TechStack'
import BlockchainProjects from 'components/custom/projects/BlockchainProjects'
import RoundedAnimation from 'components/custom/RoundedAnimation'
import { BlockchainAnimation } from 'components/UI/molecules/BlockchainAnimation/BlockchainAnimation'
import { DeFiService } from 'components/UI/molecules/DeFiService/DeFiService'
import { OurExpertiseBlockchain } from 'components/UI/molecules/OurExpertise/OurExpertiseBlockchain'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const BlockChain = () => {
  const [reftp, setReftp] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReftp(document.getElementById("contact-us"))
    }
  }, [])

  const handleScroll = () => {
    reftp?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Wrapper>
      <FirstBlock>
        <BlockChainLeftSide>

          <BlockchainTitle>Blockchain development</BlockchainTitle>
          <BlockchainSubtitle>
          Development of blockchain products for your ideas          
          </BlockchainSubtitle>
          <StyledContainedButton onClick={handleScroll}>contact us</StyledContainedButton>
          <Link href='/projects'>
            <StyledTextButton>
              <OrangeText>&gt;&gt;</OrangeText>
              &nbsp;see all projects
            </StyledTextButton>
          </Link>
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

      <OurExpertiseBlockchain />
      <DeFiService />
      <BlockchainProjects />

    </Wrapper>

  )
}

export default BlockChain;

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
  @media (max-width: 600px) {
    padding: 16px;
  }
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

  @media (max-width: 600px) {
    font-size: 28px;
  }
`

const BlockchainSubtitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 133.5%;
  color: #FFFFFF;
  margin-bottom: 106px;
  @media (max-width: 600px) {
    font-size: 12px;
    margin-bottom: 30px;
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
  color: #FFFFFF;
  &:hover {
    cursor: pointer;
  }
  margin-right: 40px;
  @media (max-width: 600px) {
    width: 152px;
    height: 50px;
    font-size: 14px;
  }
`

const StyledTextButton = styled.button`
  border: none;
  width: 254px;
  height: 80px;
  background: transparent;
  border-radius: 4px;
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 110%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: #FFFFFF;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    width: unset;
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
  overflow: hidden;
  @media (max-width: 600px) {
    padding: 16px;
    grid-template-columns: 1fr;
  }
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
  @media (max-width: 600px) {
    font-size: 28px;
  }
`

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
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

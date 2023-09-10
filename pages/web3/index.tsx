import styled from '@emotion/styled'
import Web3Projects from 'components/custom/projects/Web3Projects'
import RoundedAnimation from 'components/custom/RoundedAnimation'
import GlobalLayout from 'components/layouts/GlobalLayout'
import { BlockchainAnimation } from 'components/UI/molecules/BlockchainAnimation/BlockchainAnimation'
import { DeFiService } from 'components/UI/molecules/DeFiService/DeFiService'
import { OurExpertiseWeb3 } from 'components/UI/molecules/OurExpertise/OurExpertiseWeb3'
import Link from 'next/link'
import React, {ReactNode, useEffect, useState} from 'react'
import Head from 'next/head'
import {useTranslation} from "react-i18next";

const BlockChain = () => {
  const [reftp, setReftp] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReftp(document.getElementById("contact-us"))
    }
  }, [])

  const {t, i18n} = useTranslation()

  const handleScroll = () => {
    reftp?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <GlobalLayout>
      <Wrapper>
        <Head>
          <title>TechCompany / Web3 Solution Development</title>
          <meta name='description' content='Development of blockchain products for your ideas' />
        </Head>
        <FirstBlock>
          <Web3LeftSide>
            <Web3Title className={i18n.language === 'en' ? '' : 'geometria'}>{t('web3.title')}</Web3Title>
            <Web3Subtitle className={i18n.language === 'en' ? '' : 'nunito'}>
              {t('web3.subtitle')}
            </Web3Subtitle>
            <StyledContainedButton className={i18n.language === 'en' ? '' : 'nunito'} onClick={handleScroll}>{t('button.contactUs')}</StyledContainedButton>
            {/*<Link href='/projects'>*/}
            {/*  <StyledTextButton>*/}
            {/*    <OrangeText>&gt;&gt;</OrangeText>*/}
            {/*    &nbsp;see all projects*/}
            {/*  </StyledTextButton>*/}
            {/*</Link>*/}
          </Web3LeftSide>
          <BlockchainAnimation />
        </FirstBlock>

        <SecondBlock className={i18n.language === 'en' ? '' : 'geometria'}>
          <SecondBlockTitle>
            {t('web3.stats.title.0')}<br />
            <OrangeText>{t('web3.stats.title.1')}</OrangeText><br />
            {t('web3.stats.title.2')}&nbsp;<OrangeText>{t('web3.stats.title.3')}</OrangeText>
          </SecondBlockTitle>

          <StatsWrapper>
            <StatsOneBlock>
              <StatsNumber>40+</StatsNumber>
              <StatsText>{t('web3.stats.stat1')}</StatsText>
            </StatsOneBlock>

            <StatsOneBlock>
              <StatsNumber>6+</StatsNumber>
              <StatsText>{t('web3.stats.stat2')}</StatsText>
            </StatsOneBlock>

            <StatsOneBlock>
              <StatsNumber>50+</StatsNumber>
              <StatsText>{t('web3.stats.stat3')}</StatsText>
            </StatsOneBlock>

            <StatsOneBlock>
              <StatsNumber>12+</StatsNumber>
              <StatsText>{t('web3.stats.stat4')}</StatsText>
            </StatsOneBlock>
          </StatsWrapper>

          <SecondBlockAnimation>
            <RoundedAnimation />
          </SecondBlockAnimation>
        </SecondBlock>

        <OurExpertiseWeb3 />
        <DeFiService />
        <Web3Projects />

      </Wrapper>
    </GlobalLayout>
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

const Web3LeftSide = styled.div`

`

const Web3Title = styled.h1`
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
  
  &.geometria{
    font-family: 'Geometria', sans-serif;
  }
`

const Web3Subtitle = styled.p`
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
  
  &.nunito{
    font-family: 'Nunito', sans-serif;
  }
`

const StyledContainedButton = styled.button`
  border: none;
  width: 254px;
  height: 80px;
  background: #736AE4;
  border-radius: 4px;
  font-family: 'Poppins';
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
  
  &.nunito{
    font-family: 'Nunito', sans-serif;
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
  
  &.geometria{
    font-family: 'Geometria', sans-serif;
  }
`

const SecondBlockAnimation = styled.div`
  position: absolute;
  left: 470px;
  top: 170px;
`

const SecondBlockTitle = styled.div`
  font-family: inherit;
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
  font-family: inherit;
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
  font-family: inherit;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: #667085;
`

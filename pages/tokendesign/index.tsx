import styled from '@emotion/styled'
import TokenDesignProjects from '../../components/custom/projects/TokenDesignProjects'
import { StatsTokenDesign } from '../../components/custom/StatsTokenDesign'
import GlobalLayout from 'components/layouts/GlobalLayout'
import { OurExpertiseTokenDesign } from '../../components/UI/molecules/OurExpertise/OurExpertiseTokenDesign'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Head from "next/head";
import {useTranslation} from "react-i18next";

const Consulting = () => {
  const [reftp, setReftp] = useState<HTMLElement | null>(null)

  const {t, i18n} = useTranslation()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReftp(document.getElementById("contact-us"))
    }
  }, [])

  const handleScroll = () => {
    reftp?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <GlobalLayout>
      <Wrapper>
        <Head>
          <title>TechCompany / Token Design</title>
          <meta name='description' content='Development of tokenomics, consulting on the technical and business part of your product.' />
        </Head>
        <FirstBlock>
          <TokenDesignLeftSide>
            <TokenDesignTitle className={i18n.language === 'en' ? '' : 'geometria'}>{t('tokenDesign.title')}</TokenDesignTitle>
            {/*<TokenDesignSubtitle>*/}
            {/*  Development of tokenomics, consulting on the technical and business part of your product.*/}
            {/*</TokenDesignSubtitle>*/}
            <StyledContainedButton className={i18n.language === 'en' ? '' : 'nunito'} onClick={handleScroll}>{t('button.contactUs')}</StyledContainedButton>
            {/*<Link href='/projects'>*/}
            {/*  <StyledTextButton>*/}
            {/*    <OrangeText>&gt;&gt;</OrangeText>*/}
            {/*    &nbsp;see all projects*/}
            {/*  </StyledTextButton>*/}
            {/*</Link>*/}
          </TokenDesignLeftSide>
          {/*<GraphicWrapper>*/}
          {/*  <img src='/images/graphic 1.svg' className='graph' />*/}
          {/*</GraphicWrapper>*/}
        </FirstBlock>
        <StatsTokenDesign />
        <OurExpertiseTokenDesign />
        <TokenDesignProjects />
      </Wrapper>
    </GlobalLayout>
  )
}

export default Consulting;

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

const TokenDesignLeftSide = styled.div`

`

const GraphicWrapper = styled.div`
  position: absolute;
  top: 96px;
  right: 80px;

  @media (max-width: 600px) {
    right: -30%;
  }

  .graph {
    @media (max-width: 600px) {
      width: 287px;
      height: 279px;
    }
  }

`

const TokenDesignTitle = styled.h1`
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

const TokenDesignSubtitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 133.5%;
  color: #FFFFFF;
  margin-bottom: 106px;
  @media (max-width: 600px) {
    font-size: 12px;
    margin-bottom: 31px;
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
    width: auto;
  }
`

const OrangeText = styled.span`
  color: #F0B270;
`
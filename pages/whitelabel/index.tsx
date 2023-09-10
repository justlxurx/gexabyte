import styled from '@emotion/styled'
import WhiteLabelProjects from 'components/custom/projects/WhiteLabelProjects'
import GlobalLayout from 'components/layouts/GlobalLayout'
import { OurExpertiseWeb } from 'components/UI/molecules/OurExpertise/OurExpertiseWeb'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Head from "next/head";
import {useTranslation} from "react-i18next";

const Webdev = () => {
  const { pathname } = useRouter()

  const [reftp, setReftp] = React.useState<HTMLElement | null>(null)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setReftp(document.getElementById("contact-us"))
    }
  }, [pathname])

  const {t, i18n} = useTranslation()

  const handleScroll = () => {
    reftp?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <GlobalLayout>
      <Wrapper>
        <Head>
          <title>TechCompany / White Label Products</title>
          <meta name='description' content='Web applications for automating processes and solving business problems using modern technologies.' />
        </Head>
        <FirstBlock>
          <WhiteLabelLeftSide>
            <WhiteLabelTitle className={i18n.language === 'en' ? '' : 'geometria'}>{t('whiteLabel.title')}</WhiteLabelTitle>
            <WhiteLabelSubtitle className={i18n.language === 'en' ? '' : 'nunito'}>
              {t('whiteLabel.subtitle')}
            </WhiteLabelSubtitle>
            <Link href={'#contact'}><StyledContainedButton className={i18n.language === 'en' ? '' : 'nunito'} onClick={handleScroll}>{t('button.contactUs')}</StyledContainedButton></Link>
            {/*<Link href={'/projects'}>*/}
            {/*  <StyledTextButton>*/}
            {/*    <OrangeText>&gt;&gt;</OrangeText>*/}
            {/*    &nbsp;see all projects*/}
            {/*  </StyledTextButton>*/}
            {/*</Link>*/}
          </WhiteLabelLeftSide>
          {/*<WebImage>*/}
          {/*  <Image src={`/images/WebFirstblog.svg`} layout={"fill"} alt={'WebFirstblog'} priority={true} objectFit={"contain"}/>*/}
          {/*</WebImage>*/}
        </FirstBlock>
        {/*<OurExpertiseWeb />*/}
        <WhiteLabelProjects />
      </Wrapper>
    </GlobalLayout>
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

const WhiteLabelLeftSide = styled.div`

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
const WhiteLabelTitle = styled.h1`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 5.5vw;
  line-height: 115%;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  margin-bottom: 31px;
  
  &.geometria{
    font-family: 'Geometria', sans-serif;
  }
`

const WhiteLabelSubtitle = styled.p`
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
  @media (max-width: 768px) {
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

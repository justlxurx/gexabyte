import styled from '@emotion/styled'
import CryptosystemProjects from 'components/custom/projects/CryptosystemProjects'
import { StatsCryptosystem } from 'components/custom/StatsCryptosystem'
import GlobalLayout from 'components/layouts/GlobalLayout'
import { OurExpertiseCryptosystem } from 'components/UI/molecules/OurExpertise/OurExpertiseCryptosystem'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Head from "next/head";

const Consulting = () => {
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
    <GlobalLayout>
      <Wrapper>
        <Head>
          <title>TechCulture / Cryptosystem Design</title>
          <meta name='description' content='Development of tokenomics, consulting on the technical and business part of your product.' />
        </Head>
        <FirstBlock>
          <CryptosystemLeftSide>
            <CryptosystemTitle>Cryptosystem Design</CryptosystemTitle>
            {/*<CryptosystemSubtitle>*/}
            {/*  Development of tokenomics, consulting on the technical and business part of your product.*/}
            {/*</CryptosystemSubtitle>*/}
            <StyledContainedButton onClick={handleScroll}>contact us</StyledContainedButton>
            {/*<Link href='/projects'>*/}
            {/*  <StyledTextButton>*/}
            {/*    <OrangeText>&gt;&gt;</OrangeText>*/}
            {/*    &nbsp;see all projects*/}
            {/*  </StyledTextButton>*/}
            {/*</Link>*/}
          </CryptosystemLeftSide>
          {/*<GraphicWrapper>*/}
          {/*  <img src='/images/graphic 1.svg' className='graph' />*/}
          {/*</GraphicWrapper>*/}
        </FirstBlock>
        <StatsCryptosystem />
        <OurExpertiseCryptosystem />
        <CryptosystemProjects />
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

const CryptosystemLeftSide = styled.div`

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

const CryptosystemTitle = styled.h1`
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

const CryptosystemSubtitle = styled.p`
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
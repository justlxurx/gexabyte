import styled from '@emotion/styled'
import React from 'react'
import RoundedAnimation from '../RoundedAnimation'

export const Stats = () => {
  return (
    <SecondBlock>
      <SecondBlockTitle>
        We create digital services for large businesses.
      </SecondBlockTitle>

      <StatsWrapper>
        <StatsOneBlock>
          <StatsNumber>40+</StatsNumber>
          <StatsText>Number of completed projects</StatsText>
        </StatsOneBlock>

        <StatsOneBlock>
          <StatsNumber>6+</StatsNumber>
          <StatsText>Blockchain and web development experience</StatsText>
        </StatsOneBlock>

        <StatsOneBlock>
          <StatsNumber>211+</StatsNumber>
          <StatsText>Blockchain and web development </StatsText>
        </StatsOneBlock>
      </StatsWrapper>

      <SecondBlockAnimation>
        <RoundedAnimation />
      </SecondBlockAnimation>
    </SecondBlock>
  )
}

const SecondBlock = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  padding: 76px;
  position: relative;
  height: 480px;

  @media (max-width: 600px) {
    display: block;
    padding: 16px;
    margin-bottom: 4rem;
  }
`

const SecondBlockAnimation = styled.div`
  position: absolute;
  left: 560px;
  top: 200px;

  @media (max-width: 600px) {
    left: 220px;
    top: 320px;
  }
`

const SecondBlockTitle = styled.div`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: #FFFFFF;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 54px;
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
  @media (min-width: 601px) {
    width: 230px;
  }
`

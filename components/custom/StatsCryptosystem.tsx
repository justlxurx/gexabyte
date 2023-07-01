import styled from '@emotion/styled'
import React from 'react'
import RoundedAnimation from './RoundedAnimation'
import styles from '../../styles/components/StatsCryptosystem.module.scss'

export const StatsCryptosystem = () => {
  return (
    <SecondBlock>
      <SecondBlockTitle>
          We create complex systems
      </SecondBlockTitle>

      <StatsWrapper>
        <StatsOneBlock>
          {/*<StatsNumber>10+</StatsNumber>*/}
          <StatsText>
              <span className={`${styles.readAnim} ${styles.part1}`}>Our goal</span>
              <span className={`${styles.readAnim} ${styles.part2}`}> is to create</span>
              <span className={`${styles.readAnim} ${styles.part3}`}> sustainable economic models</span>
              <span className={`${styles.readAnim} ${styles.part4}`}> using game theory,</span>
              <span className={`${styles.readAnim} ${styles.part5}`}> behavioral economics,</span>
              <span className={`${styles.readAnim} ${styles.part6}`}> sociology,</span>
              <span className={`${styles.readAnim} ${styles.part7}`}> computer science,</span>
              <span className={`${styles.readAnim} ${styles.part8}`}> focused on improving people&apos;s lives</span>
          </StatsText>
        </StatsOneBlock>

        {/*<StatsOneBlock>*/}
        {/*  <StatsNumber>5+</StatsNumber>*/}
        {/*  <StatsText>Blockchain consulting experience</StatsText>*/}
        {/*</StatsOneBlock>*/}

        {/*<StatsOneBlock>*/}
        {/*  <StatsNumber>20+</StatsNumber>*/}
        {/*  <StatsText>Projects successfully operating and receiving our services </StatsText>*/}
        {/*</StatsOneBlock>*/}
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
    margin-bottom: 46px;
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
  line-height: 100%;
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
    gap: 16px;
  }
`

const StatsOneBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 601px) {
    max-width: 340px; //120px;
  }
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
  font-size: 24px;//18px;
  line-height: 140%;
  color: #667085;
  transform: translateX(70px);
  @media (min-width: 601px) {
    width: 340px; //230px;
  }
`

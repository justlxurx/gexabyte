import styled from '@emotion/styled'
import React, {useMemo} from 'react'
import RoundedAnimation from './RoundedAnimation'
import styles from '../../styles/components/StatsCryptosystem.module.scss'
import {useTranslation} from "react-i18next";

const classesAnim = [
    styles.part1,
    styles.part2,
    styles.part3,
    styles.part4,
    styles.part5,
    styles.part6,
    styles.part7,
    styles.part8
]

export const StatsTokenDesign = () => {

  const {t, i18n} = useTranslation()

  const statText: string[] = useMemo(() => {
      return t('tokenDesign.stats.text', {returnObjects: true})
  }, [t])

  return (
    <SecondBlock>
      <SecondBlockTitle className={i18n.language === 'en' ? '' : 'geometria'}>
          {t('tokenDesign.stats.title')}
      </SecondBlockTitle>

      <StatsWrapper>
        <StatsOneBlock>
          {/*<StatsNumber>10+</StatsNumber>*/}
          <StatsText className={i18n.language === 'en' ? '' : 'nunito'}>
              {statText.map((el, idx) => (<span key={el} className={`${styles.readAnim} ${classesAnim[idx]}`}>{el}</span>))}
              {/*<span className={`${styles.readAnim} ${styles.part1}`}>Our goal</span>*/}
              {/*<span className={`${styles.readAnim} ${styles.part2}`}> is to create</span>*/}
              {/*<span className={`${styles.readAnim} ${styles.part3}`}> sustainable economic models</span>*/}
              {/*<span className={`${styles.readAnim} ${styles.part4}`}> using game theory,</span>*/}
              {/*<span className={`${styles.readAnim} ${styles.part5}`}> behavioral economics,</span>*/}
              {/*<span className={`${styles.readAnim} ${styles.part6}`}> sociology,</span>*/}
              {/*<span className={`${styles.readAnim} ${styles.part7}`}> computer science,</span>*/}
              {/*<span className={`${styles.readAnim} ${styles.part8}`}> focused on improving people&apos;s lives</span>*/}
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
  
  &.geometria{
    font-family: 'Geometria', sans-serif;
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
  
  @media (max-width: 1180px) {
    transform: translateX(0);
  }
  
  &.nunito{
    font-family: 'Nunito', sans-serif;
  }
`

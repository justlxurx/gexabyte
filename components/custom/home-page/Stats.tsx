import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import RoundedAnimation from '../RoundedAnimation'

export const Stats = () => {
  const { t } = useTranslation()
  const isMobile = useMediaQuery('(max-width: 900px)')

  return (
    <SecondBlock id={"stats-block"}>
      <SecondBlockTitle>
        {t('home.stats.title')}
      </SecondBlockTitle>

      <StatsWrapper>
        <StatsOneBlock>
          <StatsNumber>40+</StatsNumber>
          <StatsText>{t('home.stats.completedProjects')}</StatsText>
        </StatsOneBlock>

        {isMobile &&
          <StatsOneBlock>
            <StatsNumber>211+</StatsNumber>
            <StatsText>{t('home.stats.blockchainWeb')}</StatsText>
          </StatsOneBlock>
        }

        <StatsOneBlock>
          <StatsNumber>6+</StatsNumber>
          <StatsText>{t('home.stats.experience')}</StatsText>
        </StatsOneBlock>

        {!isMobile && <StatsOneBlock>
          <StatsNumber>211+</StatsNumber>
          <StatsText>{t('home.stats.blockchainWeb')}</StatsText>
        </StatsOneBlock>}
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

  @media (max-width: 900px) {
    display: block;
    padding: 16px;
    margin-bottom: 4rem;
  }
`

const SecondBlockAnimation = styled.div`
  position: absolute;
  left: 500px;
  top: 220px;

  @media (max-width: 900px) {
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
  margin-top: 50px;
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 34px;
  }
`

const StatsOneBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 223px;
  width: 100%;
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
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #667085;
  @media (min-width: 601px) {
    width: 100%;
  }

`

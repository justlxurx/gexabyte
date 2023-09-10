import styled from '@emotion/styled'
import React from 'react'
import { SmartContractDev } from './SmartContractDev/SmartContractDev'
import {useTranslation} from "react-i18next";

export const OurExpertiseWeb3 = () => {

  const {t, i18n} = useTranslation()

  return (
    <StyledWrapper>
      <StyledTitle className={i18n.language === 'en' ? '' : 'geometria'}>{t('web3.expertise.title')}\\</StyledTitle>
      <SmartContractDev />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 76px;
  max-width: 1400px;
  margin-inline: auto;
  @media (max-width: 600px) {
    padding: 16px;
  }
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 110%;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: #FFFFFF;
  
  &.geometria{
    font-family: 'Geometria', sans-serif;
  }
`


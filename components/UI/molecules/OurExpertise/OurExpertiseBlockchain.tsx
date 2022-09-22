import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { SmartContractDev } from './SmartContractDev/SmartContractDev'

export const OurExpertiseBlockchain = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Our expertise\\</StyledTitle>
      <SmartContractDev />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 76px;
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
`


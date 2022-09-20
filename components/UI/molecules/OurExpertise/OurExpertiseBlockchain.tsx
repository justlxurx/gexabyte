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
  font-size: 46px;
  line-height: 117.5%;
  color: #FFFFFF;
  width: 414px;
`


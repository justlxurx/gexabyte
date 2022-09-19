import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <StyledWrapper>
      <StyledLogo>
        <Image src='/logo-raw.svg' width='34px' height='34px' />
        <Image className='logo' src='/logo-text.svg' width='64px' height='34px' />
      </StyledLogo>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 34px 80px;

  @media (max-width: 600px) {
    padding: 16px 16px;
  }
`

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .logo {
    @media (max-width: 600px) {
      display: none;
    }
  }
`

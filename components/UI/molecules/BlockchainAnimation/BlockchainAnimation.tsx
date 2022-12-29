import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import React from 'react'

export const BlockchainAnimation = () => {
  return (
    <StyledWrapper>
      <StyledAnimationWrapper>
        <StyledImgFirst src={'/images/no-background-code.png'} alt={'noBackgroundCode'}/>
        <StyledImg src={'/images/no-background-code.png'} alt={'noBackgroundCode'}/>
        <StyledImg src={'/images/no-background-code.png'} alt={'noBackgroundCode'}/>
        <StyledImg src={'/images/no-background-code.png'} alt={'noBackgroundCode'}/>
      </StyledAnimationWrapper>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
`

const StyledAnimationWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 50%;
  top: 0;
`

const scroll = keyframes`
  0% {
    margin-top: 0px;
  }

  100% {
    margin-top: -645px;
  }
`

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
`

const StyledImgFirst = styled.img`
  height: 100%;
  width: 100%;
  animation: ${scroll} 10s linear infinite;
`


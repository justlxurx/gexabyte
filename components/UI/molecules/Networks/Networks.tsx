import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { FC, useRef } from 'react'

const networks = ['bitcoin.svg', 'etherium1.svg', 'cosmos.svg', 'fantom.svg', 'avalanche.svg', 'polkadot.svg', 'atom.svg', 'tron.svg', 'polygon.svg', 'arbitrum.svg', 'solana.svg', 'binanceSC.svg', 'cardano.svg']

export const Networks: FC = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const listRef = useRef<HTMLDivElement>(null);

  const swipeIcons = (side: 'left' | 'right') => {
    if (side === 'left' && isMobile) {
      listRef.current!.scrollLeft -= 415;
    }
    else if (side === 'right' && isMobile) {
      listRef.current!.scrollLeft += 415;
    }
  }

  return (
    <div>
      <StyledTitle>Using such networks:</StyledTitle>
      <StyledGridItemNetworks ref={listRef}>
        {networks.map((icon, idx) => (
          <StyledNetworksCard key={idx} >
            <Image src={`/icons/${icon}`} width='120px' height='52px' />
          </StyledNetworksCard>
        ))}
      </StyledGridItemNetworks>
      {isMobile &&
        <StyledPagination>
          <StyledPaginationButton onClick={() => swipeIcons('left')}>
            <Image src='/icons/arrow left.svg' width='24px' height='24px' />
          </StyledPaginationButton>
          <StyledPaginationButton onClick={() => swipeIcons('right')}>
            <Image src='/icons/arrow right.svg' width='24px' height='24px' />
          </StyledPaginationButton>
        </StyledPagination>
      }
    </div>
  )
}

const StyledGridItemNetworks = styled.div`
  display: grid;
  grid-template-columns: 154px 154px 154px;
  gap: 30px;

  @media (max-width: 600px) {
    display: flex;
    gap: 12px;
    align-items: center;
    list-style: none;
    max-width: 400px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      background: transparent; /* make scrollbar transparent */
      -webkit-appearance: none;
      width: 0;
      height: 0;
    }
  }
`

const StyledNetworksCard = styled.div`
  width: 154px;
  height: 64.13px;
  background: #171717;
  border-radius: 2px;
  padding: 21px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex: 0 0 154px;
  }
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 137%;
  color: #FFFFFF;
`

const StyledPaginationButton = styled.button`
  width: 40px;
  height: 40px;
  background: #171717;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`

const StyledPagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material';
import Image from 'next/image'
import { FC, useRef } from 'react'

const DeFiTechs = [
  { title: 'compund', icon: '/icons/compound.svg' },
  { title: 'aave', icon: '/icons/aave.svg' },
  { title: 'metamask', icon: '/icons/metamask.svg' },
  { title: 'uniswap', icon: '/icons/uniswap.svg' },
  { title: 'raydium', icon: '/icons/raydium.svg' },
  { title: 'pancakeswap', icon: '/icons/pancakeswap-cake-logo 1.svg' },
  { title: 'trust wallet', icon: '/icons/trust wallet.svg' },
  { title: '1inch ', icon: '/icons/1inch.svg' },
  { title: 'venus', icon: '/icons/venus.svg' },
  { title: 'infura', icon: '/icons/infura.svg' },
  { title: 'quicknode', icon: '/icons/quicknode.svg' },
  { title: 'balancer', icon: '/icons/balancer.svg' },
]

export const DeFiService: FC = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const listRef = useRef<HTMLDivElement>(null);

  const swipeIcons = (side: 'left' | 'right') => {
    if (side === 'left' && isMobile) {
      listRef.current!.scrollLeft -= 417;
    }
    else if (side === 'left' && !isMobile) {
      listRef.current!.scrollLeft -= 1284;
    }
    else if (side === 'right' && isMobile) {
      listRef.current!.scrollLeft += 417;
    }
    else if (side === 'right' && !isMobile) {
      listRef.current!.scrollLeft += 1284;
    }
  }

  return (
    <StyledWrapper>
      <StyledFlexArea>
        <StyledTitle>DeFi service we are working with</StyledTitle>
        {!isMobile &&
          <StyledPagination>
            <StyledPaginationButton onClick={() => swipeIcons('left')}>
              <Image src='/icons/arrow left.svg' width='24px' height='24px' />
            </StyledPaginationButton>
            <StyledPaginationButton onClick={() => swipeIcons('right')}>
              <Image src='/icons/arrow right.svg' width='24px' height='24px' />
            </StyledPaginationButton>
          </StyledPagination>
        }
      </StyledFlexArea>

      <StyledCardsArea ref={listRef}>

        {DeFiTechs.map((item, idx) => (
          <StyledCard key={idx}>
            <StyledIconArea>
              <Image src={item.icon} width='74px' height='74px' className='icon' />
            </StyledIconArea>
            <StyledCardText>{item.title}</StyledCardText>
          </StyledCard>
        ))}
      </StyledCardsArea>
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

    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 76px;
  margin-bottom: 53px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`

const StyledCardsArea = styled.div`
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  display: flex;
  gap: 18px;
  align-items: center;
  list-style: none;
  max-width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    background: transparent; /* make scrollbar transparent */
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 117.5%;
  color: #FFFFFF;
  width: 475px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`

const StyledCard = styled.div`
  width: 196px;
  height: 177px;
  background: #1F1F1F;
  border-radius: 7px;
  flex: 0 0 196px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 121px;
    height: 108.72px;
    flex: 0 0 121px;
  }
`

const StyledIconArea = styled.div`
  width: 74px;
  height: 74px;
  // background: #141414;
  border-radius: 5px;
  padding: 10px;
  text-align: center;

  @media (max-width: 600px) {
    width: 64px;
    height: 64px;
  }
`

const StyledCardText = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 110%;
  text-transform: uppercase;
  color: #F0B270;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`

const StyledFlexArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const StyledPaginationButton = styled.button`
  width: 40px;
  height: 40px;
  left: 48px;
  top: 0px;
  background: #171717;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin-right: 30px;
`

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 600px) {
    margin-top: 20px;
    justify-content: space-between;
  }
`
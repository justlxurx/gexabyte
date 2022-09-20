import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material';
import Image from 'next/image'
import { FC } from 'react'

export const DeFiService: FC = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <StyledWrapper>
      <StyledFlexArea>
        <StyledTitle>DeFi service we are working with</StyledTitle>
        {!isMobile &&
          <div>
            <StyledPaginationButton>
              <Image src='/icons/arrow left.svg' width='24px' height='24px' />
            </StyledPaginationButton>
            <StyledPaginationButton>
              <Image src='/icons/arrow right.svg' width='24px' height='24px' />
            </StyledPaginationButton>
          </div>
        }
      </StyledFlexArea>

      <StyledCardsArea>

        <StyledCard>
          <StyledIconArea>
            <Image src='/icons/compound.svg' width='74px' height='74px' />
          </StyledIconArea>
          <StyledCardText>compound</StyledCardText>
        </StyledCard>

        <StyledCard>
          <StyledIconArea>
            <Image src='/icons/aave.svg' width='74px' height='74px' />
          </StyledIconArea>
          <StyledCardText>aave</StyledCardText>
        </StyledCard>
        <StyledCard>
          <StyledIconArea>
            <Image src='/icons/metamask.svg' width='74px' height='74px' />
          </StyledIconArea>
          <StyledCardText>metamask</StyledCardText>
        </StyledCard>

        {!isMobile &&
          <>
            <StyledCard>
              <StyledIconArea>
                <Image src='/icons/uniswap.svg' width='74px' height='74px' />
              </StyledIconArea>
              <StyledCardText>uniswap</StyledCardText>
            </StyledCard>

            <StyledCard>
              <StyledIconArea>
                <Image src='/icons/raydium.svg' width='74px' height='74px' />
              </StyledIconArea>
              <StyledCardText>Raydium</StyledCardText>
            </StyledCard>

            <StyledCard>
              <StyledIconArea>
                <Image src='/icons/pancakeswap-cake-logo 1.svg' width='74px' height='74px' />
              </StyledIconArea>
              <StyledCardText>Pancakeswap</StyledCardText>
            </StyledCard>
          </>
        }

      </StyledCardsArea>

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 121px;
    height: 108.72px;
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
    width: 45px;
    height: 45px;
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
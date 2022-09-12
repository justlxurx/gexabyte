import styled from '@emotion/styled'
import Image from 'next/image'
import { FC } from 'react'

interface IProps {
}

export const DeFiService: FC<IProps> = () => {
  return (
    <StyledWrapper>
      <StyledTitle>DeFi service we are working with</StyledTitle>

      <StyledCardsArea>

        <StyledCard>
          <StyledIconArea>
            <Image src='/icons/compound.svg' width='54px' height='54px' />
          </StyledIconArea>
          <StyledCardText>compound</StyledCardText>
        </StyledCard>

        <StyledCard>
          <StyledIconArea>
            <Image src='/icons/binance.svg' width='54px' height='54px' />
          </StyledIconArea>
          <StyledCardText>binance api</StyledCardText>
        </StyledCard>
        <StyledCard>
          <StyledIconArea>
            <Image src='/icons/metamask.svg' width='54px' height='54px' />
          </StyledIconArea>
          <StyledCardText>metamask</StyledCardText>
        </StyledCard>

        <StyledCard>
          <StyledIconArea>
            <Image src='/icons/uniswap.svg' width='54px' height='54px' />
          </StyledIconArea>
          <StyledCardText>compound</StyledCardText>
        </StyledCard>

      </StyledCardsArea>

    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 76px;
  margin-bottom: 53px;;
`

const StyledCardsArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 117.5%;
  color: #FFFFFF;
  width: 475px;
`

const StyledCard = styled.div`
  width: 305px;
  height: 177px;
  background: #1F1F1F;
  border-radius: 7px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledIconArea = styled.div`
  width: 73px;
  height: 73px;
  background: #141414;
  border-radius: 5px;
  padding: 10px;
`

const StyledCardText = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 110%;
  text-transform: uppercase;
  color: #F0B270;
`
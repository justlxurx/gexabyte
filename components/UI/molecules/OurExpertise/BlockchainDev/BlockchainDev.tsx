import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { Networks } from '../../Networks/Networks'
import { Technologies } from '../../Technologies/Technologies'
import {checkIcon} from "@public/icons";

const services = [
    'ICO launch and support',
    'Task Description',
    'Tokenomics',
    'RoadMap',
    'Product Development',
    'Landing Page'
]

export const BlockchainDev = () => {
  return (
    <StyledWrapper>
      <div>
        <StyledTitle>Full cycle <br /> blockchain development</StyledTitle>

        <StyledSubtitle>
          Turn your idea into reality.<br />
          Our expert team will help you make valuable and profitable product
        </StyledSubtitle>

        <StyledLeftCardsArea>
          {services.map((service, idx) => (
            <StyledCard key={idx}>
              <StyledCheckIcon>
                <Image src={checkIcon} width={'56px'} height={'56px'} alt={'checkIcon'}/>
              </StyledCheckIcon>
              <StyledCardText>{service}</StyledCardText>
            </StyledCard>
          ))}
        </StyledLeftCardsArea>
      </div>

      <div>
        <Networks />
        <Technologies />
      </div>

    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 128px;
  margin-top: 60px;
`

const StyledTitle = styled.p`
  grid-row-start: 1;
  grid-row-end: 3;
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 137%;
  color: #FFFFFF;
  mix-blend-mode: luminosity;
`
const StyledSubtitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.07em;
  color: #667085;
  width: 410px;
`

const StyledLeftCardsArea = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;
`

const StyledCard = styled.div`
  width: 305px;
  height: 210px;
  background: #171717;
  border-radius: 5px;
  display: flex;
  padding-left: 30px;
  align-items: flex-end;
  position: relative;
`

const StyledCardText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 127%;
  color: #FFFFFF;
  mix-blend-mode: luminosity;
  width: 165px;
`

const StyledCheckIcon = styled.div`
  width: 56px;
  height: 56px;
  position: absolute;
  top: 17px;
  left: 26px;
`

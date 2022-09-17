import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { Networks } from '../../Networks/Networks'
import { WebTechnologies } from '../../Technologies/WebTechnologies'

const WebApps = ['IOT', 'GameFi', 'iOS App', 'Fintech', 'Сomputer vision', 'Android App']
const technologies = ['bitcoin.svg', 'etherium1.svg', 'cosmos.svg', 'fantom.svg', 'avalanche.svg', 'polkadot.svg', 'atom.svg', 'tron.svg', 'polygon.svg', 'arbitrum.svg', 'solana.svg', 'binanceSC.svg', 'cardano.svg']


export const WebTechDev = () => {
  return (
    <StyledWrapper>

        <div>
          <StyledTitle>Mobile Application Development for iOS <br/> and Android with a user-friendly interface</StyledTitle>
          <StyledGridItem>
            {WebApps.map((app, idx) => (
                <StyledLeftCard key={idx}>
              <StyledLeftTopIcon>
                <Image src='/icons/top-left-card.svg' width='31px' height='15px' />
              </StyledLeftTopIcon>
              {app}
                </StyledLeftCard>
            ))}
          </StyledGridItem>
        </div>

      <div>
        <WebTechnologies />
      </div>


    </StyledWrapper >
  )
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 128px;
  margin-top: 60px;
  @media (max-width: 600px) {
    grid-template-columns: 100%;
  }
;
`
const StyledGridItem = styled.div`
  display: grid;
  grid-template-columns: 305px 305px; 
  gap: 24px 19px;
`

const StyledTitle = styled.p`
font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 137%;
  color: #FFFFFF;
`

const StyledLeftCard = styled.div`
  width: 305px;
  height: 119px;
  background: #171717;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 127%;
  color: #FFFFFF;
  padding: 35px 45px;
  margin-bottom: 20px;
  position: relative;
`

const StyledLeftTopIcon = styled.span`
  color: #736AE4;
  position: absolute;
  top: 18px;
  left: 18px;
`
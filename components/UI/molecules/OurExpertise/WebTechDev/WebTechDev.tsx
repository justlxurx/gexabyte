import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { WebTechnologies } from '../../Technologies/WebTechnologies'

const WebApps = ['IOT', 'GameFi', 'iOS App', 'Fintech', 'Сomputer vision', 'Android App']

export const WebTechDev = () => {
  return (
    <StyledWrapper>

        <StyledTech>
          <StyledTitle>Mobile Application Development for iOS and Android with a user-friendly interface</StyledTitle>
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
        </StyledTech>

      <div>
        <WebTechnologies />
      </div>


    </StyledWrapper >
  )
}

const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 40px;
  @media (max-width: 1500px) {
    grid-template-columns: 100%;
  }
`
const StyledTech = styled.div`
  padding-right: 8vw;
  @media (max-width: 1500px) {
    padding-right:0;
    margin-bottom: 5vh;
  }
`
const StyledGridItem = styled.div`
  display: grid;
  grid-template-columns: 50% 50%; 
  gap: 2.8vh 1vw;

  @media (max-width: 600px) {

  }
`

const StyledTitle = styled.p`
font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 125%;
  color: #FFFFFF;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`

const StyledLeftCard = styled.div`
  width: 100%;
  height: 100%;
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

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const StyledLeftTopIcon = styled.span`
  color: #736AE4;
  position: absolute;
  top: 18px;
  left: 18px;
`
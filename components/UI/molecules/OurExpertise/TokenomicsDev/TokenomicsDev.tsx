import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

const stages = [
  "Conducting competitors' analysis on tokenomics. ",
  "Visual mapping of the ecosystem and casual loops of the projects. ",
  "Transforming visual map into code to simulate the economy. ",
  "Adjusting economy through different models and methods. ",
  "Final parameter sweeps with 'What if'  - questions. ",
  "Final report as a presentation with Plotly dashboards, graphics and conclusions."
]

export const TokenomicsDev = () => {
  return (
    <div>
      <StyledWrapper>
        <StyledTitle>
          Tokenomics is the <span className='orange'>internal economics</span> of the project.
        </StyledTitle>
        <StyledText>
          “The task of any tokenomics is to change the behavior of people under a certain system limitation, so that users do exactly what, according to tokenomics, is necessary in the interests of the project and its goals”
        </StyledText>
        <StyledSubtitle>
          Technologies used in the development of the tokenomics model:
        </StyledSubtitle>
        <StyledChart>
          <Image src='/images/char.png' width='555px' height='611px' />
        </StyledChart>
        <StyledFlex>
          <StyledIcon>
            <img src='/icons/cadCad.svg' className='icon' />
            <p className='text'>cadCAD</p>
          </StyledIcon>
          <StyledIcon>
            <img src='/icons/tokenspice.svg' className='icon' />
            <p className='text'>tokenSPICE</p>
          </StyledIcon>
          <StyledIcon>
            <img src='/icons/Machinations.svg' className='icon' />
            <p className='text'>Machinations</p>
          </StyledIcon>
        </StyledFlex>
      </StyledWrapper>

      <StyledTitle>Stages of tokenomics development</StyledTitle>
      <StyledGrayText>
        Development of project tokenomics based on complete information about the project.
      </StyledGrayText>

      <StyledCardsGrid>
        {stages.map((item, idx) => (
          <StyledCard key={idx}>
            <div className='number'>{idx + 1}</div>
            <p className='text'>{item}</p>
          </StyledCard>
        ))}
      </StyledCardsGrid>
    </div>

  )
}

const StyledWrapper = styled.div`
  position: relative;
  background: #1F1F1F;
  border-radius: 4px;
  padding: 66px 88px;

  @media (max-width: 600px) {
    padding: 0;
    background: none;
  }
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 140%;
  color: #FFFFFF;
  width: 567px;
  margin-top: 16px;
  margin-bottom: 32px;

  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 24px;
    width: 100%;
  }

  .orange {
    color: #F0B270;
  }
`

const StyledSubtitle = styled(StyledTitle)`
  font-weight: 700;
  font-size: 30px;
  width: 584px;

  @media (max-width: 600px) {
    font-size: 18px;
    width: 100%;
  }
`

const StyledText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #FFFFFF;
  width: 520px;
  margin-bottom: 105px;
  @media (max-width: 600px) {
    width: 100%;
  }
`

const StyledChart = styled.div`
  position: absolute;
  right: 0;
  top: 10%;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledFlex = styled.div`
  display: flex;
  gap: 18px;
`

const StyledIcon = styled.div`
  width: 161px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #313131;
  border-radius: 4px;
  padding: 16px 30px;

  .text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #FFFFFF;

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  .icon {
    width: 50px;
    @media (max-width: 600px) {
      width: 30px;
    }
  }

  @media (max-width: 600px) {
    width: 114px;
    height: 71px;
  }
`

const StyledGrayText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 148%;
  color: rgba(255, 255, 255, 0.46);
  max-width: 495px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const StyledCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const StyledCard = styled.div`
  width: 413px;
  height: 116px;
  display: grid;
  grid-template-columns: 0.1fr 0.9fr;
  align-items: center;
  justify-content: center;
  background: #1F1F1F;
  border-radius: 4px;
  gap: 28px;
  padding: 0 30px;

  @media (max-width: 600px) {
   width: 100%;
  }

  .number {
    width: 39px;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #736AE4;
    border-radius: 4px;
    color: #FFFFFF;
  }

  .text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 155.5%;
    color: #FFFFFF;
  }


`


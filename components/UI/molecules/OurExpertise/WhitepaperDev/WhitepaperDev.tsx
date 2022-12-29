import styled from '@emotion/styled'
import React from 'react'

const cards = [
  "Introduction to the project, identification of the problem, brief description of the current market situation.",
  "Theoretical part: basic terms and explanation of key algorithms.",
  "Overview of the proposed concept from the technical side.",
  "Statement of possible problems, as well as ways to solve them.",
  "Examples of described technologies used in other areas.",
  "Conclusion with conclusions, short summary."
]

export const WhitepaperDev = () => {
  return (
    <div>
      <StyledFlex>
        <p className={'title'}>White Paper is a document with actual and technical indicators of a product.</p>
        <p className={'subtitle'}>
          The task of White paper is
          <span className={'orange'}> to provide readers with important information </span>
          about a product or technology,
          <span className={'orange'}> to influence the decision </span>
          that those who read the text will make,
          and
          <span className={'orange'}> to establish interaction </span>
          with existing or potential customers of the company.
        </p>
      </StyledFlex>

      <StyledAspects>
        <p className={'title'}>The document includes the following aspects:</p>
        <div className={'cards_grid'}>
          {cards.map((item, idx) => (
            <div className={'card'} key={idx}>
              <div className={'number'}>{idx + 1}</div>
              <span className={'text'}>{item}</span>
            </div>
          ))}
        </div>
      </StyledAspects>

    </div>
  )
}

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 62px;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 16px;
  }

  .title {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 145.5%;
    color: #F0B270;
    max-width: 500px;
  }

  .subtitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 155.5%;
    text-align: right;
    color: #FFFFFF;
    max-width: 710px;

    @media (max-width: 600px) {
      text-align: left;
    }

    .orange {
      color: #F0B270;
    }
  }

  .aspects_title {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`

const StyledAspects = styled.div`
  .title {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 48px;
  }

  .cards_grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 62px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  .card {
    width: 518px;
    height: 145px;
    background: #1F1F1F;
    border-radius: 4px;
    padding: 30px;

    display: grid;
    grid-template-columns: 0.1fr 0.9fr;
    gap: 30px;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
      width: 100%;
    }

    .number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: #736AE4;
      border-radius: 4px;
    }

    .text {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 155.5%;
      color: #FFFFFF;

      @media (max-width: 600px) {
        font-size: 14px;
      }
    }

  }

`

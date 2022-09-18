import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

const NewsData = [
  {
    image: '/images/digital bridge_astana hub 1.png',
    theme: 'events',
    title: 'Tech Culture is the partner of the international forum Digital Bridge!',
    contentShort: 'On Sep 28-29 Digital Bridge gathers experts and companies from digital technologies, business and IT spheres in Nur-Sultan.',
    contentFull: 'Tech Culture will present Metabank, a bank in Metaverse with financial services available through VR experience. We will also share our experience in blockchain projects development and discuss blockchain potential for Central Asian region and abroad.'
  },
  {
    image: '/images/digital bridge_astana hub 2.png',
    theme: 'Mass Media about us',
    title: 'Web 3.0, metaverse и NFT: What’s common?',
    contentShort: 'Arthur Sundetov, Tech Culture CTO, explains the origin of Web 3.0 and the relative similarities of Internet development generations.',
    contentFull: 'Tech Culture will present Metabank, a bank in Metaverse with financial services available through VR experience. We will also share our experience in blockchain projects development and discuss blockchain potential for Central Asian region and abroad.'
  },
  {
    image: '/images/digital bridge_astana hub 3.png',
    theme: 'Cooperation',
    title: 'Tech Culture signed a memorandum with the International University of Information Technologies (IITU)',
    contentShort: 'Collaboration gives IITU students internships opportunities and direct practice on blockchain projects development.',
    contentFull: 'Tech Culture will present Metabank, a bank in Metaverse with financial services available through VR experience. We will also share our experience in blockchain projects development and discuss blockchain potential for Central Asian region and abroad.'
  },
]

export const News = () => {
  return (
    <StyledWrapper>
      <StyledFlexArea>
        <StyledTitle>latest news</StyledTitle>
        <div>
          <StyledPaginationButton>
            <Image src='/icons/arrow left.svg' width='24px' height='24px' />
          </StyledPaginationButton>
          <StyledPaginationButton>
            <Image src='/icons/arrow right.svg' width='24px' height='24px' />
          </StyledPaginationButton>
        </div>
      </StyledFlexArea>

      <StyledGridArea>
        {NewsData.map((item, idx) => (
          <StyledNewCard key={idx}>
            <div className='image'>
              <img src={item.image} width='100%' height='100%' />
            </div>
            <p className='theme'>{item.theme}</p>
            <StyledCardTitle>{item.title}</StyledCardTitle>
            <p className='text'>{item.contentShort}</p>
            <StyledActionButton>learn more</StyledActionButton>
          </StyledNewCard>
        ))}

      </StyledGridArea>

    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 80px;
  @media (max-width: 800px) {
    padding: 24px;
  }
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 100%;
  text-transform: capitalize;
  color: #FFFFFF;
`

const StyledFlexArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }
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

const StyledGridArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const StyledNewCard = styled.div`
  width: 100%;
  max-width: 411px;
  min-height: 669px;
  padding: 28px;

  display: flex;
  flex-direction: column;

  background: #171717;
  border-radius: 4px;

  .image {
    width: 100%;
    height: 50%;
    border-radius: 4px;
  }

  .theme {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    color: #F0B270;
    mix-blend-mode: normal;
  }

  .text {
    ont-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.62);
    mix-blend-mode: luminosity;
  }

  .content-short {

  }

  .content-more {

  }
`

const StyledCardTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-decoration-line: underline;

  color: #FFFFFF;
`

const StyledActionButton = styled(StyledCardTitle)`
  text-transform: capitalize;
  cursor: pointer;
  margin-top: auto;
`
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames'

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
    contentFull: 'Tech Culture will present Metabank, a bank in Metaverse with financial services available through VR experience. We will also share our experience in blockchain projects development and discuss blockchain potential for Central Asian region and abroad.',
    link: "https://5q.kz/posts/chto-obshhego-u-web-3-0-metaverse-i-nft"
  },
  {
    image: '/images/digital bridge_astana hub 3.png',
    theme: 'Cooperation',
    title: 'Tech Culture signed a memorandum with the International University of Information Technologies (IITU)',
    contentShort: 'Collaboration gives IITU students internships opportunities and direct practice on blockchain projects development.',
    contentFull: 'Tech Culture will present Metabank, a bank in Metaverse with financial services available through VR experience. We will also share our experience in blockchain projects development and discuss blockchain potential for Central Asian region and abroad.'
  },
  {
    image: '/images/digital bridge_astana hub 4.png',
    theme: 'Events',
    title: 'Tech Culture and Astana Hub hosted Blockchain Summer Conference',
    contentShort: 'Blockchain Summer Conference gathered blockchain experts, developers, startup founders and others interested in blockchain related ...',
    contentFull: 'Blockchain Summer Conference gathered blockchain experts, developers, startup founders and others interested in blockchain related topics in Nur-Sultan on Aug 17, 2022. Participants discussed crypto investments, blockchain projects’ tokenomics, development of crypto startup companies, NFT marketplaces and other Web 3.0 trends. Overall more than 150 people participated in the event.'
  },
  {
    image: '/images/digital bridge_astana hub 5.png',
    theme: 'Mass Media about us',
    title: 'What is Web 3.0 and how it’s different from the state of the current Internet',
    contentShort: 'About key characteristics of Web 3.0 and brief summary of Blockchain Summer Conference.',
    contentFull: 'Tech Culture will present Metabank, a bank in Metaverse with financial services available through VR experience. We will also share our experience in blockchain projects development and discuss blockchain potential for Central Asian region and abroad.',
    link: "https://bluescreen.kz/news/11627/chto-takoie-web-30-i-chiem-otlichaietsia-ot-intiernieta-sieichas"
  }
]

export const News = () => {
  const { t } = useTranslation()
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <StyledWrapper>
      <StyledFlexArea>
        <StyledTitle>{t('home.news.title')}</StyledTitle>
        <div>
          <StyledPaginationButton id="swiper-back">
            <Image src='/icons/arrow left.svg' width='24px' height='24px' />
          </StyledPaginationButton>
          <StyledPaginationButton id="swiper-forward">
            <Image src='/icons/arrow right.svg' width='24px' height='24px' />
          </StyledPaginationButton>
        </div>
      </StyledFlexArea>

      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        slidesPerGroup={isMobile ? 1 : 3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: false
        }}

        navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {NewsData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <StyledNewCard>
              <div className='image'>
                <img src={item.image} width='100%' height='100%' />
              </div>
              <p className='theme'>{item.theme}</p>
              <StyledCardTitle className={classNames(`${item.link && 'link'}`)}>{item.title}</StyledCardTitle>
              <p className='text'>{item.contentShort}</p>
              {item.link && <StyledActionButton><a href={item.link}>learn more</a></StyledActionButton>}
            </StyledNewCard>
          </SwiperSlide>
        ))}
        {!isMobile &&
          <SwiperSlide>
            <StyledNewCard>
              <div className='image'>
                <img src={NewsData[0].image} width='100%' height='100%' />
              </div>
              <p className='theme'>{NewsData[0].theme}</p>
              <StyledCardTitle>{NewsData[0].title}</StyledCardTitle>
              <p className='text'>{NewsData[0].contentShort}</p>
              {NewsData[0].link && <StyledActionButton><a href={NewsData[0].link}>learn more</a></StyledActionButton>}
            </StyledNewCard>
          </SwiperSlide>
        }
      </Swiper>

    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 80px;
  max-width: 1400px;
  margin-inline: auto;
  width: 100%;
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

const StyledNewCard = styled.div`
  flex: 0 0 100%;
  max-width: 411px;
  min-height: 669px;
  padding: 28px;

  display: flex;
  flex-direction: column;

  background: #171717;
  border-radius: 4px;

  text-align: start;

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
    margin-bottom: 0;
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

`

const StyledCardTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  cursor: pointer;
  color: #FFFFFF;

  &.link {
    text-decoration-line: underline;
  }
`

const StyledActionButton = styled(StyledCardTitle)`
  text-transform: capitalize;
  cursor: pointer;
  margin-top: auto;
  text-decoration-line: underline;
`
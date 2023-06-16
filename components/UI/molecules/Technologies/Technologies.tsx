import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react'
import {
    arrowLeftIcon,
    arrowRightIcon,
    jvscrptIcon,
    kotlin1Icon, reactIcon, //phpIcon,
    pythonIcon,
    goIcon,
    //rustIcon,
    solidityIcon, swift1Icon,
    tsIcon
} from "@public/icons";

const technologies = [
    solidityIcon,
    tsIcon,
    goIcon,
    //rustIcon,
    jvscrptIcon,
    pythonIcon,
    kotlin1Icon,
    swift1Icon,
    reactIcon
    //phpIcon,
]

export const Technologies: FC = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <div>
      <StyledTitle>Technologies:</StyledTitle>

      <StyledSwiperArea>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: false
          }}
          navigation={{ nextEl: "#swiper-forward2", prevEl: "#swiper-back2" }}
          modules={[Navigation]}
          className="mySwiper"
          style={{ maxWidth: '100vw' }}
        >
          {technologies.map((tech, idx) => (
            <SwiperSlide key={idx}>
              <StyledTechnologiesCard key={idx}>
                <Image src={tech} width={'64px'} height={'64px'} alt={`image${idx}`}/>
              </StyledTechnologiesCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledSwiperArea>

      {
        !isMobile &&
        <StyledGridItemTechnologies>
          {technologies.map((tech, idx) => (
            <StyledTechnologiesCard key={idx}>
              <Image src={tech} width={'64px'} height={'64px'} alt={`image${idx}`}/>
            </StyledTechnologiesCard>
          ))}
        </StyledGridItemTechnologies>
      }

      <StyledPagination>
        <StyledPaginationButton id={"swiper-back2"}>
          <Image src={arrowLeftIcon} width={'24px'} height={'24px'} alt={arrowLeftIcon}/>
        </StyledPaginationButton>
        <StyledPaginationButton id={"swiper-forward2"}>
          <Image src={arrowRightIcon} width={'24px'} height={'24px'} alt={arrowRightIcon}/>
        </StyledPaginationButton>
      </StyledPagination>
    </div>
  )
}

const StyledGridItemTechnologies = styled.div`
  display: grid;
  grid-template-columns: 89px 89px 89px 89px;
  gap: 56px;

  @media (max-width: 600px) {
    display: flex;
    gap: 32px;
    align-items: center;
    list-style: none;
    max-width: 400px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      background: transparent; /* make scrollbar transparent */
      -webkit-appearance: none;
      width: 0;
      height: 0;
    }
  }
`

const StyledTechnologiesCard = styled.div`
  width: 88px;
  height: 89px;
  background: #1F1F1F;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex: 0 0 88px;
  }
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 137%;
  color: #FFFFFF;
`

const StyledPaginationButton = styled.button`
  width: 40px;
  height: 40px;
  background: #171717;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`

const StyledPagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 601px) {
    display: none;
  }
`

const StyledSwiperArea = styled.div`
  @media (min-width: 601px) {
    display: none;
  }
`

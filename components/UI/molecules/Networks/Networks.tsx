import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { FC, useRef } from 'react'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react'
import {
    arbitrumIcon, arrowLeftIcon, arrowRightIcon,
    atomIcon,
    avalancheIcon, binanceSCIcon,
    bitcoinIcon, cardanoIcon,
    cosmosIcon,
    etheriumIcon,
    fantomIcon,
    polkadotIcon, polygonIcon, solanaIcon,
    tronIcon
} from "@public/icons";

const networks = [
    bitcoinIcon,
    etheriumIcon,
    //cosmosIcon,
    fantomIcon,
    avalancheIcon,
    //polkadotIcon,
    atomIcon,
    tronIcon,
    polygonIcon,
    arbitrumIcon,
    //solanaIcon,
    binanceSCIcon,
    //cardanoIcon,
]

export const Networks: FC = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <StyledTitle>Using such networks:</StyledTitle>
      <StyledSwiperArea>
        <Swiper
          slidesPerView={isMobile ? 3 : 6}
          spaceBetween={30}
          slidesPerGroup={isMobile ? 3 : 6}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: false
          }}

          navigation={{ nextEl: "#swiper-forward1", prevEl: "#swiper-back1" }}
          modules={[Navigation]}
          className={"mySwiper"}
          style={{ maxWidth: '100vw' }}
        >
          {networks.map((icon, idx) => (
            <SwiperSlide key={idx} style={{marginInline: '30px'}}>
              <StyledNetworksCard>
                <Image src={icon} width={'120px'} height={'52px'} alt={`image${idx}`} objectFit={'contain'}/>
              </StyledNetworksCard>
            </SwiperSlide>
          ))}
          {isMobile &&
            <>
              <SwiperSlide style={{marginInline: '30px'}}>
                <StyledNetworksCard>
                  <Image src={networks[0]} width={'120px'} height={'52px'} alt={'bitcoinIcon'} objectFit={'contain'}/>
                </StyledNetworksCard>
              </SwiperSlide>
            </>
          }
        </Swiper>
      </StyledSwiperArea>

      <StyledGridItemNetworks ref={listRef}>
        {networks.map((icon, idx) => (
          <StyledNetworksCard key={icon + idx} >
            <Image src={icon} width={'120px'} height={'52px'} alt={`image${idx}`} objectFit={'contain'}/>
          </StyledNetworksCard>
        ))}
      </StyledGridItemNetworks>

      <StyledPagination>
        <StyledPaginationButton id={'swiper-back1'}>
          <Image src={arrowLeftIcon} width={'24px'} height={'24px'} alt={arrowLeftIcon}/>
        </StyledPaginationButton>
        <StyledPaginationButton id={'swiper-forward1'}>
          <Image src={arrowRightIcon} width={'24px'} height={'24px'} alt={arrowRightIcon}/>
        </StyledPaginationButton>
      </StyledPagination>
    </div>
  )
}

const StyledGridItemNetworks = styled.div`
  display: grid;
  grid-template-columns: 154px 154px 154px;
  gap: 30px;
  
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledNetworksCard = styled.div`
  width: 154px;
  height: 64.13px;
  background: #171717;
  border-radius: 2px;
  padding: 21px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex: 0 0 154px;
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

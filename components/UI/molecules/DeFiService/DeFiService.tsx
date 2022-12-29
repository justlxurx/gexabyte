import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { FC} from 'react'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  aaveIcon,
  arrowLeftIcon,
  arrowRightIcon,
  balancerIcon,
  compoundIcon,
  infuraIcon,
  metaMaskIcon,
  oneInchIcon,
  pancakesWapIcon,
  quicknodeIcon,
  raydiumIcon,
  trustWalletIcon,
  uniswapIcon,
  venusIcon
} from "@public/icons";


const DeFiTechs = [
  { title: 'compund', icon: compoundIcon },
  { title: 'aave', icon: aaveIcon },
  { title: 'metamask', icon: metaMaskIcon },
  { title: 'uniswap', icon: uniswapIcon },
  { title: 'raydium', icon: raydiumIcon },
  { title: 'pancakeswap', icon: pancakesWapIcon },
  { title: 'trust wallet', icon: trustWalletIcon },
  { title: '1inch ', icon: oneInchIcon },
  { title: 'venus', icon: venusIcon },
  { title: 'infura', icon: infuraIcon },
  { title: 'quicknode', icon: quicknodeIcon },
  { title: 'balancer', icon: balancerIcon },
]

export const DeFiService: FC = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <StyledWrapper>
      <StyledFlexArea>
        <StyledTitle>DeFi service we are working with</StyledTitle>
        <StyledPagination>
          <StyledPaginationButton id={"swiper-back"}>
            <Image src={arrowLeftIcon} width={'24px'} height={'24px'} alt={'arrowLeftIcon'}/>
          </StyledPaginationButton>
          <StyledPaginationButton id="swiper-forward">
            <Image src={arrowRightIcon} width={'24px'} height={'24px'} alt={'arrowRightIcon'}/>
          </StyledPaginationButton>
        </StyledPagination>
      </StyledFlexArea>

      <Swiper
        slidesPerView={isMobile ? 3 : 6}
        spaceBetween={30}
        slidesPerGroup={isMobile ? 3 : 6}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: false
        }}

        navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
        modules={[Navigation]}
        className={"mySwiper"}
      >
        {DeFiTechs.map((item, idx) => (
          <SwiperSlide key={`${item}${idx}`}>
            <StyledCard>
              <StyledIconArea>
                <Image src={item.icon} width={'74px'} height={'74px'} className={'icon'} alt={item.title}/>
              </StyledIconArea>
              <StyledCardText>{item.title}</StyledCardText>
            </StyledCard>
          </SwiperSlide>
        ))}
      </Swiper>

      <StyledPaginationMobile>
        <StyledPaginationButton id={"swiper-back"}>
          <Image src={arrowLeftIcon} width={'24px'} height={'24px'}  alt={'arrowLeftIcon'}/>
        </StyledPaginationButton>
        <StyledPaginationButton id={"swiper-forward"}>
          <Image src={arrowRightIcon} width={'24px'} height={'24px'} alt={'arrowRightIcon'}/>
        </StyledPaginationButton>
      </StyledPaginationMobile>

    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 76px;
  margin-bottom: 53px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 117.5%;
  color: #FFFFFF;
  width: 475px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`

const StyledCard = styled.div`
  width: 196px;
  height: 177px;
  background: #1F1F1F;
  border-radius: 7px;
  flex: 0 0 196px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 121px;
    height: 108.72px;
    flex: 0 0 121px;
  }
`

const StyledIconArea = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;

  @media (max-width: 600px) {
    width: 64px;
    height: 64px;
  }
`

const StyledCardText = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 110%;
  text-transform: uppercase;
  color: #F0B270;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`

const StyledFlexArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 600px) {
    margin-top: 20px;
    justify-content: space-between;
    display: none;
  }
`

const StyledPaginationMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 600px) {
    margin-top: 20px;
    justify-content: space-between;
  }

  @media (min-width: 601px) {
    display: none;
  }
`

import React from 'react';
import {useMediaQuery} from "@mui/material";
import styled from "@emotion/styled";
import {arrowLeftIcon, arrowRightIcon} from "@public/icons"
import Image from "next/image"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";


const partners = [
    {
        title: "Qamalladin University",
        img: "/images/partners/qamalladin.svg"
    },
    {
        title: "GMT LEGAL",
        img: "/images/partners/gmt.svg"
    },
    {
        title: "EVA",
        img: "/images/partners/eva.svg"
    },
    {
        title: "Midas Solution",
        img: "/images/partners/midas.svg"
    },
    {
        title: "MetaLamp",
        img: "/images/partners/metalamp.svg"
    },
    {
        title: "Infinity Technologies",
        img: "/images/partners/infinity tech.svg"
    },
    {
        title: "Blockchain Center",
        img: "/images/partners/blockchain center.svg"
    },
    {
        title: "ALMA University",
        img: "/images/partners/alma.svg"
    },
    {
        title: "SDU",
        img: "/images/partners/sdu.svg"
    },
    {
        title: "IITU",
        img: "/images/partners/iitu.svg"
    },
    {
        title: "qazdev",
        img: "/images/partners/qazdev.svg"
    },
    {
        title: "hexens",
        img: "/images/partners/hexens.svg"
    },
]

const Partners = () => {
    const isMobileScreen = useMediaQuery('(max-width:768px)');
    const isLaptopScreen = useMediaQuery('(max-width:1024px)');

    const setSliderAmount = () => {
        if(isMobileScreen) return 2;
        else if(isLaptopScreen) return 4;
        return 6;
    }

    return (
        <StyledWrapper>
            <WrapperTitleControllers>
                <StyledTitle>
                    Partners
                </StyledTitle>
                <StyledControllers>
                    <StyledController id={"prevControl"}>
                        <Image src={arrowLeftIcon} width={40} height={40}/>
                    </StyledController>
                    <StyledController id={"nextControl"}>
                        <Image src={arrowRightIcon} width={40} height={40}/>
                    </StyledController>
                </StyledControllers>
            </WrapperTitleControllers>

            <Swiper slidesPerView={setSliderAmount()}
                    spaceBetween={20}
                    slidesPerGroup={setSliderAmount()}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: false
                    }}

                    navigation={{ nextEl: "#nextControl", prevEl: "#prevControl" }}
                    modules={[Navigation]}
                    className={"mySwiper"}>
                {partners.map((partner) => (
                    <SwiperSlide key={partner.title}>
                        <ImageWrapper><Image src={partner.img} width={150} height={50}/></ImageWrapper>
                    </SwiperSlide>
                ))}
            </Swiper>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  padding: 30px 96px;
  
  @media(max-width: 768px){
    padding-inline: 16px;
  }
`

const WrapperTitleControllers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 110%;
  margin: 0;
`

const StyledControllers = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`

const StyledController = styled.button`
  width: 40px;
  height: 40px;
  background: #171717;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`

const ImageWrapper = styled.div`
  padding: 15px;
  border-radius: 5px;
  background: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Partners;
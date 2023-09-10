import React from 'react';
import {useMediaQuery} from "@mui/material";
import styled from "@emotion/styled";
import {arrowLeftIcon, arrowRightIcon} from "@public/icons"
import Image from "next/image"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Link from "next/link";
import {useTranslation} from "react-i18next";


const partners = [
    {
        title: "qazdev",
        img: "/images/partners/qazdev.svg",
        href: "https://qazdev.team/"
    },
    {
        title: "hexens",
        img: "/images/partners/hexens.svg",
        href: "https://hexens.io/"
    },
    {
        title: "Blockchain Center",
        img: "/images/partners/blockchain center.svg",
        href: "https://taplink.cc/centerofblockchain"
    },
    {
        title: "GMT LEGAL",
        img: "/images/partners/gmt.svg",
        href: "https://gmtlegal.com/"
    },
    {
        title: "EVA",
        img: "/images/partners/eva.svg",
        href: "https://evacodes.com/"
    },
    {
        title: "Midas Solution",
        img: "/images/partners/midas.svg",
        href: "https://midas-solutions.net/"
    },
    {
        title: "MetaLamp",
        img: "/images/partners/metalamp.svg",
        href: "https://www.metalamp.ru/"
    },
    {
        title: "Infinity Technologies",
        img: "/images/partners/infinity tech.svg",
        href: "https://infinitytechnologies.ch/"
    },
    {
        title: "ColdStack",
        img: "/images/partners/cold stack.svg",
        href: "https://coldstack.io/"
    },
    {
        title: "Crypton &Studio",
        img: "/images/partners/crypton studio.svg",
        href: "https://crypton.studio/en"
    },
    {
        title: "Qamalladin University",
        img: "/images/partners/qamalladin.svg",
        href: "https://qamalladin.university/"
    },
    {
        title: "ALMA University",
        img: "/images/partners/alma.svg",
        href: "https://www.almau.edu.kz/"
    },
    {
        title: "SDU",
        img: "/images/partners/sdu.svg",
        href: "https://sdu.edu.kz/"
    },
    {
        title: "IITU",
        img: "/images/partners/iitu.svg",
        href: "https://iitu.edu.kz/en/"
    }
]

const Partners = () => {
    const {t, i18n} = useTranslation()

    return (
        <StyledWrapper>
            <WrapperTitleControllers>
                <StyledTitle className={i18n.language === 'en' ? '' : 'geometria'}>
                    {t('home.ourPartners')}
                </StyledTitle>
                {/*<StyledControllers>*/}
                {/*    <StyledController id={"prevControl"}>*/}
                {/*        <Image src={arrowLeftIcon} width={40} height={40}/>*/}
                {/*    </StyledController>*/}
                {/*    <StyledController id={"nextControl"}>*/}
                {/*        <Image src={arrowRightIcon} width={40} height={40}/>*/}
                {/*    </StyledController>*/}
                {/*</StyledControllers>*/}
            </WrapperTitleControllers>
            <MarqueeWrapper>
                <Marquee>
                    <MarqueeInner>
                        {partners.map((partner) => (
                            <Link href={partner.href} target={"_blank"} key={partner.title} passHref>
                                <a target={"_blank"}>
                                    <ImageWrapper><Image src={partner.img} width={150}
                                                         height={60}/></ImageWrapper>
                                </a>
                            </Link>
                        ))}
                    </MarqueeInner>
                    <MarqueeInner>
                        {partners.map((partner) => (
                            <Link href={partner.href} target={"_blank"} key={partner.title}>
                                <a target={"_blank"}>
                                    <ImageWrapper><Image src={partner.img} width={150}
                                                         height={60}/></ImageWrapper>
                                </a>
                            </Link>
                        ))}
                    </MarqueeInner>
                </Marquee>
            </MarqueeWrapper>
            {/*<Swiper slidesPerView={setSliderAmount()}*/}
            {/*        spaceBetween={20}*/}
            {/*        slidesPerGroup={setSliderAmount()}*/}
            {/*        loop={true}*/}
            {/*        loopFillGroupWithBlank={true}*/}
            {/*        pagination={{*/}
            {/*            clickable: false*/}
            {/*        }}*/}

            {/*        navigation={{ nextEl: "#nextControl", prevEl: "#prevControl" }}*/}
            {/*        modules={[Navigation]}*/}
            {/*        className={"mySwiper"}>*/}
            {/*    {partners.map((partner) => (*/}
            {/*        <SwiperSlide key={partner.title}>*/}
            {/*            <ImageWrapper><Image src={partner.img} width={150} height={50}/></ImageWrapper>*/}
            {/*        </SwiperSlide>*/}
            {/*    ))}*/}
            {/*</Swiper>*/}
        </StyledWrapper>
    );
};

const MarqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

const Marquee = styled.div`
  display: flex;
  width: 5400px;
  animation: marquee 15s linear infinite;
  
  @keyframes marquee{
    from{
      translate: 0;
    }
    to{
      translate: -2700px;
    }
  }
`

const MarqueeInner = styled.div`
  display: flex;
  width: 2700px;
  align-items: center;
  justify-content: space-around;
`



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
  
  &.geometria{
    font-family: 'Geometria', sans-serif;
  }
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
  width: 180px;
  padding: 15px;
  border-radius: 5px;
  background: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default Partners;
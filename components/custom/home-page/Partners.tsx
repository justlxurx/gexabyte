import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const partners = [
  {
    title: "qazdev",
    img: "/images/partners/qazdev.svg",
    href: "https://qazdev.team/",
  },
  {
    title: "hexens",
    img: "/images/partners/hexens.svg",
    href: "https://hexens.io/",
  },
  {
    title: "Blockchain Center",
    img: "/images/partners/blockchain center.svg",
    href: "https://taplink.cc/centerofblockchain",
  },
  {
    title: "GMT LEGAL",
    img: "/images/partners/gmt.svg",
    href: "https://gmtlegal.com/",
  },
  {
    title: "EVA",
    img: "/images/partners/eva.svg",
    href: "https://evacodes.com/",
  },
  {
    title: "Midas Solution",
    img: "/images/partners/midas.svg",
    href: "https://midas-solutions.net/",
  },
  {
    title: "MetaLamp",
    img: "/images/partners/metalamp.svg",
    href: "https://www.metalamp.ru/",
  },
  {
    title: "Petabox",
    img: "/images/partners/petabox.svg",
    href: "https://petabox.io/",
  },

  {
    title: "IITU",
    img: "/images/partners/iitu.svg",
    href: "https://iitu.edu.kz/en/",
  },
  {
    title: "Qamalladin University",
    img: "/images/partners/qamalladin.svg",
    href: "https://qamalladin.university/",
  },
  {
    title: "ALMA University",
    img: "/images/partners/alma.svg",
    href: "https://www.almau.edu.kz/",
  },
  {
    title: "SDU",
    img: "/images/partners/sdu.svg",
    href: "https://sdu.edu.kz/",
  },
  {
    title: "Infinity Technologies",
    img: "/images/partners/infinity tech.svg",
    href: "https://infinitytechnologies.ch/",
  },
  {
    title: "ColdStack",
    img: "/images/partners/cold stack.svg",
    href: "https://coldstack.io/",
  },
  {
    title: "Crypton &Studio",
    img: "/images/partners/crypton studio.svg",
    href: "https://crypton.studio/en",
  },
];

const Partners = () => {
  const { t, i18n } = useTranslation();

  return (
    <StyledWrapper id={"partner-block"}>
      <WrapperTitleControllers>
        <StyledTitle className={i18n.language === "en" ? "" : "geometria"}>
          {t("home.ourPartners")}
        </StyledTitle>
      </WrapperTitleControllers>
      <Grid container justifyContent={"center"} rowGap={"46px"}>
        {partners.map((partner) => (
          <Grid
            item
            key={partner.title}
            sm={4}
            md={2.4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Link href={partner.href} target={"_blank"}>
              <a
                target={"_blank"}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ImageWrappper>
                  <img
                    src={partner.img}
                    alt="logo"
                    width="100%"
                    height="100%"
                  />
                </ImageWrappper>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 95px 80px;
  background: #1b1a24;
  position: relative;
  &:before {
    content: "";
    background-image: url("/light2.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: right;
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 70%;
  }
  &:after {
    content: "";
    background-image: url("/light.svg");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 70%;
  }

  @media (max-width: 768px) {
    padding: 41px 25px;
    &:before {
      height: 30%;
    }
    &:after {
      height: 30%;
    }
  }
`;

const WrapperTitleControllers = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 78px;
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
  @media (max-width: 568px) {
    margin-bottom: 30px;
  }
`;

const ImageWrappper = styled.div`
  display: flex;
  justify-content: center;
  width: 143px;
  height: 57px;

  @media (max-width: 768px) {
    height: 50px;
    width: 55%;
  }
`;

const StyledTitle = styled.h4`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 55.2px;
  margin: 0;
  &.geometria {
    font-family: "Geometria", sans-serif;
  }
  @media (max-width: 768px) {
    font-size: 48px;
    font-family: "Arial";
    width: 100%;
    justify-content: start;
  }
`;

export default Partners;

import React from "react";
import styled from "@emotion/styled";
import { theme } from "utils/theme";
import { Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

interface FirstBlockLayoutProps {
  title: string;
  subTitle?: string;
  bgAnimationSrc?: string;
}

const TestVideo: React.FC<FirstBlockLayoutProps> = ({ title, subTitle }) => {
  const { t, i18n } = useTranslation();

  const { pathname } = useRouter();

  const [reftp, setReftp] = React.useState<HTMLElement | null>(null);
  const [reftp2, setReftp2] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setReftp(document.getElementById("contact-us"));
      setReftp2(document.getElementById("projects-block"));
    }
  }, [pathname]);

  const handleScroll = () => {
    reftp?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll2 = () => {
    reftp2?.scrollIntoView({ behavior: "auto" });
  };
  return (
    <Container id={"main-block"}>
      <BlockTitle>
        <Title className={i18n.language === "en" ? "" : "geometria"}>
          {title}
        </Title>
        <SubTitle className={i18n.language === "en" ? "" : "nunito"}>
          {subTitle}
        </SubTitle>
      </BlockTitle>
      <ButtonGroup>
        <Button
          onClick={handleScroll}
          sx={{
            padding: "11px 17px",
            bgcolor: "#020210",
            color: "#FFFFFF",
            fontFamily:
              i18n.language === "en" ? "Poppins" : "Arial, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            borderRadius: "12px",
            textTransform: "initial",
            ":hover": { bgcolor: theme.palette.primary.main },
          }}
        >
          {t("button.startCooperation")}
        </Button>
        <Button
          onClick={handleScroll2}
          variant="outlined"
          sx={{
            ":hover": {
              bgcolor: theme.palette.primary.main,
              color: "white",
            },
            padding: "11px 17px",
            color: "black",
            fontFamily:
              i18n.language === "en" ? "Poppins" : "Arial, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            borderRadius: "12px",
            textTransform: "initial",
          }}
        >
          {t("button.seePortfolio")}
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default TestVideo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  justify-content: center;
  position: relative;
  background-image: url("/blue.svg");
  background-position: center;
  gap: 30px;
  height: 661px;
  margin-bottom: 60px;
  &:after {
    content: "";
    background-image: url("/layer1.svg");
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-size: contain;
  }
  &:before {
    content: "";
    background-image: url("/layer2.svg");
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-position-x: right;
    background-size: contain;
  }
  @media (max-width: 1466px) {
    padding: 1rem 3rem;
    height: 60vh;
    overflow: visible;
  }
  @media (max-width: 768px) {
    padding: 25px;
    flex-wrap: nowrap;
    height: 387px;
    gap: 48px;
    margin-bottom: 30px;
    &:after,
    &:before {
      display: none;
    }
  }
`;
const BlockTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    // max-width: 692px;
    gap: 12px;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  z-index: 100;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-family: Arial;
  font-size: 80px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -5px;
  text-align: center;
  color: #020210;
  margin: 0;
  width: 50%;
  @media (max-width: 1366px) {
    font-size: 64px;
    line-height: 110%;
  }
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 32.2px;
    letter-spacing: -1px;
  }

  &.geometria {
    font-family: "Geometria", sans-serif;
  }
`;
const SubTitle = styled.h2<{ color?: string }>`
  font-family: Inter;
  font-size: 22px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -1px;
  text-align: center;
  color: #4a4a53;
  max-width: 387px;
  margin: 0;
  // margin-bottom: 16px;
  @media (max-width: 1366px) {
    font-size: 18px;
    max-width: 70%;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
    letter-spacing: -1px;
    line-height: 25px;
  }

  &.nunito {
    font-family: "Nunito", sans-serif;
  }
`;

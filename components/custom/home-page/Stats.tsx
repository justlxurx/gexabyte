import styled from "@emotion/styled";
import React from "react";
import { useTranslation } from "react-i18next";
import AnimatedNumber from "./AnimatedNumber";

export const Stats = () => {
  const { t, i18n } = useTranslation();

  return (
    <SecondBlock id={"stats-block"}>
      <SecondBlockTitle className={i18n.language === "en" ? "" : "geometria"}>
        {t("home.stats.title1")} <br />
        {t("home.stats.title2")}
      </SecondBlockTitle>

      <StatsWrapper className={i18n.language === "en" ? "" : "geometria"}>
        <StatsOneBlock>
          <StatsNumber>
            <AnimatedNumber value={100} />+
          </StatsNumber>
          <StatsText>{t("home.stats.completedProjects")}</StatsText>
        </StatsOneBlock>

        <StatsOneBlock>
          <StatsNumber>
            <AnimatedNumber value={7} />+
          </StatsNumber>
          <StatsText>{t("home.stats.experience")}</StatsText>
        </StatsOneBlock>

        <StatsOneBlock>
          <StatsNumber>
            <AnimatedNumber value={1} />
            млрд$
          </StatsNumber>
          <StatsText>{t("home.stats.capitalization")}</StatsText>
        </StatsOneBlock>

        <StatsOneBlock>
          <StatsNumber>
            <AnimatedNumber value={1} />
            млн+
          </StatsNumber>
          <StatsText>{t("home.stats.contracts")}</StatsText>
        </StatsOneBlock>
      </StatsWrapper>
    </SecondBlock>
  );
};

const SecondBlock = styled.div`
  display: grid;
  padding: 0 80px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const SecondBlockTitle = styled.div`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: black;
  width: 60%;
  @media (max-width: 1500px) {
    font-size: 42px;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 28px;
    font-family: "Arial";
  }

  &.geometria {
    font-family: "Geometria", sans-serif;
  }
`;

const StatsWrapper = styled.div`
  font-family: "Readex Pro";
  display: flex;
  justify-content: space-between;
  margin-top: 95px;
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 34px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 30px;
  }

  &.geometria {
    font-family: "Geometria", sans-serif;
  }
`;

const StatsOneBlock = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  @media (max-width: 768px) {
    align-items: start;
  }
`;

const StatsNumber = styled.div`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 90px;
  line-height: 100%;
  color: #020210;
  text-align: center;
  @media (max-width: 1500px) {
    font-size: 72px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
const StatsText = styled.div`
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 25.3px;
  color: #020210;
  text-align: center;
  width: 68%;
  @media (max-width: 1500px) {
    font-size: 17px;
    line-height: 18.3px;
  }
  @media (max-width: 768px) {
    text-align: left;
    font-size: 16px;
  }
`;

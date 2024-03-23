import styled from "@emotion/styled";
import { Box, Stack, Typography, Link as MUILink } from "@mui/material";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation();

  const services = useMemo(() => {
    return [
      {
        color: "#120C27",
        bgcolor: "#736AE4",
        title: t("home.help.blockchain.title"),
        description: [
          t("home.help.blockchain.text1"),
          t("home.help.blockchain.text2"),
          t("home.help.blockchain.text3"),
          t("home.help.blockchain.text4"),
          t("home.help.blockchain.text5"),
        ],
        lastText: t("home.help.blockchain.text6"),
        link: "/web3",
      },
      {
        color: "#462905",
        bgcolor: "#F0B270",
        title: t("home.help.tokendesign.title"),
        description: [
          t("home.help.tokendesign.text1"),
          t("home.help.tokendesign.text2"),
          t("home.help.tokendesign.text3"),
          t("home.help.tokendesign.text4"),
          t("home.help.tokendesign.text5"),
        ],
        lastText: t("home.help.tokendesign.text6"),
        link: "/tokendesign",
      },
    ];
  }, [t]);

  return (
    <Stack
      id={"services-block"}
      sx={{
        padding: { md: "0 80px", xs: "0 25px" },
        margin: { md: "130px 0", xs: "64px 0 87px" },
      }}
    >
      <Stack
        direction={"column"}
        sx={{ marginBottom: { xs: "40px", md: "75px" } }}
      >
        <Typography
          variant={"h2"}
          sx={{
            fontSize: {
              xs: "28px",
              md: "48px",
            },
            color: "#020210",
            fontWeight: 700,
            fontFamily:
              i18n.language === "en" ? "Readex Pro" : "Arial, sans-serif",
          }}
        >
          {t("home.help.title1")}
        </Typography>
        <Typography
          variant={"h2"}
          sx={{
            fontSize: {
              xs: "28px",
              md: "48px",
            },
            fontWeight: 700,
            color: "#020210",
            fontFamily:
              i18n.language === "en" ? "Readex Pro" : "Arial, sans-serif",
          }}
        >
          {t("home.help.title2")}
        </Typography>
      </Stack>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "20px", md: "70px" },
        }}
      >
        {services.map((service, idx) => (
          <StyledCard key={idx}>
            <StyledTextArea>
              <h4
                style={{
                  fontFamily:
                    i18n.language === "en" ? "Readex Pro" : "Arial, sans-serif",
                  color: `${service.color}`,
                  backgroundColor: `${service.bgcolor}`,
                }}
              >
                {service.title}
              </h4>
              {/* {service.description} */}
              {service.description.map((text, index) => (
                <p
                  key={index}
                  style={{
                    fontFamily:
                      i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
                    borderBottom: "1px solid black",
                  }}
                >
                  {text}
                  <br /> {/* Добавляем перенос строки между текстами */}
                </p>
              ))}
              <p
                style={{
                  fontFamily:
                    i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
                }}
              >
                {service.lastText}
              </p>
            </StyledTextArea>
          </StyledCard>
        ))}
      </Stack>
    </Stack>
  );
};

export default Services;

const StyledCard = styled.div`
  width: 602px;
  background: #f7f8fa;
  border: 1px solid #eaebef;
  display: flex;
  flex-direction: column;
  padding: 41px 17px;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 25px;
  }
`;

const StyledTextArea = styled.div`
  width: fit-content;
  & h4 {
    font-style: "Arial";
    font-weight: 700;
    font-size: 26px;
    line-height: 118%;
    text-transform: initial;
    border-radius: 23.15px;
    padding: 53px 0px;
    text-align: center;
    margin: 0 0 20px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  & p {
    font-style: "Arial";
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #020210;
    padding-top: 22px;
    margin: 0 26px;
    @media (max-width: 768px) {
      font-size: 10px;
      padding: 12px 0;
      margin: 0;
      line-height: 11.5px;
    }
  }
  @media (max-width: 768px) {
    width: auto;
  }
`;

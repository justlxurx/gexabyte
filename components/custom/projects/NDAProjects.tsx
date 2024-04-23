import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
  useMediaQuery,
  ButtonGroup,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const ImageGrid = [8, 4, 6, 6, 4, 8, 6, 6, 4, 8];

const NDAProjects = () => {
  const { t, i18n } = useTranslation();
  const isMobileScreen = useMediaQuery("(max-width:768px)");

  const content = [
    {
      color: "#366CC9",
      img: "/images/nda1.svg",
      title: t("home.nda.title1"),
      link: "",
      width: "40%",
      img2: "/images/mobile_nda1.svg",
    },
    {
      color: "#0090C6",
      img: "/images/nda2.svg",
      title: t("home.nda.title2"),
      link: "",
      width: "80%",
      img2: "/images/mobile_nda2.svg",
    },
    {
      color: "#334B4A",
      img: "/images/nda3.svg",
      title: t("home.nda.title3"),
      subtitle: t("home.nda.subtitle3"),
      link: "",
      width: "100%",
      img2: "/images/mobile_nda3.svg",
    },
    {
      color: "#557B97",
      img: "/images/nda4.svg",
      title: t("home.nda.title4"),
      subtitle: t("home.nda.subtitle4"),
      link: "",
      width: "100%",
      img2: "/images/mobile_nda4.svg",
    },
    {
      color: "#343D68",
      img: "/images/nda5.svg",
      title: t("home.nda.title5"),
      subtitle: t("home.nda.subtitle5"),
      link: "",
      width: "95%",
      img2: "/images/mobile_nda5.svg",
    },
    {
      color: "#008E9B",
      img: "/images/nda6.svg",
      title: t("home.nda.title6"),
      subtitle: t("home.nda.subtitle6"),
      link: "",
      width: "50%",
      img2: "/images/mobile_nda6.svg",
    },
    {
      color: "#0A0E16",
      img: "/images/nda7.svg",
      title: t("home.nda.title7"),
      subtitle: t("home.nda.subtitle7"),
      link: "",
      width: "90%",
      img2: "/images/mobile_nda7.svg",
    },
    {
      color: "#066E8E",
      img: "/images/nda8.svg",
      title: t("home.nda.title8"),
      subtitle: t("home.nda.subtitle8"),
      link: "",
      width: "90%",
      img2: "/images/mobile_nda8.svg",
    },
    {
      color: "#637C77",
      img: "/images/nda9.svg",
      title: t("home.nda.title9"),
      link: "",
      width: "90%",
      img2: "/images/mobile_nda9.svg",
    },
    {
      color: "#008E9B",
      img: "/images/nda10.svg",
      title: t("home.nda.title10"),
      link: "",
      width: "70%",
      img2: "/images/mobile_nda10.svg",
    },
  ];

  return (
    <Grid
      container
      gridTemplateColumns={"repeat(auto-fill, minmax(700px, 1fr))"}
      spacing={1}
    >
      {isMobileScreen
        ? content.map(({ img, title, subtitle, link, color, img2 }, idx) => (
            <Grid item xs={12} md={12} key={idx} sx={{ padding: "10px 0" }}>
              <Box
                sx={{
                  backgroundColor: color,
                  height: "381px",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "start",
                  gap: "30px",
                }}
              >
                <Stack
                  spacing={1.25}
                  sx={{ width: "100%", padding: "20px 20px 0" }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Arial",
                      fontSize: {
                        md: "24px",
                        lg: "34px",
                      },
                      fontWeight: "700",
                      lineHeight: { xs: "27.6px", md: "39.1px" },
                      color: "white",
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Arial",
                      fontSize: {
                        md: "12px",
                        lg: "14px",
                      },
                      fontWeight: "400",
                      color: "white",
                    }}
                  >
                    {subtitle}
                  </Typography>
                </Stack>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "100%",
                    backgroundImage: `url(${img2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom right",
                    height: "250px",
                    backgroundSize: "contain",
                  }}
                ></div>
              </Box>
            </Grid>
          ))
        : content.map(({ color, img, title, subtitle, link, width }, idx) => (
            <Grid item xs={12} md={ImageGrid[idx]} key={idx}>
              <Box
                sx={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  height: "574px",
                  backgroundPositionY: "70%",
                  backgroundRepeat: "no-repeat",
                  // backgroundColor: color,
                  borderRadius: "10px",
                  padding: "46px 30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <Stack spacing={1.25} sx={{ width: `${width}` }}>
                  <Typography
                    sx={{
                      fontFamily: "Arial",
                      fontSize: {
                        md: "22px",
                        lg: "34px",
                      },
                      fontWeight: "700",
                      lineHeight: "39.1px",
                      color: "white",
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        md: "12px",
                        lg: "14px",
                      },
                      fontFamily: "Arial",
                      fontWeight: "400",
                      color: "white",
                    }}
                  >
                    {subtitle}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
    </Grid>
  );
};

export default NDAProjects;

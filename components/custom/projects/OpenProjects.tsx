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

const projects = {
  mobile: [
    "/images/projects/mobile/rokkmob.svg",
    "/images/ton seed mobile.png",
    "/images/defi mobile.png",
  ],
};

const ImageGrid = [8, 4, 6, 6, 4, 4, 4];

const OpenProjects = () => {
  const { t, i18n } = useTranslation();
  const isMobileScreen = useMediaQuery("(max-width:768px)");

  const content = [
    {
      color: "#1187F2",
      img: "/images/project1.svg",
      title: t("home.projects.title1"),
      subtitle: t("home.projects.subtitle1"),
      link: "",
      width: "40%",
      img2: "/images/mobile_project1.svg",
    },
    {
      color: "#00544F",
      img: "/images/project2.svg",
      title: t("home.projects.title2"),
      subtitle: t("home.projects.subtitle2"),
      link: "",
      width: "90%",
      img2: "/images/mobile_project2.svg",
    },
    {
      color: "#758822",
      img: "/images/project3.svg",
      title: t("home.projects.title3"),
      subtitle: t("home.projects.subtitle3"),
      link: "",
      width: "100%",
      img2: "/images/mobile_project3.svg",
    },
    {
      color: "#04B083",
      img: "/images/project4.svg",
      title: t("home.projects.title4"),
      subtitle: t("home.projects.subtitle4"),
      link: "",
      width: "40%",
      img2: "/images/mobile_project4.svg",
    },
    {
      color: "#291E44",
      img: "/images/project5.svg",
      title: t("home.projects.title5"),
      subtitle: t("home.projects.subtitle5"),
      link: "",
      width: "95%",
      img2: "/images/mobile_project5.svg",
    },
    {
      color: "#AC0EAB",
      img: "/images/project6.svg",
      title: t("home.projects.title6"),
      subtitle: t("home.projects.subtitle6"),
      link: "",
      width: "90%",
      img2: "/images/mobile_project6.svg",
    },
    {
      color: "#1F302D",
      img: "/images/project7.svg",
      title: t("home.projects.title7"),
      subtitle: t("home.projects.subtitle7"),
      link: "",
      width: "90%",
      img2: "/images/mobile_project7.svg",
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
                      lineHeight: "39.1px",
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
                <Button
                  sx={{
                    fontFamily: "Arial",
                    fontWeight: 700,
                    fontSize: {
                      md: "15px",
                      lg: "23px",
                    },
                    color: "white",
                    textTransform: "inherit",
                    display: "flex",
                    gap: "44px",
                  }}
                >
                  {t("button.knowMore")}
                  <img src="/images/right.svg" alt="" />
                </Button>
              </Box>
            </Grid>
          ))}
    </Grid>
  );
};

export default OpenProjects;

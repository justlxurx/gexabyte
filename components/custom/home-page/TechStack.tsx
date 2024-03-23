import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import StackSlider from "./StackSlider";
import { useTranslation } from "react-i18next";

const TechStack = () => {
  const isMobileScreen = useMediaQuery("(max-width:768px)");

  const { t, i18n } = useTranslation();

  return (
    <div className={"stack-bar"} id={"stack-bar"}>
      <Grid
        alignItems={"center"}
        columns={{ xs: 2, md: 12 }}
        justifyContent={"space-between"}
        container
        sx={{ p: 0, m: 0, gap: { xs: "20px", md: "0" } }}
      >
        <Grid
          item
          // xs={1}
          md={2}
          order={1}
          sx={{ display: "flex", flexDirection: { sx: "row", md: "column" } }}
        >
          <Typography
            sx={{
              color: "#4A4A53",
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: 400,
              fontFamily:
                i18n.language === "en" ? "Readex Pro" : "Arial, sans-serif",
              margin: "0",
            }}
          >
            {" "}
            {t("home.ourTechstack1")}
          </Typography>
          <Typography
            sx={{
              color: "#4A4A53",
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: 400,
              fontFamily:
                i18n.language === "en" ? "Readex Pro" : "Arial, sans-serif",
              margin: "0",
            }}
          >
            {t("home.ourTechstack2")}
          </Typography>
        </Grid>
        <Grid item xs={2} md={10} order={isMobileScreen ? 2 : 1}>
          <StackSlider />
        </Grid>
      </Grid>
    </div>
  );
};

export default TechStack;

import { Container, Box, Grid, useMediaQuery, Typography } from "@mui/material";

import ContactUsGradients from "components/UI/molecules/ContactUs/ContactUsGradients";
import ContactUsInfo from "components/UI/molecules/ContactUs/ContactUsInfo";
import React from "react";
import ContactUsForm from "../../UI/molecules/ContactUs/ContactUsForm";
import { useTranslation } from "react-i18next";

const ContactUs: React.FC = () => {
  const isMobileScreen = useMediaQuery("(max-width:768px)");

  const { t, i18n } = useTranslation();
  return (
    <div id={"contact-us"}>
      <Box
        sx={{
          bgcolor: "white",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          p: { xs: "0 25px 80px", md: "0 80px 130px" },
        }}
      >
        <Typography
          sx={{
            width: { xs: "85%", md: "50%" },
            fontSize: { xs: "28px", md: "48px" },
            fontFamily: "Arial",
            fontWeight: "700",
            color: "#020210",
            lineHeight: { xs: "32.2px", md: "55.2px" },
          }}
        >
          {t("contactUsForm.title")}
        </Typography>
        <Grid
          container
          direction={isMobileScreen ? "column" : "row"}
          justifyContent={"center"}
        >
          <Grid item xs sx={{ p: { xs: "30px 0 0", md: "63px 0 0" } }}>
            <ContactUsInfo />
          </Grid>
          <Grid
            item
            xs
            id={"#get-in-touch"}
            sx={{ p: { xs: "0", md: "63px 0 0" } }}
          >
            <ContactUsForm />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ContactUs;

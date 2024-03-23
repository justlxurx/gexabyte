import { Box, Typography, useMediaQuery, Stack } from "@mui/material";
import SocialMedia from "components/custom/SocialMedia";
import { useTranslation } from "react-i18next";
import { socialURL } from "../../../custom/socialURL";

const ContactUsInfo = () => {
  const { t, i18n } = useTranslation();
  const isMobileScreen = useMediaQuery("(max-width:600px)");

  return (
    <div
      style={{
        paddingTop: "20px",
        borderTop: "1px solid #E0E4EA",
      }}
    >
      {isMobileScreen ? (
        <>
          <Box
            sx={{
              position: "absolute",
              top: "105vh",
              height: "100px",
              width: "100%",
              zIndex: -1,
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
            }}
          ></Box>
        </>
      ) : (
        ""
      )}

      <Typography
        sx={{
          color: "#020210",
          fontSize: { xs: "18px", md: "36px" },
          fontWeight: 700,
          fontFamily:
            i18n.language === "en" ? "Readex Pro" : "Arial, sans-serif",
          width: {
            xs: "100%",
            md: "60%",
          },
          textTransform: "capitalize",
          mb: { xs: "20px", md: "28px" },
        }}
      >
        {t("footer.contacts")}
      </Typography>
      <Stack direction={"row"}>
        <Typography
          sx={{
            color: "#020210",
            fontSize: { xs: "12px", md: "16px" },
            fontWeight: 600,
            fontFamily:
              i18n.language === "en" ? "Poppins" : "Arial, sans-serif",
          }}
        >
          {t("contactUsForm.address")}:
        </Typography>
        <a href={socialURL.twoGis}>
          <Typography
            sx={{
              color: "#020210",
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: 400,
              mb: { xs: "20px", md: "32px" },
              fontFamily:
                i18n.language === "en" ? "Poppins" : "Arial, sans-serif",
            }}
          >
            Almaty, Markova 22/37
          </Typography>
        </a>
      </Stack>
      <Stack direction={"row"}>
        <Typography
          sx={{
            color: "#020210",
            fontSize: { xs: "12px", md: "16px" },
            fontWeight: 600,
            fontFamily:
              i18n.language === "en" ? "Poppins" : "Arial, sans-serif",
          }}
        >
          Email:
        </Typography>
        <a href={socialURL.salesDepartment}>
          <Typography
            sx={{
              color: "#020210",
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: 400,
              mb: { xs: "20px", md: "32px" },
              fontFamily:
                i18n.language === "en" ? "Poppins" : "Arial, sans-serif",
            }}
          >
            aa@techculture.tec
          </Typography>
        </a>
      </Stack>
      <Stack direction={"row"}>
        <Typography
          sx={{
            color: "#020210",
            fontSize: { xs: "12px", md: "16px" },
            fontWeight: 600,
            fontFamily:
              i18n.language === "en" ? "Poppins" : "Arial, sans-serif",
          }}
        >
          {t("contactUsForm.time")}
        </Typography>
        <Typography
          sx={{
            color: "#020210",
            fontSize: { xs: "12px", md: "16px" },
            fontWeight: 400,
            mb: { xs: "20px", md: "32px" },
            fontFamily:
              i18n.language === "en" ? "Poppins" : "Arial, sans-serif",
          }}
        >
          {t("contactUsForm.timeValue")}
        </Typography>
      </Stack>
    </div>
  );
};

export default ContactUsInfo;

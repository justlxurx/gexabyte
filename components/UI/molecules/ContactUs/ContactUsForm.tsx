import styled from "@emotion/styled";
import { Button, Grid, TextField, Typography, Stack } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { IContactUsForm } from "types/IContactUsForm";
import { contactUsSchema } from "utils/validations/contactUsSchema";
import styles from "../../../../styles/components/ContactUsForm.module.scss";

const ContactUsForm = () => {
  const { t, i18n } = useTranslation();

  const [services, setServices] = React.useState({
    bd: false,
    bc: false,
    wd: false,
    od: false,
    sd: false,
    vd: false,
  });

  const formik = useFormik<IContactUsForm>({
    initialValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      type: "consulting, developement",
    },
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          "https://techculture.tech/api/contact/us",
          values
        );
        if (res.status === 200) {
          alert("Ваша заявка принята!");
          resetForm();
        }
      } catch (e) {
        alert("Ошибочка... Попробуйте позже");
      }
    },
    validationSchema: contactUsSchema,
    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: false,
  });

  const {
    values: form,
    handleSubmit,
    handleChange,
    errors,
    resetForm,
  } = formik;

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <Typography
          sx={{
            color: "#020210",
            fontSize: {
              xs: "18px",
              md: "36px",
            },
            fontWeight: 700,
            fontFamily:
              i18n.language === "en" ? "Readex Pro" : "Arial, sans-serif",
            mb: "16px",
            paddingTop: { xs: "30px", md: "0" },
          }}
        >
          {t("contactUsForm.formTitle")}
        </Typography>
        <Typography
          sx={{
            color: "#020210",
            fontSize: {
              xs: "12px",
              md: "18px",
            },
            fontWeight: 400,
            fontFamily:
              i18n.language === "en" ? "Readex Pro" : "Arial, sans-serif",
            mb: { xs: "20px", md: "37px" },
          }}
        >
          {t("contactUsForm.title")}. <br /> {t("contactUsForm.formSubTitle")}
        </Typography>
        <StyledInputLabel className={i18n.language === "en" ? "" : "nunito"}>
          {t("contactUsForm.name")}
        </StyledInputLabel>
        <TextField
          id={"bootstrap-input1"}
          placeholder={t("contactUsForm.placeholders.name")}
          value={form.name}
          name={"name"}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.name}
          sx={{
            bgcolor: "#FFFFFF",
            borderRadius: "8px",
            input: {
              color: "#667085",
              fontFamily:
                i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
            },
            mb: !errors.name ? { xs: "16px", md: "24px" } : "0px",
            fontFamily:
              i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
            "::placeholder": {
              fontFamily:
                i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
            },
          }}
        />
        {!!errors.name && (
          <Typography variant={"caption"} color={"red"}>
            {errors.name}
          </Typography>
        )}
        <StyledInputLabel className={i18n.language === "en" ? "" : "nunito"}>
          {t("contactUsForm.email")}
        </StyledInputLabel>
        <TextField
          id={"bootstrap-input2"}
          value={form.email}
          type={"email"}
          name={"email"}
          onChange={handleChange}
          error={!!errors.email}
          fullWidth
          required
          placeholder="Email"
          sx={{
            bgcolor: "#FFFFFF",
            borderRadius: "8px",
            input: {
              color: "#667085",
              fontFamily:
                i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
            },
            mb: !errors.email ? { xs: "16px", md: "24px" } : "0px",
            fontFamily:
              i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
            "::placeholder": {
              fontFamily:
                i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
            },
          }}
        />
        {!!errors.email && (
          <Typography variant={"caption"} color={"red"}>
            {errors.email}
          </Typography>
        )}
        <StyledInputLabel className={i18n.language === "en" ? "" : "nunito"}>
          {t("contactUsForm.company")}
        </StyledInputLabel>
        <TextField
          value={form.company}
          name={"company"}
          onChange={handleChange}
          error={!!errors.company}
          required
          id={"bootstrap-input3"}
          fullWidth
          placeholder={t("contactUsForm.placeholders.company")}
          sx={{
            bgcolor: "#FFFFFF",
            borderRadius: "8px",
            mb: !errors.company ? { xs: "16px", md: "24px" } : "0px",
            input: {
              color: "#667085",
              fontFamily:
                i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
            },
            fontFamily:
              i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
            "::placeholder": {
              fontFamily:
                i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
            },
          }}
        />
        {!!errors.company && (
          <Typography variant={"caption"} color={"red"}>
            {errors.company}
          </Typography>
        )}

        <StyledInputLabel className={i18n.language === "en" ? "" : "nunito"}>
          {t("contactUsForm.services")}
        </StyledInputLabel>
        <Stack
          sx={{ width: "80%", gap: "12px", mb: { xs: "16px", md: "24px" } }}
          direction={"row"}
          flexWrap={"wrap"}
        >
          <Button
            variant={"outlined"}
            onClick={() => setServices((prev) => ({ ...prev, bd: !prev.bd }))}
            sx={{
              padding: "9px 20px",
              borderRadius: "100px",
              borderColor: services.bd ? "#FDE4C1" : "#1211271F",
              color: services.bd ? "#D0600E" : "#2D2D2D",
              fontSize: "12px",
              fontWeight: { xs: 700, md: 700 },
              ":hover": {
                borderColor: services.bd ? "#F0B270" : "#2D2D2D",
              },
              height: "100%",
              fontFamily: "Arial, sans-serif",
              width: "auto",
            }}
          >
            {t("contactUsForm.serviceType.web")}
          </Button>
          <Button
            variant={"outlined"}
            onClick={() => setServices((prev) => ({ ...prev, bc: !prev.bc }))}
            sx={{
              padding: "9px 20px",
              borderRadius: "100px",
              width: "auto",
              height: "100%",
              borderColor: services.bc ? "#FDE4C1" : "#1211271F",
              color: services.bc ? "#D0600E" : "#2D2D2D",
              fontSize: "12px",
              fontWeight: { xs: 700, md: 700 },
              ":hover": {
                borderColor: services.bc ? "#F0B270" : "#2D2D2D",
              },
              fontFamily: "Arial, sans-serif",
            }}
          >
            {t("contactUsForm.serviceType.mobile")}
          </Button>
          <Button
            variant="outlined"
            onClick={() => setServices((prev) => ({ ...prev, wd: !prev.wd }))}
            sx={{
              padding: "9px 20px",
              borderRadius: "100px",
              borderColor: services.wd ? "#FDE4C1" : "#1211271F",
              color: services.wd ? "#D0600E" : "#2D2D2D",
              fontSize: "12px",
              fontWeight: { xs: 700, md: 700 },
              ":hover": {
                borderColor: services.wd ? "#F0B270" : "#2D2D2D",
              },
              width: "auto",
              fontFamily: "Arial, sans-serif",
              fontStyle: "normal",
              height: "100%",
            }}
          >
            {t("contactUsForm.serviceType.design")}
          </Button>
          <Button
            variant="outlined"
            onClick={() => setServices((prev) => ({ ...prev, sd: !prev.sd }))}
            sx={{
              padding: "9px 20px",
              borderRadius: "100px",
              borderColor: services.sd ? "#FDE4C1" : "#1211271F",
              color: services.sd ? "#D0600E" : "#2D2D2D",
              fontSize: "12px",
              fontWeight: { xs: 700, md: 700 },
              ":hover": {
                borderColor: services.sd ? "#F0B270" : "#2D2D2D",
              },
              width: "auto",
              fontFamily: "Arial, sans-serif",
              fontStyle: "normal",
              height: "100%",
            }}
          >
            {t("contactUsForm.serviceType.support")}
          </Button>
          <Button
            variant="outlined"
            onClick={() => setServices((prev) => ({ ...prev, vd: !prev.vd }))}
            sx={{
              padding: "9px 20px",
              borderRadius: "100px",
              borderColor: services.vd ? "#FDE4C1" : "#1211271F",
              color: services.vd ? "#D0600E" : "#2D2D2D",
              fontSize: "12px",
              fontWeight: { xs: 700, md: 700 },
              ":hover": {
                borderColor: services.vd ? "#F0B270" : "#2D2D2D",
              },
              width: "auto",
              fontFamily: "Arial, sans-serif",
              fontStyle: "normal",
              height: "100%",
            }}
          >
            {t("contactUsForm.serviceType.blockchain")}
          </Button>
          <Button
            variant="outlined"
            onClick={() => setServices((prev) => ({ ...prev, od: !prev.od }))}
            sx={{
              padding: "9px 20px",
              borderRadius: "100px",
              borderColor: services.od ? "#FDE4C1" : "#1211271F",
              color: services.od ? "#D0600E" : "#2D2D2D",
              fontSize: "12px",
              fontWeight: { xs: 700, md: 700 },
              ":hover": {
                borderColor: services.od ? "#F0B270" : "#2D2D2D",
              },
              width: "auto",
              fontFamily: "Arial, sans-serif",
              fontStyle: "normal",
              height: "100%",
            }}
          >
            {t("contactUsForm.serviceType.other")}
          </Button>
        </Stack>
        <StyledInputLabel className={i18n.language === "en" ? "" : "nunito"}>
          {t("contactUsForm.budget")}
        </StyledInputLabel>
        <TextField
          id={"bootstrap-input4"}
          value={form.budget}
          name={"info"}
          onChange={handleChange}
          fullWidth
          multiline
          required
          rows={1}
          error={!!errors.budget}
          placeholder={t("contactUsForm.placeholders.budget")}
          inputProps={{
            style: {
              color: "#667085",
              fontFamily:
                i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
            },
          }}
          sx={{
            bgcolor: "#FFFFFF",
            borderRadius: "8px",
            input: {
              color: "#667085",
              fontFamily:
                i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
            },
            fontFamily:
              i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
            "::placeholder": {
              fontFamily:
                i18n.language === "en" ? "Poppins" : "Nunito, sans-serif",
            },
          }}
        />
        {!!errors.budget && (
          <Typography variant={"caption"} color={"red"}>
            {errors.budget}
          </Typography>
        )}
        <Button
          size={"large"}
          type={"submit"}
          sx={{
            width: { xs: "100%", md: "auto" },
            textTransform: "initial",
            padding: "14px 32px",
            borderRadius: "12px",
            bgcolor: "#D0600E",
            my: "0.5rem",
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: 700,
            fontFamily:
              i18n.language === "en" ? "Poppins" : "Arial, sans-serif",
            mt: { xs: "40px", md: "60px" },
            ":hover": {
              bgcolor: "black",
            },
          }}
        >
          {t("button.getStarted")}
        </Button>
      </form>
    </>
  );
};

export default ContactUsForm;

const StyledInputLabel = styled.p`
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  margin-bottom: 8px;
  color: #020210;
  text-transform: capitalize;
  &.nunito {
    font-family: "Nunito", sans-serif;
  }
  @media (max-width: 768px) {
    border-radius: 8px;
    margin-bottom: 6px;
  }
`;

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { theme } from "../../../utils/theme";
import CustomButton from "../CustomButton";
import SocialMedia from "../SocialMedia";
import { burgerIcon, closeIcon, logo2 } from "@public/icons";
import { useTranslation } from "react-i18next";
import LocaleButton from "../home-page/LocaleButton";

const AppBarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useRouter();
  let reftp: HTMLElement | null = null;
  if (typeof window !== "undefined") {
    reftp = document.getElementById("contact-us");
  }

  const { t, i18n } = useTranslation();

  const dropdownContent = useMemo(() => {
    return [
      { title: t("header.technologies"), menu: false, link: "" },
      { title: t("header.partners"), menu: false, link: "#partner-block" },
      { title: t("header.numbers"), menu: false, link: "#stats-block" },
      { title: t("header.services"), menu: false, link: "#services-block" },
      { title: t("header.contacts"), menu: false, link: "#contact-us" },
    ];
  }, [t]);

  const changeMenu = () => {
    setIsOpen((prev) => !prev);
  };

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <AppBar
      // position="sticky"
      sx={{
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        bgcolor: "white",
        padding: "8px 8px",
        backdropFilter: "blur(24px)",
        position: "relative",
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: { xs: 0, md: "0px 4px 8px rgba(0, 0, 0, 0.06)" },
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Link href="/">
            <Image
              src={logo2}
              width={"80px"}
              height={"32px"}
              style={{ cursor: "pointer" }}
              alt={"logoRaw"}
            />
          </Link>
        </Box>
        <IconButton
          size={"large"}
          edge={"end"}
          color={"inherit"}
          aria-label={"menu"}
          sx={{}}
          onClick={changeMenu}
        >
          {isOpen ? (
            <Image
              src={closeIcon}
              width={"32px"}
              height={"32px"}
              alt={"closeIcon"}
            />
          ) : (
            <Image
              src={burgerIcon}
              width={"30px"}
              height={"30px"}
              alt={"burgerIcon"}
            />
          )}
        </IconButton>
      </Toolbar>
      <Drawer
        anchor={"top"}
        open={isOpen}
        onClose={changeMenu}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
            bgcolor: "white",
            padding: "2rem",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            boxShadow: 0,
          },
        }}
        disableScrollLock={true}
      >
        <Toolbar />
        {dropdownContent.map((item, idx) => (
          <Link href={item.link} key={idx}>
            <Typography
              onClick={changeMenu}
              key={idx}
              sx={{
                cursor: "pointer",
                textAlign: "center",
                textTransform: "uppercase",
                m: "12px",
                fontSize: "14px",
                fontWeight: 700,
                color: "#16151E",
                fontFamily:
                  i18n.language === "en" ? "Poppins" : "Arial, sans-serif",
              }}
            >
              {item.title}
            </Typography>
          </Link>
        ))}
        <Stack direction="row" spacing={4} sx={{ m: "38px auto 0px" }}>
          <LocaleButton text="EN" locale="en" />
          <LocaleButton text="RUS" locale="ru" />
          <LocaleButton text="KAZ" locale="kz" />
        </Stack>
      </Drawer>
    </AppBar>
  );
};

export default AppBarMobile;

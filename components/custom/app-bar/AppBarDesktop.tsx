import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import CustomButton from "../CustomButton";
import Dropdown from "../Dropdown";
import logoIcon from "@public/logo2.svg";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import LocaleButton from "../home-page/LocaleButton";

const AppBarDesktop: React.FC = () => {
  const { pathname } = useRouter();
  const [reftp, setReftp] = React.useState<HTMLElement | null>(null);

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

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setReftp(document.getElementById("contact-us"));
    }
  }, [pathname]);

  const handleScroll = () => {
    reftp?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      position={"sticky"}
      sx={{
        width: "fit-content",
        bgcolor: "#FFFFFF",
        padding: "8px 20px",
        borderRadius: "20px",
        m: "auto",
        alignItems: "center",
        border: "1p solid #EAEBEF",
        marginTop: "31px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.06)",
      }}
    >
      <Container disableGutters>
        <Toolbar
          disableGutters
          variant={"dense"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link href={"/"}>
              <Image
                src={logoIcon}
                width={80}
                height={33}
                style={{ cursor: "pointer" }}
                alt={"logo"}
              />
            </Link>

            <Stack
              direction={"row"}
              spacing={1.25}
              fontSize={"16px"}
              sx={{ margin: "0 89px 0 36px" }}
            >
              {dropdownContent.map((i, idx) => (
                <>
                  <Dropdown data={i} key={idx} />
                </>
              ))}
            </Stack>

            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <LocaleButton text="EN" locale="en" />
              <LocaleButton text="RUS" locale="ru" />
              <LocaleButton text="KAZ" locale="kz" />
            </Stack>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarDesktop;

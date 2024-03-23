import styled from "@emotion/styled";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { logoIcon } from "@public/icons";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { asPath } = useRouter();
  const [reftp, setReftp] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setReftp(document.getElementById("contact-us"));
    }
  }, [asPath]);

  const handleScroll = () => {
    reftp?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledFooter>
      <StyledImage>
        <Image src={logoIcon} width={57} height={74} alt={"logo"} />
      </StyledImage>
      <Container
        disableGutters
        maxWidth={"xl"}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "32px", md: "48px" },
          }}
        >
          <StyledTypography
            title={t("footer.technologies")}
            link={"/"}
            font={i18n.language === "en" ? "Poppins" : "Arial, sans-serif"}
          />
          <StyledTypography
            title={t("footer.partners")}
            link={"#partner-block"}
            font={i18n.language === "en" ? "Poppins" : "Nunito, sans-serif"}
          />
          <StyledTypography
            title={t("footer.numbers")}
            link={"#stats-block"}
            font={i18n.language === "en" ? "Poppins" : "Nunito, sans-serif"}
          />
          <StyledTypography
            title={t("footer.services")}
            link={"#services-block"}
            font={i18n.language === "en" ? "Poppins" : "Nunito, sans-serif"}
          />
          <StyledTypography
            title={t("footer.contacts")}
            link={"#contact-us"}
            font={i18n.language === "en" ? "Poppins" : "Nunito, sans-serif"}
          />
        </Stack>
        <SocialMedia />
        <StyledCopyright>
          © {new Date().getFullYear()} TechCulture. {t("footer.rights")}
        </StyledCopyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

interface StyledTypographyProps {
  title: string;
  link: string;
  font: string;
}

const StyledTypography: React.FC<StyledTypographyProps> = ({
  title,
  link,
  font,
}) => (
  <Link href={link}>
    <Typography
      sx={{
        fontSize: "16px",
        textTransform: "capitalize",
        color: "white",
        cursor: "pointer",
        fontFamily: font,
        margin: "0",
      }}
    >
      {title}
    </Typography>
  </Link>
);

const StyledFooter = styled.footer`
  margin-top: auto;
  padding: 50px 0;
  background: #1b1a24;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 54px;
`;
const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const StyledCopyright = styled.span`
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: white;
  opacity: 0.56;
  cursor: pointer;
  text-align: center;
`;

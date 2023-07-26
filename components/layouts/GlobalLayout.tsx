import { Container, ThemeProvider, useMediaQuery, useTheme } from "@mui/material";
import ContactUs from "components/custom/home-page/ContactUs";
import Head from "next/head";
import React from "react"
import AppBarDesktop from "../custom/app-bar/AppBarDesktop"
import AppBarMobile from "../custom/app-bar/AppBarMobile";
import Footer from "../custom/Footer";

interface MainLayoutProps {
  children: React.ReactNode
}

const SEOkeywords = ['tech company', 'blockchain', 'etc'];

const GlobalLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Head>
        <title>TechCompany - Blockchain development & consulting company</title>
        <meta property="og:title" content="TechCompany" key="title" />
        <meta name="description" content="We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="keywords" content={SEOkeywords?.join(",")} />
      </Head>
      {matches ? <AppBarDesktop /> : <AppBarMobile />}
      {/* <Header /> */}
      <Container disableGutters maxWidth='xl' sx={{ minHeight: '80vh' }}>
        {children}
      </Container>
      <ContactUs />
      <Footer />
    </>
  )
}

export default GlobalLayout
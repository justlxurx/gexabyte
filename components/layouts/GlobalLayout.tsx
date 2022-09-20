import { Container, ThemeProvider, useMediaQuery, useTheme } from "@mui/material";
import Head from "next/head";
import React from "react"
import AppBarDesktop from "../custom/app-bar/AppBarDesktop"
import AppBarMobile from "../custom/app-bar/AppBarMobile";
import Footer from "../custom/Footer";

interface MainLayoutProps {
  children: React.ReactNode
}

const SEOkeywords = ['techculture', 'blockchain', 'etc'];

const GlobalLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Head>
        {/* <title>{title}</title>
        <meta name="description" content={description} /> */}
        <link rel="icon" href="/logo.svg" />
        <meta name="keywords" content={SEOkeywords?.join(",")} />
      </Head>
      {matches ? <AppBarDesktop /> : <AppBarMobile />}
      {/* <Header /> */}
      <Container disableGutters maxWidth='xl' sx={{minHeight: '80vh'}}>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default GlobalLayout
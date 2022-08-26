import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import GlobalLayout from '../components/layouts/GlobalLayout';
import '../styles/global/globals.scss';
// import { theme } from '../utils/theme'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { theme } from '../utils/theme';
import './../styles/TechStack.scss';
import { CssBaseline } from '@mui/material';

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources: locales,
//     lng: 'en'
//   });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </ThemeProvider>
  )
}

export default MyApp

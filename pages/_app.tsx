import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import GlobalLayout from '../components/layouts/GlobalLayout';
import '../styles/global/globals.scss';
// import { theme } from '../utils/theme'
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { theme } from '../utils/theme';
import './../styles/TechStack.scss';
import { CssBaseline } from '@mui/material';
import translationEN from 'utils/locales/en.json';
import translationRU from 'utils/locales/ru.json';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      ru: {
        translation: translationRU
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'production' ? false : true
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

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

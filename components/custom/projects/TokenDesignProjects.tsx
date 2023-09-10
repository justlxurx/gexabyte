import { Box, Button, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import {useTranslation} from "react-i18next";

const projects = {
  desktop: [
      //'/images/fiat.png',
      '/images/fiat upd.png',
      //'/images/myrig.png',
      '/images/myrig upd.png',
      //'/images/gamestone.png',
      '/images/gamestone upd.png',
      //'/images/crypto bank.png',
      '/images/crypto bank upd.png',
      //'/images/gambling platform.png',
      '/images/gambling platform upd.png',
      //'/images/defi wallet.png',
      '/images/defi wallet upd.png',
      //'/images/astana hub.png',
      '/images/astana hub upd.png'
  ],
  mobile: [
      '/images/fiat mobile.png',
      '/images/myrig mobile.png',
      '/images/gamestone mobile.png'
  ]
}

const ImageGrid = [8, 4, 6, 6, 4, 4, 4]

const TokenDesignProjects = () => {
  const isMobileScreen = useMediaQuery('(max-width:768px)');
  const [isExtended] = React.useState(false);
  const {t, i18n} = useTranslation()


  return (
    <Container disableGutters sx={{
      mb: '6rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: { xs: '0.75rem', md: 0 },
      mt: '50px'
    }}>
      <Typography variant='h2' sx={{
        fontSize: {
          xs: '32px', md: '56px'
        },
        mb: '1.5rem',
        textAlign: {
          xs: 'start',
          md: 'left'
        },
          fontWeight: {
            xs: '700'
          },
          fontFamily: i18n.language === 'en' ? 'Readex Pro' : 'Geometria, sans-serif'
      }}>
          {t('tokenDesign.stats.tokenomics.portfolio')}
      </Typography>
      <Grid container gridTemplateColumns={'repeat(auto-fill, minmax(700px, 1fr))'} spacing={1}>
        {isMobileScreen ?
          projects.mobile.map((src, idx) => (
            <Grid item xs={12} md={12} key={idx}>
              {/*<Link href={'/projects'} passHref>*/}
                <a><img src={src} width={'100%'} alt={`image${idx}`}/></a>
              {/*</Link>*/}
            </Grid>
          ))
          :
          projects.desktop.map((src, idx) => (
            <Grid item xs={12} md={ImageGrid[idx]} key={idx}>
              {/*<Link href={'/projects'} passHref>*/}
                <a><img src={src} width={'100%'} alt={`image${idx}`}/></a>
              {/*</Link>*/}
            </Grid>
          ))
        }
        {isExtended &&
          <>
            {isMobileScreen ?
              projects.mobile.map((src, idx) => (
                <Grid item xs={12} md={12} key={idx}>
                  {/*<Link href={'/projects'} passHref>*/}
                    <a><img src={src} width={'100%'} alt={`image${idx}`}/></a>
                  {/*</Link>*/}
                </Grid>
              ))
              :
              projects.desktop.map((src, idx) => (
                <Grid item xs={12} md={ImageGrid[idx]} key={idx}>
                  {/*<Link href={'/projects'} passHref>*/}
                    <a><img src={src} width={'100%'} alt={`image${idx}`}/></a>
                  {/*</Link>*/}
                </Grid>
              ))
            }
          </>
        }
        {/* <Grid item xs={12}>*/}
        {/*  <Box sx={{*/}
        {/*    textAlign: 'center',*/}
        {/*    mt: '2rem'*/}
        {/*  }}>*/}
        {/*    <Link href={'/projects?tab=consulting'}>*/}
        {/*      <Button*/}
        {/*        variant={'contained'}*/}
        {/*        sx={{*/}
        {/*          fontSize: {*/}
        {/*            xs: '18px',*/}
        {/*            md: '22px'*/}
        {/*          },*/}
        {/*          fontWeight: 700,*/}
        {/*          width: {*/}
        {/*            xs: '100%',*/}
        {/*            md: '254px'*/}
        {/*          },*/}
        {/*          height: {*/}
        {/*            xs: '50px',*/}
        {/*            md: '80px'*/}
        {/*          }*/}

        {/*        }}>*/}
        {/*        {'MORE'}*/}
        {/*      </Button>*/}
        {/*    </Link>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
      </Grid>
    </Container>
  )
}

export default TokenDesignProjects;

import { Box, Button, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const projects = {
  desktop: [
      '/images/cofi.svg',
      '/images/sanau.svg',
      '/images/smart home.svg',
      '/images/factoring.svg',
      '/images/online marketing.png',
      '/images/desktop.svg',
      '/images/emm.svg'
  ],
  mobile: [
      '/images/cofiMobile.svg',
      '/images/sanauMobile.svg',
      '/images/smart home mobile.svg'
  ]
}

const ImageGrid = [8, 4, 6, 6, 4, 4, 4]

const WebProjects = () => {
  const isMobileScreen = useMediaQuery('(max-width:768px)');
  const [isExtended] = React.useState(false);


  return (
    <Container disableGutters sx={{
      mb: '6rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: { xs: '0.75rem', md: 0 }
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
        }
      }}>
        Web & Mobile <br />Development Projects
      </Typography>
      <Grid container gridTemplateColumns={'repeat(auto-fill, minmax(700px, 1fr))'} spacing={1}>
        {isMobileScreen ?
          projects.mobile.map((src, idx) => (
            <Grid item xs={12} md={12} key={idx}>
              <Link href={'/projects'} passHref>
                <a><img src={src} width={'100%'} alt={`image${idx}WebProject`}/></a>
              </Link>
            </Grid>
          ))
          :
          projects.desktop.map((src, idx) => (
            <Grid item xs={12} md={ImageGrid[idx]} key={idx}>
              <Link href={'/projects'} passHref>
                <a><img src={src} width={'100%'} alt={`image${idx}WebProject`}/></a>
              </Link>
            </Grid>
          ))
        }
        {isExtended &&
          <>
            {isMobileScreen ?
              projects.mobile.map((src, idx) => (
                <Grid item xs={12} md={12} key={idx}>
                  <Link href={'/projects'} passHref>
                    <a><img src={src} width={'100%'} alt={`image${idx}WebProject`}/></a>
                  </Link>
                </Grid>
              ))
              :
              projects.desktop.map((src, idx) => (
                <Grid item xs={12} md={ImageGrid[idx]} key={idx}>
                  <Link href={'/projects'} passHref>
                    <a><img src={src} width={'100%'} alt={`image${idx}WebProject`}/></a>
                  </Link>
                </Grid>
              ))
            }
          </>
        }
         <Grid item xs={12}>
          <Box sx={{
            textAlign: 'center',
            mt: '2rem'
          }}>
            <Link href={'/projects?tab=webdev'}>
              <Button
                variant={'contained'}
                sx={{
                  fontSize: {
                    xs: '18px',
                    md: '22px'
                  },
                  fontWeight: 700,
                  width: {
                    xs: '100%',
                    md: '254px'
                  },
                  height: {
                    xs: '50px',
                    md: '80px'
                  }

                }}>
                {'MORE'}
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WebProjects;

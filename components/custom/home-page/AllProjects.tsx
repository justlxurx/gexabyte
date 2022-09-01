import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projects = {
  desktop: ['/images/project1.jpg', '/images/project2.jpg', '/images/project3.jpg'],
  mobile: ['/images/project1-mobile.jpg', '/images/project2-mobile.jpg', '/images/project3-mobile.jpg']
}

const AllProjects = () => {
  const isMobileScreen = useMediaQuery('(max-width:768px)');
  const [isExtended, setIsExtended] = React.useState(false);

  const changeIsExtended = () => {
    setIsExtended(prev => !prev)
  }

  return (
    <Container disableGutters sx={{
      mb: '6rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '0.75rem'
    }}>
      <Typography variant='h1' sx={{
        fontSize: {
          xs: '32px', md: '56px'
        },
        mb: '1.5rem',
        textAlign: {
          xs: 'start',
          md: 'center'
        }
      }}>
        OUR ALL PROJECTS
      </Typography>
      <Grid container gridTemplateColumns={'repeat(auto-fill, minmax(700px, 1fr))'} spacing={1}>
        {isMobileScreen ?
          projects.mobile.map((src, idx) => (
            <Grid item xs={12} md={12} key={idx}>
              <Link href='/' passHref>
                <a><img src={src} width='100%' /></a>
              </Link>
            </Grid>
          ))
          :
          projects.desktop.map((src, idx) => (
            <Grid item xs={12} md={idx === 0 ? 12 : 6} key={idx}>
              <Link href='/' passHref>
                <a><img src={src} width='100%' /></a>
              </Link>
            </Grid>
          ))
        }
        {isExtended &&
          <>
            {isMobileScreen ?
              projects.mobile.map((src, idx) => (
                <Grid item xs={12} md={12} key={idx}>
                  <Link href='/' passHref>
                    <a><img src={src} width='100%' /></a>
                  </Link>
                </Grid>
              ))
              :
              projects.desktop.map((src, idx) => (
                <Grid item xs={12} md={idx === 0 ? 12 : 6} key={idx}>
                  <Link href='/' passHref>
                    <a><img src={src} width='100%' /></a>
                  </Link>
                </Grid>
              ))
            }
          </>
        }
        <Grid item xs={12}>
          <Box sx={{
            bgcolor: '#111318',
            p: '1.5rem',
            textAlign: 'center'
          }}>
            <Typography onClick={changeIsExtended} sx={{
              fontSize: {
                xs: '18px',
                md: '48px'
              },
              fontWeight: 700,
              ':hover': {
                cursor: 'pointer',
                textDecoration: 'underline'
              }
            }}>
              {isExtended ? 'LESS' : 'MORE'}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AllProjects;
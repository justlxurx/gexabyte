import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const AllProjects = () => {
  const isMobileScreen = useMediaQuery('(max-width:768px)');

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
      <Grid container columns={2} spacing={1}>
        <Grid item xs={2} md={2}>
          <Box sx={{
            display: 'flex',
            width: '100%',
            bgcolor: '#E31D38',
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem 2rem',
            height: {
              xs: '341px',
              md: '723px'
            }
          }}>
            <Box sx={{
              mt: {
                xs: 0,
                md: 'auto',
              }
            }}>
              <Typography sx={{
                color: '#450710',
                fontSize: {
                  xs: '16px',
                  md: '20px'
                },
                fontWeight: 800
              }}>Confidential</Typography>
              <Typography variant='h1' sx={{
                fontSize: {
                  xs: '25px',
                  md: '56px'
                },
                fontWeight: 800,
                width: {
                  xs: '100%',
                  md: '60%'
                }
              }}>Musical platform on Binance Smart Chain</Typography>
            </Box>
            <Box sx={{
              position: 'absolute',
              bottom: '-1%',
              right: {
                xs: '50%',
                md: 0
              },
              transform: {
                xs: 'translate(50%, 0)',
                md: 'translate(0, 0)'
              }
            }}>
              <img src={isMobileScreen ? '/images/music-nft.svg' : '/images/music-nft-large.svg'} alt='music-nft' />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2} sm={2} md={1}>
          <Box sx={{
            width: '100%',
            bgcolor: '#18A0FB',
            overflow: 'hidden',
            height: {
              xs: '341px',
              md: '723px'
            },
            p: '1.5rem'
          }}>
            {isMobileScreen && <Typography variant='h1' sx={{ fontSize: '25px', fontWeight: 800, mb: '25%' }}>
              Crowdfunding platform for projects
            </Typography>}
            <img
              src={
                isMobileScreen ?
                  '/images/screenshot-mobile.svg'
                  :
                  '/images/screenshot.svg'
              }
              alt='music-nft'
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
              }} />
            {!isMobileScreen && <Typography variant='h1' sx={{ fontSize: '56px', fontWeight: 800, mt: '25%' }}>
              Crowdfunding platform for projects
            </Typography>}
          </Box>
        </Grid>
        <Grid item xs={2} sm={2} md={1}>
          <Box sx={{
            width: '100%',
            bgcolor: '#FF5C3E',
            position: 'relative',
            height: {
              xs: '341px',
              md: '723px'
            }
          }}>
            <Box sx={{
              position: {
                xs: 'relative',
                md: 'absolute'
              },
              bottom: 0,
              right: 0,
            }}>
              <img src='/icons/edinorog.svg' alt='music-nft' />
            </Box>
            <Box sx={{
              position: {
                xs: 'relative',
                md: 'absolute'
              },
              // bottom: 0,
              right: 0,
            }}>
              <img src='/icons/duh.svg' alt='music-nft' />
            </Box>
            <Box sx={{
              position: {
                xs: 'relative',
                md: 'absolute'
              },
              bottom: 0,
              // right: 0,
            }}>
              <img src='/icons/polki.svg' alt='music-nft' />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={{
            bgcolor: '#111318',
            p: '1.5rem',
            textAlign: 'center'
          }}>
            <Typography sx={{
              fontSize: {
                xs: '18px',
                md: '48px'
              },
              fontWeight: 700
            }}>
              MORE
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AllProjects;
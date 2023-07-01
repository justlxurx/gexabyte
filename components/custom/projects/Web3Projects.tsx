import { Box, Button, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

const projects = {
  desktop: [
      //'/images/musical platform.svg',
      '/images/musical platform upd.svg',
      //'/images/defi app.svg',
      '/images/defi app upd.svg',
      //'/images/crowdfunding.png',
      '/images/crowdfunding platform upd.png',
      //'/images/nft.png',
      '/images/nft marketplace upd.png',
      //'/images/euphoria.png',
      '/images/euphoria upd.png',
      //'/images/defi.svg',
      '/images/dexoo upd.svg',
      //'/images/emm.svg'
      '/images/emm upd.svg'
  ],
  mobile: [
      '/images/projects/mobile/rokkmob.svg',
      '/images/ton seed mobile.png',
      '/images/defi mobile.png'
  ]
}

const ImageGrid = [8, 4, 6, 6, 4, 4, 4]

const Web3Projects = () => {
  const { t } = useTranslation()
  const isMobileScreen = useMediaQuery('(max-width:768px)');

  return (
    <Container disableGutters id={'blockchain-block'} sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: { xs: '0.75rem', md: 0 }
    }}>
      <Typography variant={'h2'} sx={{
        fontSize: {
          xs: '32px', md: '56px'
        },
        mb: '1.5rem',
        textAlign: {
          xs: 'start',
          md: 'left'
        },
        maxWidth: '700px'
      }}>
        {t('home.projects.title')}
      </Typography>
      <Grid container gridTemplateColumns={'repeat(auto-fill, minmax(700px, 1fr))'} spacing={1}>
        {isMobileScreen ?
          projects.mobile.map((src, idx) => (
            <Grid item xs={12} md={12} key={idx} sx={{ my: '12px' }}>
              {/*<Link href={'/projects'} passHref>*/}
                <a><img src={src} width={'100%'} alt={`image${idx}BlockChainProject`}/></a>
              {/*</Link>*/}
            </Grid>
          ))
          :
          projects.desktop.map((src, idx) => (
            <Grid item xs={12} md={ImageGrid[idx]} key={idx}>
              {/*<Link href={'/projects'} passHref>*/}
                <a><img src={src} width={'100%'} alt={`image${idx}BlockChainProject`}/></a>
              {/*</Link>*/}
            </Grid>
          ))
        }
        {/*<Grid item xs={12}>*/}
        {/*  <Box sx={{*/}
        {/*    textAlign: 'center',*/}
        {/*    mt: {*/}
        {/*      xs: '12px',*/}
        {/*      md: '2rem'*/}
        {/*    }*/}
        {/*  }}>*/}
        {/*    <Link href={'/projects?tab=blockchain'}>*/}
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
        {/*          },*/}
        {/*          textTransform: 'uppercase'*/}
        {/*        }}>*/}
        {/*        {t('button.more')}*/}
        {/*      </Button>*/}
        {/*    </Link>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
      </Grid>
    </Container>
  )
}

export default Web3Projects;
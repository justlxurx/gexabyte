import { Box, Button, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled'

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

const projectsWL = [
    {
        title: 'CRYPTO EXCHANGE CEFI',
        description: 'Centralized cryptocurrency exchange are platforms that allow users to trade cryptos.'
    },
    {
        title: 'NFT MARKETPLACE',
        description: 'NFT Marketplace is a blockchain-based online platform to sell and buy non-fungible tokens (NFTs).'
    },
    {
        title: 'DEFI WALLET',
        description: 'DeFi wallet is non-custodial (only those with seed phrase or private key can access funds) wallet that stores your cryptocurrency assets.'
    },
    {
        title: 'CEFI WALLET',
        description: 'CeFi wallet is a platform that stores your cryptocurrency assets. It owned and managed by a centralized third party.'
    }
]

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
        White Labeled <br /> Projects
      </Typography>
      <Grid container gridTemplateColumns={'repeat(auto-fill, minmax(700px, 1fr))'} spacing={1}>
        {isMobileScreen ?
          projectsWL.map((el, idx) => (
            <Grid item xs={12} md={12} key={idx}>
                <div style={{backgroundColor: '#1F1F1F', borderRadius: '4px', padding: '20px 30px', height: '100%'}}>
                    <ProjectWLTitle>
                        <OrderNumber>{idx+1}</OrderNumber>{el.title}
                    </ProjectWLTitle>
                    <ProjectWLDesc>
                        {el.description}
                    </ProjectWLDesc>
                </div>
            </Grid>
          ))
          :
          projectsWL.map((el, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <div style={{backgroundColor: '#1F1F1F', borderRadius: '4px', padding: '25px 30px', height: '100%'}}>
                  <ProjectWLTitle>
                      <OrderNumber>{idx+1}</OrderNumber>{el.title}
                  </ProjectWLTitle>
                  <ProjectWLDesc>
                      {el.description}
                  </ProjectWLDesc>
              </div>
            </Grid>
          ))
        }
        {/*{isExtended &&*/}
        {/*  <>*/}
        {/*    {isMobileScreen ?*/}
        {/*      projects.mobile.map((src, idx) => (*/}
        {/*        <Grid item xs={12} md={12} key={idx}>*/}
        {/*          <Link href={'/projects'} passHref>*/}
        {/*            <a><img src={src} width={'100%'} alt={`image${idx}WebProject`}/></a>*/}
        {/*          </Link>*/}
        {/*        </Grid>*/}
        {/*      ))*/}
        {/*      :*/}
        {/*      projects.desktop.map((src, idx) => (*/}
        {/*        <Grid item xs={12} md={ImageGrid[idx]} key={idx}>*/}
        {/*          <Link href={'/projects'} passHref>*/}
        {/*            <a><img src={src} width={'100%'} alt={`image${idx}WebProject`}/></a>*/}
        {/*          </Link>*/}
        {/*        </Grid>*/}
        {/*      ))*/}
        {/*    }*/}
        {/*  </>*/}
        {/*}*/}
        {/* <Grid item xs={12}>*/}
        {/*  <Box sx={{*/}
        {/*    textAlign: 'center',*/}
        {/*    mt: '2rem'*/}
        {/*  }}>*/}
        {/*    <Link href={'/projects?tab=webdev'}>*/}
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

export default WebProjects;

const ProjectWLTitle = styled.p`
  font-weight: 700;
  font-size: 26px;
  text-transform: uppercase;
  margin-bottom: 14px;
  
  @media (max-width: 768px){
    font-size: 19px;
  }
`

const OrderNumber = styled.span`
  background-color: #736AE4;
  width: 39px;
  height: 39px;
  font-size: 26px;
  display: inline-block;
  border-radius: 4px;
  text-align: center;
  margin-right: 16px;

  @media (max-width: 768px){
    width: 27px;
    height: 27px;
    font-size: 19px;
  }
`

const ProjectWLDesc = styled.p`
  padding-inline: 55px 20px;
  margin-top: 0;
  font-size: 18px;

  @media (max-width: 768px){
    font-size: 14px;
    padding-inline: 43px 20px;
  }
`

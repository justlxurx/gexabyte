import styled from '@emotion/styled';
import { Box, Container, Stack, Typography, Link as MUILink, Grid, TextField } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { theme } from '../../../utils/theme';

const serviceTypes = [
  {
    title: 'Blockchain Development',
    description: 'We create and deploy public, closed, hybrid blockchain solutions for various spheres, as well as DEFI and blockchain projects for the crypto industry.',
    icon: '/icons/bd.svg',
    link: '/blockchain'
  },
  {
    title: 'Blockchain Consulting',
    description: 'We provide consulting services in the following areas: tokenomics, smart contract audit, business analytics, White&Light paper and technical documentation',
    icon: '/icons/bc.svg',
    link: '/consulting'
  },
  {
    title: 'Web&mobile development',
    description: 'Development of web and mobile applications for iOS and Android with a user-friendly interface for automating processes and solving business problems using modern technologies',
    icon: '/icons/wd.svg',
    link: '/webdev'
  }
]

const Services = () => {
  return (
    <Container sx={{
      mb: '6rem',
      minWidth: '375px',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row'
        },
        justifyContent: 'space-between',
        alignItems: {
          xs: 'flex-start',
          md: 'flex-end'
        },
        mb: '2rem',
      }}>
        <Stack direction='column'>
          <Typography variant='h1' sx={{
            fontSize: {
              xs: '32px',
              md: '56px'
            },
            fontWeight: 700
          }}>
            What We Can
          </Typography>
          <Typography variant='h1' sx={{
            fontSize: {
              xs: '32px',
              md: '56px'
            },
            fontWeight: 700
          }}>
            <span style={{ color: theme.palette.primary.main }}>Help You</span> With
          </Typography>
        </Stack>
        <Link href='/projects'>
          <MUILink sx={{ cursor: 'pointer', fontFamily: 'Poppins', color: '#B3B3B3' }}>
            EXPLORE OUT PROJECTS {'>'}
          </MUILink>
        </Link>
      </Box>
      <Grid container columns={3} spacing={1} gridAutoRows='1fr' rowGap={3}>
        {serviceTypes.map((service, idx) => (
          <Grid item xs={3} md={1} key={idx}>
            <StyledCard>
              <StyledIcon src={service.icon} />
              <StyledTextArea >
                <p>{service.title}</p>
                <span>{service.description}</span>
              </StyledTextArea>
              <Link href={service.link}>
                <StyledButton>
                  <span>More Details</span>
                  <Image src='/icons/arrow-right.svg' width='25px' height='8px' />
                </StyledButton>
              </Link>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Services

const StyledCard = styled.div`
  width: 100%;
  max-width: 413px;
  height: 435px;
  background: #171717;
  display: flex;
  flex-direction: column;
  padding: 26px 48px;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 396px;
    height: 437px;
  }
`

const StyledTextArea = styled.div`
  & p {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 118%;
    text-transform: uppercase;
    color: #F0B270;
  }

  & span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #A8B1D1;
  }
`

const StyledIcon = styled.img`
  width: 60px;
  height: 60px;
  padding: 15px;
  background: rgba(115, 106, 228, 0.15);
  border-radius: 50%;
`

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 48px;
  background: rgba(115, 106, 228, 0.15);
  border-radius: 4px;
  padding: 12px 24px;
  border: none;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 191.77px;
    height: 48px;
  }

  & span {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #736AE4;
    :hover {
      text-decoration: underline;
    }
  }
`
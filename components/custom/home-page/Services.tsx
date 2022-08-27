import { Box, Container, Stack, Typography, Link as MUILink, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { theme } from '../../../utils/theme';

const serviceTypes = [
  {
    title: 'Blockchain Development',
    description: 'We create and deploy public, closed, hybrid blockchain solutions for various spheres, as well as DEFI and blockchain projects for the crypto industry.',
    icon: '/icons/boxes.svg'
  },
  {
    title: 'Blockchain Consulting',
    description: 'We provide consulting services in the following areas: tokenomics, smart contract audit, business analytics, White&Light paper and technical documentation',
    icon: '/icons/phone.svg'
  },
  {
    title: 'Web&mobile development',
    description: 'Development of web and mobile applications for iOS and Android with a user-friendly interface for automating processes and solving business problems using modern technologies',
    icon: '/icons/laptop.svg'
  }
]

const Services = () => {
  return (
    <Container sx={{
      mb: '6rem',
      padding: '0 3rem',
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
            }
          }}>
            WHAT WE CAN
          </Typography>
          <Typography variant='h1' sx={{
            fontSize: {
              xs: '32px',
              md: '56px'
            }
          }}>
            <span style={{ color: theme.palette.primary.main }}>HELP YOU</span> WITH
          </Typography>
        </Stack>
        <Link href='/projects'>
          <MUILink sx={{ cursor: 'pointer', fontFamily: 'Poppins', color: '#B3B3B3' }}>
            EXPLORE OUT PROJECTS {'>'}
          </MUILink>
        </Link>
      </Box>
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
      }}>
        {serviceTypes.map((service, idx) => (
          <Stack key={idx} direction='column' alignItems='center' textAlign='center'>
            <Box sx={{
              bgcolor: 'rgba(115, 106, 228, 0.15)',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              mb: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Image src={service.icon} width='40px' height='40px' />
            </Box>
            <Typography sx={{
              fontSize: {
                xs: '28px',
                md: '31.25px'
              },
              fontWeight: 700,
              lineHeight: '110%',
              color: theme.palette.secondary.main,
              width: '50%',
              mb: '1rem',
              textTransform: 'uppercase',
              fontFamily: 'Readex Pro',
            }}>{service.title}</Typography>
            <Typography sx={{
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              color: theme.palette.text.secondary,
              width: '85%'
            }}>{service.description}</Typography>
            <Typography m='1rem' sx={{ color: '#736AE4', fontSize: '18px', fontWeight: 600 }}>
              {idx === 0 && 'More Details'}
              {'>'}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Container>
  )
}

export default Services
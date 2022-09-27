import styled from '@emotion/styled';
import { Box, Container, Stack, Typography, Link as MUILink, Grid, TextField } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '../../../utils/theme';



const Services = () => {
  const { t } = useTranslation()
  const { locale } = useRouter()

  const services = useMemo(() => {
    return [
      {
        title: t('home.help.blockchain.title'),
        description: t('home.help.blockchain.text'),
        icon: '/icons/bd.svg',
        link: '/blockchain'
      },
      {
        title: t('home.help.consulting.title'),
        description: t('home.help.consulting.text'),
        icon: '/icons/bc.svg',
        link: '/consulting'
      },
      {
        title: t('home.help.webMobile.title'),
        description: t('home.help.webMobile.text'),
        icon: '/icons/wd.svg',
        link: '/webdev'
      }
    ]
  }, [locale, t])

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
        {services.map((service, idx) => (
          <Grid item xs={3} md={1} key={idx}>
            <StyledCard>
              <StyledIcon src={service.icon} />
              <StyledTextArea >
                <p>{service.title}</p>
                <span>{service.description}</span>
              </StyledTextArea>
              <Link href={service.link}>
                <StyledButton>
                  <span>{t('button.moreDetails')}</span>
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
  :hover {
    background: #242424;
  }

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
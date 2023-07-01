import styled from '@emotion/styled';
import { Box, Container, Stack, Typography, Link as MUILink, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '../../../utils/theme';
import {arrowRightBlueIcon} from "@public/icons";



const Services = () => {
  const { t } = useTranslation()

  const services = useMemo(() => {
    return [
      {
        title: t('home.help.web3.title'),
        description: t('home.help.web3.text'),
        icon: '/icons/bd.svg',
        link: '/web3'
      },
      {
        title: t('home.help.cryptosystem.title'),
        description: t('home.help.cryptosystem.text'),
        icon: '/icons/bc.svg',
        link: '/cryptosystem'
      },
      {
        title: t('home.help.whitelabel.title'),
        description: t('home.help.whitelabel.text'),
        icon: '/icons/wd.svg',
        link: '/whitelabel'
      }
    ]
  }, [t])

  return (
    <Container id={'services-block'} sx={{
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
        <Stack direction={'column'}>
          <Typography variant={'h2'} sx={{
            fontSize: {
              xs: '32px',
              md: '56px'
            },
            fontWeight: 700
          }}>
            What We Can
          </Typography>
          <Typography variant={'h2'} sx={{
            fontSize: {
              xs: '32px',
              md: '56px'
            },
            fontWeight: 700,
            mb: {
              xs: '34px',
              md: 0
            }
          }}>
            <span style={{ color: theme.palette.primary.main }}>Help You</span> With
          </Typography>
        </Stack>
        {/*<Link href={'/projects'}>*/}
        {/*  <MUILink sx={{ cursor: 'pointer', fontFamily: 'Poppins', color: '#B3B3B3' }}>*/}
        {/*    EXPLORE OUT PROJECTS {'>'}*/}
        {/*  </MUILink>*/}
        {/*</Link>*/}
      </Box>
      <Grid container columns={3} spacing={1} gridAutoRows={'1fr'} rowGap={3}>
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
                  <Image src={arrowRightBlueIcon} width={'25px'} height={'8px'} alt={service.title}/>
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
  height: 435px;
  background: #171717;
  display: flex;
  flex-direction: column;
  padding: 26px 48px;
  :hover {
    background: #242424;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`

const StyledTextArea = styled.div`
  margin-bottom: 27px;

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
    font-size: 18px;
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
  margin-bottom: 20px;
`

const StyledButton = styled.button`
  margin-top: auto;//for stick the button to bottom
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

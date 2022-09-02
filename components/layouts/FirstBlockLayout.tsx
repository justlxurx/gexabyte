import { Box, Button, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import RoundedAnimation from 'components/custom/RoundedAnimation'
import { useRouter } from 'next/router'
import React from 'react'
import { theme } from 'utils/theme'

interface FirstBlockLayoutProps {
  title: string
  subTitle?: string
  bgAnimationSrc?: string
}

const FirstBlockLayout: React.FC<FirstBlockLayoutProps> = ({ title, bgAnimationSrc, subTitle }) => {
  const isMobileScreen = useMediaQuery('(max-width:768px)');
  const { locale } = useRouter();

  return (
    <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '2rem' }}>
      {bgAnimationSrc &&
        <Box sx={{
          position: 'absolute',
          zIndex: -1,
          top: { xs: '400px', md: 0 },
          right: { xs: '65%', md: '-5%' },
          width: { xs: '120%', md: '100%' }
        }}>
          <video autoPlay muted loop playsInline id="myVideo" style={{ width: isMobileScreen ? '170%' : '95%' }}>
            <source src="/videos/klava.mp4" type="video/mp4" />
          </video>
        </Box>
      }
      <Box sx={{ position: 'absolute', top: { xs: '400px', md: '62.5%' }, left: { xs: '10%', md: '40%' } }}>
        <RoundedAnimation />
      </Box>
      <Container disableGutters sx={{
        padding: {
          xs: '1rem',
          md: '1rem 3rem',
        },
        minHeight: {
          xs: '90vh',
          md: '60vh'
        },
        mt: {
          md: '4rem'
        }
      }}>
        <Stack direction='column' maxWidth='692px' gap='16px'>
          <Typography sx={{
            fontSize: {
              xs: '40px',
              md: '64px',
              fontWeight: 700,
              lineHeight: '110%',
              letterSpacing: '0.025rem',
              fontFamily: locale === 'ru' ? 'Source Sans Pro' : 'Poppins'
            }
          }}>
            {title}
          </Typography>
          {subTitle &&
            <Typography
              fontSize='16px'
              fontWeight='400'
              color={theme.palette.text.secondary}
              lineHeight='150%'
              mt='1rem'
              width='70%'
            >
              {subTitle}
            </Typography>
          }
          <Button sx={{ width: { xs: '100%', md: '50%' }, bgcolor: theme.palette.primary.main, color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: 700, fontSize: '18px', ':hover': { bgcolor: theme.palette.primary.main } }} size='large'>LET&apos;S TALK</Button>
        </Stack>
      </Container>
      <Box sx={{
        width: '100%',
        height: '100px',
        background: 'linear-gradient(7.57deg, #000000 40.09%, rgba(0, 0, 0, 0) 94.72%)',
      }}>
      </Box>
    </div >
  )
}

export default FirstBlockLayout
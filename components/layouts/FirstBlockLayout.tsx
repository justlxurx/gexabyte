import { Button, Container, Stack, Typography } from '@mui/material'
import RoundedAnimation from 'components/custom/RoundedAnimation'
import React from 'react'
import { theme } from 'utils/theme'

interface FirstBlockLayoutProps {
  title: string
  subTitle?: string
  bgAnimationSrc?: string
}

const FirstBlockLayout: React.FC<FirstBlockLayoutProps> = ({ title, bgAnimationSrc, subTitle }) => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '2rem' }}>
      {bgAnimationSrc &&
        <video autoPlay muted loop id="myVideo" style={{ width: '95%', position: 'absolute', zIndex: -1, top: 0, right: 0, }}>
          <source src="/videos/klava.mp4" type="video/mp4" />
        </video>
      }
      <div style={{ position: 'absolute', top: '65%', left: '35%' }}>
        <RoundedAnimation />
      </div>
      <Container disableGutters sx={{
        padding: {
          xs: 0,
          md: '4rem 3rem',
          minHeight: '60vh',
        }
      }}>
        <Stack direction='column' maxWidth='692px' gap='16px'>
          <Typography sx={{
            fontSize: {
              xs: '40px',
              md: '64px',
              fontWeight: 700,
              lineHeight: '110%',
              letterSpacing: '0.025rem'
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
          <Button sx={{ width: '50%', bgcolor: theme.palette.primary.main, color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: 700, fontSize: '18px', ':hover': { bgcolor: theme.palette.primary.main } }} size='large'>LET&apos;S TALK</Button>
          {/* <CustomButton bgcolor={theme.palette.primary.main} title="LET'S TALK" rounded={true} /> */}
        </Stack>
      </Container>
      <div style={{ width: '100%', height: '100px', background: 'linear-gradient(7.57deg, #000000 40%, rgba(0, 0, 0, 0) 94.72%)' }}>
      </div>
    </div>
  )
}

export default FirstBlockLayout
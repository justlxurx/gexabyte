import { Box, Button, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { theme } from 'utils/theme'

interface FirstBlockLayoutProps {
  title: string
  subTitle?: string
  bgAnimationSrc?: string
}

const FirstBlockLayout: React.FC<FirstBlockLayoutProps> = ({ title, bgAnimationSrc, subTitle }) => {
  const { t } = useTranslation()
  const isMobileScreen = useMediaQuery('(max-width:768px)')
  const { locale, pathname } = useRouter()

  const [reftp, setReftp] = React.useState<HTMLElement | null>(null)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setReftp(document.getElementById("contact-us"))
    }
  }, [pathname])

  const handleScroll = () => {
    reftp?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {bgAnimationSrc &&
        <Box sx={{
          position: 'absolute',
          zIndex: -1,
          top: { xs: '400px', md: 0 },
          right: { xs: '65%', md: '-5%' },
          width: { xs: '120%', md: '100%' }
        }}>
          <video autoPlay muted loop playsInline id="myVideo" style={{ width: isMobileScreen ? '170%' : '95%' }}>
            <source src={"/videos/klava.mp4"} type={"video/mp4"} />
          </video>
        </Box>
      }
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
              fontSize='18px'
              fontWeight='400'
              color={theme.palette.text.secondary}
              lineHeight='150%'
              mt='1rem'
              width='70%'
            >
              {subTitle}
            </Typography>
          }
          <Button onClick={handleScroll} sx={{ width: { xs: '100%', md: '185px' }, bgcolor: theme.palette.primary.main, color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: 700, fontSize: '18px', ':hover': { bgcolor: theme.palette.primary.main } }} size='large'>{t('button.letstalk')}</Button>
        </Stack>
      </Container>
      <Box sx={{ position: 'absolute', bottom: 0, height: '50px', width: '100%', zIndex: -1 }}>
      </Box>
      <Box sx={{
        width: '100%',
        height: '100px',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)'
      }}>
      </Box>
    </div >
  )
}

export default FirstBlockLayout

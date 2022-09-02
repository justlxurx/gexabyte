import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { theme } from 'utils/theme'
import CustomButton from './CustomButton'

const Footer = () => {
  let reftp: HTMLElement | null = null;
  if (typeof window !== 'undefined') {
    reftp = document.getElementById("contact-us");
  }

  const handleScroll = () => {
    reftp?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer>
      <Container disableGutters maxWidth="xl" sx={{ padding: { xs: '16px 16px', md: '12px 80px' } }}>
        <Grid container columns={{ xs: 2, md: 5 }} spacing={5}>
          <Grid item xs={2} md={1}>
            <Stack direction='column' spacing={1} alignItems='flex-start'>
              <Image src={'/logo.svg'} alt='logo' width={120} height={50} />
              <Button fullWidth onClick={handleScroll} sx={{
                bgcolor: '#F000000',
                border: '2px solid #F0B270',
                // p: '1rem',
                color: '#FFFFFF',
                borderRadius: '1px',
                fontWeight: 700,
                fontSize: '16px',
                textTransform: 'none',
                width: {
                  xs: '50%',
                  md: '100%'
                }
              }}>
                Get in Touch
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={1} md={1}>
            <Stack direction='column'>
              <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Readex Pro', mb: '1rem' }}>Solutions</Typography>
              <StyledTypography title='Blockchain Developement' link='/projects' />
              <StyledTypography title='Web&Mobile development' link='/projects' />
              <StyledTypography title='Blockchain consulting' link='/projects' />
            </Stack>
          </Grid>
          <Grid item xs={1} md={1}>
            <Stack direction='column'>
              <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Readex Pro', mb: '1rem' }}>Company</Typography>
              <StyledTypography title='About' link='/about' />
              <StyledTypography title='Blog' link='/blog' />
              <StyledTypography title='Careers' link='/careers' />
            </Stack>
          </Grid>
          <Grid item xs={1} md={1}>
            <Stack direction='column'>
              <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Readex Pro', mb: '1rem' }}>Projects</Typography>
              <StyledTypography title='Our projects' link='/projects' />
              <StyledTypography title='Blockchain' link='/blockchain' />
              <StyledTypography title='Mobile app' link='/mobile-app' />
              <StyledTypography title='Web app' link='/web-app' />
            </Stack>
          </Grid>
          <Grid item xs={1} md={1}>
            <Stack direction='column'>
              <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Readex Pro', mb: '1rem' }}>Keep in touch</Typography>
              <Stack direction='row' spacing={1}>
                <a href='https://instagram.com/tech.culture.it?igshid=YmMyMTA2M2Y='>
                  <Image src='/icons/social-media/Instagram.svg' width='24px' height='24px' />
                </a>
                <a href='https://kz.linkedin.com/in/techculture'>
                  <Image src='/icons/social-media/LinkdIn.svg' width='24px' height='24px' />
                </a>
                <a href='https://t.me/techcultureconsult'>
                  <Image src='/icons/social-media/Telegram.svg' width='24px' height='24px' />
                </a>
                <a href='https://www.facebook.com/tech.culture.it'>
                  <Image src='/icons/social-media/Facebook.svg' width='24px' height='24px' />
                </a>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer

interface StyledTypographyProps {
  title: string
  link: string
}

const StyledTypography: React.FC<StyledTypographyProps> = ({ title, link }) => (
  <Link href={link}>
    <Typography sx={{ fontSize: '16px', textTransform: 'capitalize', color: '#667085', cursor: 'pointer', mb: '1rem' }}>
      {title}
    </Typography>
  </Link>
)
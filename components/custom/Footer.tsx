import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { theme } from 'utils/theme'
import CustomButton from './CustomButton'

const Footer = () => {
  return (
    <footer>
      <Container disableGutters maxWidth="xl" sx={{ padding: { xs: '16px 16px', md: '12px 80px' } }}>
        <Grid columns={{ xs: 2, md: 5 }} container spacing={3}>
          <Grid item xs={1} md={1}>
            <Image src={'/logo.svg'} alt='logo' width={100} height={50} />
            <Button fullWidth sx={{
              bgcolor: '#F000000',
              border: '2px solid #F0B270',
              p: '1rem',
              color: '#FFFFFF',
              borderRadius: '1px',
              fontWeight: 700,
              fontSize: '16px',
              textTransform: 'none'
            }}>
              Get in Touch
            </Button>
          </Grid>
          <Grid item xs={1} md={1}>
          </Grid>
          <Grid item xs={1} md={1}>
            <Stack direction='column'>
              <Typography>Solutions</Typography>
              <Typography sx={{ fontSize: '16px' }} color={theme.palette.text.secondary}>
                Blockchain Development
              </Typography>
              <Typography sx={{ fontSize: '16px' }} color={theme.palette.text.secondary}>
                Blockchain Development
              </Typography>
              <Typography sx={{ fontSize: '16px' }} color={theme.palette.text.secondary}>
                Blockchain Development
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={1} md={1}>
            <Stack direction='column'>
              <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Readex Pro' }}>Projects</Typography>
              <Typography sx={{ fontSize: '16px' }} color={theme.palette.text.secondary}>
                Blockchain Development
              </Typography>
              <Typography sx={{ fontSize: '16px' }} color={theme.palette.text.secondary}>
                Blockchain Development
              </Typography>
              <Typography sx={{ fontSize: '16px' }} color={theme.palette.text.secondary}>
                Blockchain Development
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={1} md={1}>
            <Stack direction='column'>
              <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Readex Pro' }}>Company</Typography>
              <Typography sx={{ fontSize: '16px' }} color={theme.palette.text.secondary}>
                Blockchain Development
              </Typography>
              <Typography sx={{ fontSize: '16px' }} color={theme.palette.text.secondary}>
                Blockchain Development
              </Typography>
              <Typography sx={{ fontSize: '16px' }} color={theme.palette.text.secondary}>
                Blockchain Development
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={1} md={1}>
            <Stack direction='column'>
              <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Readex Pro' }}>Keep in touch</Typography>
              <Stack direction='row'>
                <a href='/'><Image src='/icons/social-media/Instagram.svg' width='24px' height='24px' /></a>
                <a href='/'><Image src='/icons/social-media/LinkdIn.svg' width='24px' height='24px' /></a>
                <a href='/'><Image src='/icons/social-media/Telegram.svg' width='24px' height='24px' /></a>
                <a href='/'><Image src='/icons/social-media/Facebook.svg' width='24px' height='24px' /></a>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
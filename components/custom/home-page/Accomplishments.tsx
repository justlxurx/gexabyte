import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { theme } from 'utils/theme'

const Accomplishments = () => {
  return (
    <Container sx={{
      // border: '1px solid red',
      mb: '6rem',
      padding: '0 3rem',
      minWidth: '375px'
    }}>
      <Grid container columns={12} spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant={'h1'} sx={{
            fontSize: {
              xs: '32px',
              md: '56px',
            }
          }}>
            We create digital services for large businesses
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant={'h1'} color={theme.palette.primary.main}>40+</Typography>
          <Typography sx={{ fontSize: '16px' }} color={theme.palette.text.secondary}>
            number of completed projects
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant={'h1'} color={theme.palette.primary.main}>6+</Typography>
          <Typography sx={{ fontSize: '16px' }} color={theme.palette.text.secondary}>
            Blockchain and web development experience
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant={'h1'} color={theme.palette.primary.main}>221+</Typography>
          <Typography sx={{ fontSize: '16px' }} color={theme.palette.text.secondary}>
            Blockchain and web development
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Accomplishments

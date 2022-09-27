import styled from '@emotion/styled'
import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { theme } from 'utils/theme'
import CustomButton from './CustomButton'

const Footer = () => {
  const { t } = useTranslation();
  const [reftp, setReftp] = React.useState<HTMLElement | null>(null)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setReftp(document.getElementById("contact-us"))
    }
  }, [])

  const handleScroll = () => {
    reftp?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <StyledFooter>
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
                {t('button.getInTouch')}
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={1} md={1}>
            <Stack direction='column'>
              <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Readex Pro', mb: '1rem' }}>Solutions</Typography>
              <StyledTypography title='Blockchain Developement' link='/blockchain' />
              <StyledTypography title='Blockchain consulting' link='/consulting' />
              <StyledTypography title='Web&Mobile development' link='/webdev' />
            </Stack>
          </Grid>
          <Grid item xs={1} md={1}>
            <Stack direction='column'>
              <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Readex Pro', mb: '1rem' }}>Projects</Typography>
              <StyledTypography title='Blockchain' link='/blockchain' />
              <StyledTypography title='Consulting' link='/consulting' />
              <StyledTypography title='Web&Mobile app' link='/webdev' />
            </Stack>
          </Grid>
          <Grid item xs={2} md={2}>
            <Stack direction={{ xs: 'row', md: 'column' }} alignItems={{ xs: 'center', md: 'end' }} justifyContent={{ xs: 'space-between' }}>
              <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Readex Pro', mb: '1rem' }}>{t('footer.keepInTouch')}</Typography>
              <Stack direction='row' spacing={1}>
                <a href='https://instagram.com/tech.culture.it?igshid=YmMyMTA2M2Y='>
                  <Image src='/icons/social-media/Instagram.svg' width='24px' height='24px' />
                </a>
                <a href='https://kz.linkedin.com/in/techculture'>
                  <Image src='/icons/social-media/LinkdIn.svg' width='24px' height='24px' />
                </a>
                <a href='https://t.me/tech_culture_dev'>
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
      <Container sx={{ px: { xs: '16px', md: '120px' }, py: '30px', display: { xs: 'block', md: 'flex' }, alignItems: 'center', gap: '80px' }}>
        <StyledCopyright>© 2022 Techculture</StyledCopyright>
      </Container>
    </StyledFooter>
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

const StyledFooter = styled.footer`
  margin-top: auto;
`

const StyledCopyright = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #556174;
  cursor: pointer;
`

const Terms = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  .text {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #88909E;
  }

  .dot {
    color: #88909E;
    font-size: 36px;
  }
`
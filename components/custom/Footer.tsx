import styled from '@emotion/styled'
import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {logoIcon} from "@public/icons";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const { t } = useTranslation()
  const { asPath } = useRouter()
  const [reftp, setReftp] = React.useState<HTMLElement | null>(null)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setReftp(document.getElementById("contact-us"))
    }
  }, [asPath])

  const handleScroll = () => {
    reftp?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <StyledFooter>
      <Container disableGutters maxWidth={"xl"} sx={{ padding: { xs: '16px 16px', md: '12px 80px' } }}>
        <Grid container columns={{ xs: 2, md: 5 }} spacing={5}>
          <Grid item xs={2} md={1}>
            <Stack direction={'column'} spacing={1} alignItems={'flex-start'}>
              <Image src={logoIcon} width={120} height={50} alt={'logo'}/>
              <Button fullWidth onClick={handleScroll} sx={{
                bgcolor: '#F000000',
                border: '2px solid #F0B270',
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
            <Stack direction={'column'}>
              {/*<Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Readex Pro', mb: '1rem' }}>Solutions</Typography>*/}
              <StyledTypography title={t('footer.web3')} link={'/blockchain'} />
              <StyledTypography title={t('footer.cryptosystem')} link={'/consulting'} />
              <StyledTypography title={t('footer.whitelabeled')} link={'/webdev'} />
            </Stack>
          </Grid>
          {/*<Grid item xs={1} md={2}>*/}
          {/*  <Stack direction={'column'}>*/}
          {/*    <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Readex Pro', mb: '1rem' }}>Projects</Typography>*/}
          {/*    <StyledTypography title={'Blockchain projects'} link={'/projects?tab=blockchain'}/>*/}
          {/*    <StyledTypography title={'Consulting projects'} link={'/projects?tab=consulting'} />*/}
          {/*    <StyledTypography title={'Web&Mobile app projects'} link={'/projects?tab=webdev'} />*/}
          {/*  </Stack>*/}
          {/*</Grid>*/}
          <Grid item xs={2} md={1}>
            <Stack direction={{ xs: 'row', md: 'column' }} alignItems={{ xs: 'center', md: 'start' }} justifyContent={{ xs: 'space-between' }}>
              <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Readex Pro', mb: '1rem' }}>{t('footer.keepInTouch')}</Typography>
              <SocialMedia/>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ px: { xs: '16px', md: '0px' }, py: '30px', display: { xs: 'block', md: 'flex' }, alignItems: 'center', gap: '80px' }}>
        <StyledCopyright>© 2023 BLOXXA</StyledCopyright>
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

import { Box, Button, Container, Grid, InputLabel, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import CustomButton from 'components/custom/CustomButton';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { IContactUsForm } from 'types/IContactUsForm';
import { contactUsSchema } from 'utils/validations/contactUsSchema';
import SocialMedia from '../SocialMedia';
import styled from '@emotion/styled';
// import styles from './ContactUs.module.scss';

interface ContactUsProps {
  // ref: any
}

const ContactUs: React.FC<ContactUsProps> = () => {
  const isMobileScreen = useMediaQuery('(max-width:768px)');
  const [services, setServices] = React.useState({
    bd: false,
    bc: false,
    wd: false
  });

  const formik = useFormik<IContactUsForm>({
    initialValues: {
      name: '',
      email: '',
      company: '',
      info: '',
      type: 'consulting, developement'
    },
    onSubmit: async values => {
      try {
        const res = await axios.post('https://techculture.tech/api/contact/us', values);
        if (res.status === 200) {
          alert('Ваша заявка принята!')
          resetForm()
        }
      } catch (e) {
        alert('Ошибочка... Попробуйте позже')
      }
    },
    validationSchema: contactUsSchema,
    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: false
  });

  const { values: form, handleSubmit, handleChange, errors, resetForm } = formik;

  return (
    <div id='contact-us'>
      <Container disableGutters sx={{
        mb: '6rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{ position: 'absolute', top: 0, height: '100px', width: '100%', zIndex: -1, background: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)' }}>
        </Box>
        <Box sx={{ position: 'absolute', bottom: 0, height: '100px', width: '100%', zIndex: -1, background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)' }}>
        </Box>
        <Grid container direction={isMobileScreen ? 'column-reverse' : 'row'} alignItems='center' justifyContent='center'>
          <Grid item xs p='5%'>
            {isMobileScreen ?
              <>
                <Box sx={{ position: 'absolute', top: '105vh', height: '100px', width: '100%', zIndex: -1, background: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)' }}>
                </Box>
                <video autoPlay muted loop id="myVideo" style={{ width: '100vh', top: '130vh', visibility: 'visible', position: 'absolute', zIndex: -2, left: '-55%', transform: 'rotate(90deg)' }}>
                  <source src="/videos/Emitter.mp4" type="video/mp4" />
                </video>
              </>
              :
              <video autoPlay muted loop id="myVideo" style={{ height: '100%', visibility: 'visible', position: 'absolute', zIndex: -2, left: '-30%', transform: 'rotate(90deg)' }}>
                <source src="/videos/Emitter.mp4" type="video/mp4" />
              </video>
            }

            <Typography sx={{
              fontSize: '32px',
              fontWeight: 700,
              fontFamily: 'Readex Pro',
              width: '60%',
              textTransform: 'capitalize',
              mb: '1.25rem'
            }}>
              Contact Us And Unleash Your Ideas
            </Typography>
            <Typography sx={{
              color: '#F0B270',
              fontSize: '16px',
              fontWeight: 600,
            }}>Address</Typography>
            <a href='https://go.2gis.com/kkjlw'>
              <Typography sx={{
                textDecoration: 'underline',
                fontFamily: 'Source Sans Pro',
                fontSize: '18px',
                fontWeight: 700,
                mb: '1rem',
              }}>Медеу парк, жилой комплекс Бегалина, 7, Алматы</Typography>
            </a>
            <Typography sx={{
              color: '#F0B270',
              fontSize: '16px',
              fontWeight: 600,
            }}>Sales Department</Typography>
            <a href='mailto:aa@techculture.tech'>
              <Typography sx={{
                textDecoration: 'underline',
                fontSize: '16px',
                fontWeight: 600,
                mb: '1rem'
              }}>aa@techculture.tech</Typography>
            </a>
            <Typography style={{
              color: '#F0B270',
              fontSize: '16px',
              fontWeight: 600,
            }}>HR Department</Typography>
            <a href='mailto:hr@techculture.tech'>
              <Typography sx={{
                textDecoration: 'underline',
                fontSize: '16px',
                fontWeight: 600,
                mb: '1rem'
              }}>hr@techculture.tech</Typography>
            </a>
            <Typography sx={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#F0B270'
            }}>Social Media</Typography>
            <SocialMedia />
          </Grid>
          <Grid item xs p='5%' id='#get-in-touch'>
            <form onSubmit={handleSubmit}>
              <Typography sx={{
                fontSize: '48px',
                fontWeight: 600,
                fontFamily: 'Readex Pro',
                mb: '1rem'
              }}>
                Let’s switch your business to Digital
              </Typography>
              <Typography sx={{
                fontSize: '18px',
                fontWeight: 500,
                color: '#667085',
                width: '60%',
                mb: '2.5rem'
              }}>
                You can reach us anytime via <span style={{ color: '#736AE4' }}>techculturellp@gmail.com</span>
              </Typography>
              <StyledInputLabel>Name</StyledInputLabel>
              <TextField
                id="bootstrap-input1"
                placeholder='Your name'
                value={form.name}
                name='name'
                onChange={handleChange}
                fullWidth
                required
                error={!!errors.name}
                sx={{
                  bgcolor: '#FFFFFF',
                  borderRadius: '4px',
                  input: { color: '#667085' },
                  mb: !!!errors.name ? '16px' : '0px',
                }}
              />
              {!!errors.name &&
                <Typography variant='caption' color='red'>
                  {errors.name}
                </Typography>
              }
              <StyledInputLabel>Email</StyledInputLabel>
              <TextField
                id="bootstrap-input2"
                value={form.email}
                type='email'
                name='email'
                onChange={handleChange}
                error={!!errors.email}
                fullWidth
                required
                placeholder='you@company.com'
                sx={{
                  bgcolor: '#FFFFFF',
                  borderRadius: '4px',
                  input: { color: '#667085' },
                  mb: !!!errors.email ? '16px' : '0px',

                }} />
              {!!errors.email &&
                <Typography variant='caption' color='red'>
                  {errors.email}
                </Typography>
              }
              <StyledInputLabel>Company</StyledInputLabel>
              <TextField
                value={form.company}
                name='company'
                onChange={handleChange}
                error={!!errors.company}
                required
                id="bootstrap-input3" fullWidth placeholder='Company name' sx={{
                  bgcolor: '#FFFFFF',
                  borderRadius: '4px',
                  mb: !!!errors.company ? '16px' : '0px',
                  input: { color: '#667085' },
                }} />
              {!!errors.company &&
                <Typography variant='caption' color='red'>
                  {errors.company}
                </Typography>
              }
              <StyledInputLabel>How can we help?</StyledInputLabel>
              <TextField
                id="bootstrap-input4"
                value={form.info}
                name='info'
                onChange={handleChange}
                fullWidth
                multiline
                required
                rows={3}
                error={!!errors.info}
                placeholder='Tell us a little about the project...'
                inputProps={{ style: { color: '#667085' } }}
                sx={{
                  bgcolor: '#FFFFFF',
                  borderRadius: '4px',
                  mb: !!!errors.info ? '16px' : '0px',
                  input: { color: '#667085' },
                }}
              />
              {!!errors.info &&
                <Typography variant='caption' color='red'>
                  {errors.info}
                </Typography>
              }
              {/* <InputLabel shrink htmlFor="bootstrap-input5" sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <Image src='/icons/attach.svg' width='24px' height='24px' />
              Add attachment
            </InputLabel>
            <input type='file' id="bootstrap-input6" style={{ display: 'none' }} /> */}
              <StyledInputLabel>Services</StyledInputLabel>
              <Grid container columns={3} spacing={1}>
                <Grid item xs={1}>
                  <Button variant='outlined' onClick={() => setServices(prev => ({ ...prev, bd: !prev.bd }))} sx={{
                    borderColor: services.bd ? '#F0B270' : '#2D2D2D',
                    color: services.bd ? '#F0B270' : '#2D2D2D',
                    fontSize: { xs: '14px', md: '18px' },
                    fontWeight: { xs: 600, md: 600 },
                    ':hover': {
                      borderColor: services.bd ? '#F0B270' : '#2D2D2D',
                    },
                    fontFamily: 'Helvetica Neue',
                    width: {xs: '126px', md: '100%'},
                  }}>
                    Blockchain Development
                  </Button>
                </Grid>
                <Grid item xs={1}>
                  <Button variant='outlined' onClick={() => setServices(prev => ({ ...prev, bc: !prev.bc }))} sx={{
                    width: {xs: '126px', md: '100%'},
                    borderColor: services.bc ? '#F0B270' : '#2D2D2D',
                    color: services.bc ? '#F0B270' : '#2D2D2D',
                    fontSize: { xs: '14px', md: '18px' },
                    fontWeight: { xs: 600, md: 600 },
                    ':hover': {
                      borderColor: services.bc ? '#F0B270' : '#2D2D2D',
                    },
                    fontFamily: 'Helvetica Neue'
                  }}>
                    Blockchain Consulting
                  </Button>
                </Grid>
                <Grid item xs={1}>
                  <Button variant='outlined' onClick={() => setServices(prev => ({ ...prev, wd: !prev.wd }))} sx={{
                    borderColor: services.wd ? '#F0B270' : '#2D2D2D',
                    color: services.wd ? '#F0B270' : '#2D2D2D',
                    fontSize: { xs: '14px', md: '18px' },
                    fontWeight: { xs: 600, md: 600 },
                    ':hover': {
                      borderColor: services.wd ? '#F0B270' : '#2D2D2D',
                    },
                    width: {xs: '126px', md: '100%'},
                    fontFamily: 'Helvetica Neue'
                  }}>
                    Web&mobile development
                  </Button>
                </Grid>
              </Grid>
              <Button
                fullWidth
                size='large'
                type='submit'
                sx={{
                  bgcolor: '#7F56D9',
                  my: '0.5rem',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: 700,
                  fontFamily: 'Poppins'
                }}>
                Get started
              </Button>
              <Button fullWidth size='large' sx={{
                bgcolor: '#69B1F3',
                my: '0.5rem',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: 700,
                fontFamily: 'Poppins'
              }}>
                Let’s chat in Telegram
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default ContactUs

const StyledInputLabel = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  margin-bottom: 8px;
  color: #FFFFFF;
`
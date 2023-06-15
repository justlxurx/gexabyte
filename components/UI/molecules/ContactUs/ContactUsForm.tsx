import styled from '@emotion/styled';
import { Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IContactUsForm } from 'types/IContactUsForm';
import { contactUsSchema } from 'utils/validations/contactUsSchema';
import {socialURL} from "../../../custom/socialURL";

const ContactUsForm = () => {
  const {t} = useTranslation()

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
      <>
          <form onSubmit={handleSubmit}>
              <Typography sx={{
                  fontSize: {
                      xs: '32px',
                      md: '48px'
                  },
                  fontWeight: 600,
                  fontFamily: 'Readex Pro',
                  mb: '1rem'
              }}>
                  {t('contactUsForm.formTitle')}
              </Typography>
              <StyledInputLabel>{t('contactUsForm.name')}</StyledInputLabel>
              <TextField
                  id={"bootstrap-input1"}
                  placeholder={'Your name'}
                  value={form.name}
                  name={'name'}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={!!errors.name}
                  sx={{
                      bgcolor: '#FFFFFF',
                      borderRadius: '4px',
                      input: { color: '#667085' },
                      mb: !errors.name ? '16px' : '0px',
                  }}
              />
              {!!errors.name &&
                  <Typography variant={'caption'} color={'red'}>
                      {errors.name}
                  </Typography>
              }
              <StyledInputLabel>{t('contactUsForm.email')}</StyledInputLabel>
              <TextField
                  id={"bootstrap-input2"}
                  value={form.email}
                  type={'email'}
                  name={'email'}
                  onChange={handleChange}
                  error={!!errors.email}
                  fullWidth
                  required
                  placeholder={'you@company.com'}
                  sx={{
                      bgcolor: '#FFFFFF',
                      borderRadius: '4px',
                      input: { color: '#667085' },
                      mb: !errors.email ? '16px' : '0px',

                  }} />
              {!!errors.email &&
                  <Typography variant={'caption'} color={'red'}>
                      {errors.email}
                  </Typography>
              }
              <StyledInputLabel>{t('contactUsForm.company')}</StyledInputLabel>
              <TextField
                  value={form.company}
                  name={'company'}
                  onChange={handleChange}
                  error={!!errors.company}
                  required
                  id={"bootstrap-input3"} fullWidth placeholder={'Company name'} sx={{
                  bgcolor: '#FFFFFF',
                  borderRadius: '4px',
                  mb: !errors.company ? '16px' : '0px',
                  input: { color: '#667085' },
              }} />
              {!!errors.company &&
                  <Typography variant={'caption'} color={'red'}>
                      {errors.company}
                  </Typography>
              }
              <StyledInputLabel>{t('contactUsForm.help')}</StyledInputLabel>
              <TextField
                  id={"bootstrap-input4"}
                  value={form.info}
                  name={'info'}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  required
                  rows={3}
                  error={!!errors.info}
                  placeholder={'Tell us a little about the project...'}
                  inputProps={{ style: { color: '#667085' } }}
                  sx={{
                      bgcolor: '#FFFFFF',
                      borderRadius: '4px',
                      mb: !errors.info ? '16px' : '0px',
                      input: { color: '#667085' },
                  }}
              />
              {!!errors.info &&
                  <Typography variant={'caption'} color={'red'}>
                      {errors.info}
                  </Typography>
              }
              <StyledInputLabel>Services</StyledInputLabel>
              <Grid container columns={3} spacing={1}>
                  <Grid item xs={1}>
                      <Button variant={'outlined'} onClick={() => setServices(prev => ({ ...prev, bd: !prev.bd }))} sx={{
                          borderColor: services.bd ? '#F0B270' : '#2D2D2D',
                          color: services.bd ? '#F0B270' : '#2D2D2D',
                          fontSize: { xs: '14px', md: '18px' },
                          fontWeight: { xs: 700, md: 700 },
                          ':hover': {
                              borderColor: services.bd ? '#F0B270' : '#2D2D2D',
                          },
                          fontFamily: 'Helvetica Neue',
                          width: { xs: '126px', md: '100%' },
                      }}>
                          {t('home.help.web3.title')}
                      </Button>
                  </Grid>
                  <Grid item xs={1}>
                      <Button variant={'outlined'} onClick={() => setServices(prev => ({ ...prev, bc: !prev.bc }))} sx={{
                          width: { xs: '126px', md: '100%' },
                          borderColor: services.bc ? '#F0B270' : '#2D2D2D',
                          color: services.bc ? '#F0B270' : '#2D2D2D',
                          fontSize: { xs: '14px', md: '18px' },
                          fontWeight: { xs: 700, md: 700 },
                          ':hover': {
                              borderColor: services.bc ? '#F0B270' : '#2D2D2D',
                          },
                          fontFamily: 'Helvetica Neue'
                      }}>
                          {t('home.help.cryptosystem.title')}
                      </Button>
                  </Grid>
                  <Grid item xs={1}>
                      <Button variant='outlined' onClick={() => setServices(prev => ({ ...prev, wd: !prev.wd }))} sx={{
                          borderColor: services.wd ? '#F0B270' : '#2D2D2D',
                          color: services.wd ? '#F0B270' : '#2D2D2D',
                          fontSize: { xs: '14px', md: '18px' },
                          fontWeight: { xs: 700, md: 700 },
                          ':hover': {
                              borderColor: services.wd ? '#F0B270' : '#2D2D2D',
                          },
                          width: { xs: '126px', md: '100%' },
                          fontFamily: 'Helvetica Neue',
                          fontStyle: 'normal',
                      }}>
                          {t('home.help.whitelabeled.title')}
                      </Button>
                  </Grid>
              </Grid>
              <Button
                  fullWidth
                  size={'large'}
                  type={'submit'}
                  sx={{
                      bgcolor: '#7F56D9',
                      my: '0.5rem',
                      color: '#FFFFFF',
                      fontSize: '16px',
                      fontWeight: 700,
                      fontFamily: 'Poppins',
                      mt: '32px'
                  }}>
                  {t('button.getStarted')}
              </Button>
              <a href={socialURL.telegram}>
                  <Button fullWidth size={'large'} sx={{
                      bgcolor: '#69B1F3',
                      my: '0.5rem',
                      color: '#FFFFFF',
                      fontSize: '16px',
                      fontWeight: 700,
                      fontFamily: 'Poppins'
                  }}>
                      {t('button.letsChatInTelegram')}
                  </Button>
              </a>
          </form>
      </>
  )
}

export default ContactUsForm

const StyledInputLabel = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  margin-bottom: 8px;
  color: #FFFFFF;
  text-transform: capitalize;
`

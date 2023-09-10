import styled from '@emotion/styled';
import { Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IContactUsForm } from 'types/IContactUsForm';
import { contactUsSchema } from 'utils/validations/contactUsSchema';
import {socialURL} from "../../../custom/socialURL";
import {telegramIcon} from "@public/icons/social-media";
import Image from "next/image";
import {margin} from "@mui/system";
import {red} from "@mui/material/colors";

const ContactUsForm = () => {
  const {t, i18n } = useTranslation()

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
                  fontFamily: i18n.language === 'en' ? 'Readex Pro' : 'Geometria, sans-serif',
                  mb: '1rem'
              }}>
                  {t('contactUsForm.formTitle')}
              </Typography>
              <StyledInputLabel className={i18n.language === 'en' ? '' : 'nunito'}>{t('contactUsForm.name')}</StyledInputLabel>
              <TextField
                  id={"bootstrap-input1"}
                  placeholder={t('contactUsForm.placeholders.name')}
                  value={form.name}
                  name={'name'}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={!!errors.name}
                  sx={{
                      bgcolor: '#FFFFFF',
                      borderRadius: '4px',
                      input: { color: '#667085', fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif' },
                      mb: !errors.name ? '16px' : '0px',
                      fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif',
                      "::placeholder": {
                          fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif'
                      }
                  }}
              />
              {!!errors.name &&
                  <Typography variant={'caption'} color={'red'}>
                      {errors.name}
                  </Typography>
              }
              <StyledInputLabel className={i18n.language === 'en' ? '' : 'nunito'}>{t('contactUsForm.email')}</StyledInputLabel>
              <TextField
                  id={"bootstrap-input2"}
                  value={form.email}
                  type={'email'}
                  name={'email'}
                  onChange={handleChange}
                  error={!!errors.email}
                  fullWidth
                  required
                  placeholder={t('contactUsForm.placeholders.email')}
                  sx={{
                      bgcolor: '#FFFFFF',
                      borderRadius: '4px',
                      input: { color: '#667085', fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif'},
                      mb: !errors.email ? '16px' : '0px',
                      fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif',
                      "::placeholder": {
                          fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif'
                      }
                  }} />
              {!!errors.email &&
                  <Typography variant={'caption'} color={'red'}>
                      {errors.email}
                  </Typography>
              }
              <StyledInputLabel className={i18n.language === 'en' ? '' : 'nunito'}>{t('contactUsForm.company')}</StyledInputLabel>
              <TextField
                  value={form.company}
                  name={'company'}
                  onChange={handleChange}
                  error={!!errors.company}
                  required
                  id={"bootstrap-input3"} fullWidth placeholder={t('contactUsForm.placeholders.company')} sx={{
                  bgcolor: '#FFFFFF',
                  borderRadius: '4px',
                  mb: !errors.company ? '16px' : '0px',
                  input: { color: '#667085', fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif' },
                  fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif',
                  "::placeholder": {
                      fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif'
                  }
              }} />
              {!!errors.company &&
                  <Typography variant={'caption'} color={'red'}>
                      {errors.company}
                  </Typography>
              }
              <StyledInputLabel className={i18n.language === 'en' ? '' : 'nunito'}>{t('contactUsForm.help')}</StyledInputLabel>
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
                  placeholder={t('contactUsForm.placeholders.help')}
                  inputProps={{ style: { color: '#667085', fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif'} }}
                  sx={{
                      bgcolor: '#FFFFFF',
                      borderRadius: '4px',
                      mb: !errors.info ? '16px' : '0px',
                      input: { color: '#667085', fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif' },
                      fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif',
                      "::placeholder": {
                          fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif'
                      }
                  }}
              />
              {!!errors.info &&
                  <Typography variant={'caption'} color={'red'}>
                      {errors.info}
                  </Typography>
              }
              <StyledInputLabel className={i18n.language === 'en' ? '' : 'nunito'}>{t('contactUsForm.services')}</StyledInputLabel>
              <Grid container columns={3} spacing={1} alignItems={'stretch'}>
                  <Grid item xs={1} width={'100%'}>
                      <Button variant={'outlined'} onClick={() => setServices(prev => ({ ...prev, bd: !prev.bd }))} sx={{
                          borderColor: services.bd ? '#F0B270' : '#2D2D2D',
                          color: services.bd ? '#F0B270' : '#2D2D2D',
                          fontSize: { xs: '14px', md: '18px' },
                          fontWeight: { xs: 700, md: 700 },
                          ':hover': {
                              borderColor: services.bd ? '#F0B270' : '#2D2D2D',
                          },
                          height: '100%',
                          fontFamily: i18n.language === 'en' ? 'Helvetica Neue' : 'Nunito, sans-serif',
                          width: { xs: '126px', md: '100%' },
                      }}>
                          {t('home.help.web3.title')}
                      </Button>
                  </Grid>
                  <Grid item xs={1} width={'100%'}>
                      <Button variant={'outlined'} onClick={() => setServices(prev => ({ ...prev, bc: !prev.bc }))} sx={{
                          width: { xs: '126px', md: '100%' },
                          height: '100%',
                          borderColor: services.bc ? '#F0B270' : '#2D2D2D',
                          color: services.bc ? '#F0B270' : '#2D2D2D',
                          fontSize: { xs: '14px', md: '18px' },
                          fontWeight: { xs: 700, md: 700 },
                          ':hover': {
                              borderColor: services.bc ? '#F0B270' : '#2D2D2D',
                          },
                          fontFamily: i18n.language === 'en' ? 'Helvetica Neue' : 'Nunito, sans-serif'
                      }}>
                          {t('home.help.tokendesign.title')}
                      </Button>
                  </Grid>
                  <Grid item xs={1} width={'100%'}>
                      <Button variant='outlined' onClick={() => setServices(prev => ({ ...prev, wd: !prev.wd }))} sx={{
                          borderColor: services.wd ? '#F0B270' : '#2D2D2D',
                          color: services.wd ? '#F0B270' : '#2D2D2D',
                          fontSize: { xs: '14px', md: '18px' },
                          fontWeight: { xs: 700, md: 700 },
                          ':hover': {
                              borderColor: services.wd ? '#F0B270' : '#2D2D2D',
                          },
                          width: { xs: '126px', md: '100%' },
                          fontFamily: i18n.language === 'en' ? 'Helvetica Neue' : 'Nunito, sans-serif',
                          fontStyle: 'normal',
                          height: '100%'
                      }}>
                          {t('home.help.whitelabel.title')}
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
                      fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif',
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
                      fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif',
                      position: 'relative'
                  }}>
                      <p style={{margin: '0 10px 0 0'}}>{t('button.letsChatInTelegram')}</p>
                      <Image src={telegramIcon}/>
                      {/*<TopBorder/>*/}
                      {/*<BottomBorder/>*/}
                      {/*<RightBorder/>*/}
                      {/*<LeftBorder/>*/}
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
  
  &.nunito{
    font-family: 'Nunito', sans-serif;
  }
`

const TopBorder = styled.span`
  width: 0;
  border-radius: inherit;
  border-top: rgb(240, 178, 112) 6px solid;
  height: 100%;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  animation: horizontalAnimation 2s linear infinite;
  
  @keyframes horizontalAnimation {
    from{
      width: 0;
    }
    75%{
      width: 100%;
    }
    75.01%{
      width: 0;
    }
  }
`

const BottomBorder = styled.span`
  width: 0;
  border-radius: inherit;
  border-bottom: rgb(240, 178, 112) 6px solid;
  height: 100%;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  right: 0;
  animation: horizontalAnimation 2s linear infinite;
`

const RightBorder = styled.span`
  width: 100%;
  border-radius: inherit;
  border-right: rgb(240, 178, 112) 6px solid;
  height: 0;
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  animation: verticalAnimation 2s linear infinite;

  @keyframes verticalAnimation {
    75%{
      height: 0;
    }
    to{
      height: 100%;
    }
  }
`

const LeftBorder = styled.span`
  width: 100%;
  border-radius: inherit;
  border-left: rgb(240, 178, 112) 6px solid;
  height: 0;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: verticalAnimation 2s linear infinite;
`

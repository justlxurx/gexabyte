import styled from '@emotion/styled';
import { Box, Button, Container, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import axios from 'axios';
import ContactUsForm from 'components/UI/molecules/ContactUs/ContactUsForm';
import ContactUsGradients from 'components/UI/molecules/ContactUs/ContactUsGradients';
import ContactUsInfo from 'components/UI/molecules/ContactUs/ContactUsInfo';
import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IContactUsForm } from 'types/IContactUsForm';
import { contactUsSchema } from 'utils/validations/contactUsSchema';
import SocialMedia from '../SocialMedia';
// import styles from './ContactUs.module.scss';

const ContactUs: React.FC = () => {
  const { t } = useTranslation();
  const isMobileScreen = useMediaQuery('(max-width:600px)');


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

        <ContactUsGradients />

        <Grid container direction={isMobileScreen ? 'column-reverse' : 'row'} alignItems='center' justifyContent='center'>

          <Grid item xs p='5%'>
            <ContactUsInfo />
          </Grid>

          <Grid item xs p='5%' id='#get-in-touch'>
            <ContactUsForm />
          </Grid>
        </Grid>
        
      </Container>
    </div>
  )
}

export default ContactUs

import { Container, Grid, useMediaQuery } from '@mui/material';

import ContactUsGradients from 'components/UI/molecules/ContactUs/ContactUsGradients';
import ContactUsInfo from 'components/UI/molecules/ContactUs/ContactUsInfo';
import React from 'react';
import ContactUsForm from "../../UI/molecules/ContactUs/ContactUsForm";

const ContactUs: React.FC = () => {
  const isMobileScreen = useMediaQuery('(max-width:600px)');


  return (
    <div id={'contact-us'}>
      <Container disableGutters sx={{
        mb: '6rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}>

        <ContactUsGradients />

        <Grid container direction={isMobileScreen ? 'column-reverse' : 'row'} alignItems={'center'} justifyContent={'center'}>

          <Grid item xs p={'5%'}>
            <ContactUsInfo />
          </Grid>

          <Grid item xs p={'5%'} id={'#get-in-touch'}>
            <ContactUsForm />
          </Grid>
        </Grid>

      </Container>
    </div>
  )
}

export default ContactUs

import { Button, Container, Grid, InputLabel, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import CustomButton from 'components/custom/CustomButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';
// import styles from './ContactUs.module.scss';

const ContactUs = () => {
  const isMobileScreen = useMediaQuery('(max-width:768px)');
  const [services, setServices] = React.useState({
    bd: false,
    bc: false,
    wd: false
  });

  const [form, setForm] = React.useState({
    name: '',
    email: '',
    company: '',
    info: '',
    type: 'test'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://techculture.tech/api/contact/us', form);
      setForm({
        name: '',
        email: '',
        company: '',
        info: '',
        type: ''
      });
      if (res.status === 200) {
        alert('Успешно')
      }
    } catch (e) {
      alert('Ошибочка... Попробуйте позже')
    }
  }

  return (
    <Container disableGutters sx={{
      mb: '6rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Grid container direction={isMobileScreen ? 'column-reverse' : 'row'} alignItems='center' justifyContent='center'>
        <Grid item xs p='5%'>
          <video autoPlay muted loop id="myVideo" style={{ height: '100%', visibility: 'visible', position: 'absolute', zIndex: -1, left: '-30%', transform: 'rotate(90deg)' }}>
            <source src="/videos/Emitter.mp4" type="video/mp4" />
          </video>
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
              fontSize: '16px',
              fontWeight: 600,
              mb: '1rem'
            }}>Медеу парк, жилой комплекс Бегалина, 7, Алматы</Typography>
          </a>
          <Typography sx={{
            color: '#F0B270',
            textDecoration: 'underline',
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
        </Grid>
        <Grid item xs p='5%'>
          <form onSubmit={e => handleSubmit(e)}>
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
            <InputLabel shrink htmlFor="bootstrap-input1">
              Name
            </InputLabel>
            <TextField
              id="bootstrap-input1"
              placeholder='Your name'
              value={form.name}
              onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
              fullWidth
              required
              sx={{
                bgcolor: '#FFFFFF',
                border: '1px solid #D0D5DD',
                borderRadius: '8px',
                mb: '16px',
                input: { color: '#B3B8C2' }
              }}
            />
            <InputLabel shrink htmlFor="bootstrap-input2">
              Email
            </InputLabel>
            <TextField
              value={form.email}
              required
              onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
              id="bootstrap-input2" fullWidth placeholder='you@company.com' sx={{ bgcolor: '#FFFFFF', border: '1px solid #D0D5DD', borderRadius: '8px', mb: '16px', input: { color: '#B3B8C2' } }} />

            <InputLabel shrink htmlFor="bootstrap-input3">
              Company
            </InputLabel>
            <TextField
              value={form.company}
              required
              onChange={e => setForm(prev => ({ ...prev, company: e.target.value }))}
              id="bootstrap-input3" fullWidth placeholder='Company name' sx={{ bgcolor: '#FFFFFF', border: '1px solid #D0D5DD', borderRadius: '8px', mb: '16px', input: { color: '#B3B8C2' } }} />

            <InputLabel shrink htmlFor="bootstrap-input4">
              How can we help?
            </InputLabel>
            <TextField
              id="bootstrap-input4"
              value={form.info}
              onChange={e => setForm(prev => ({ ...prev, info: e.target.value }))}
              fullWidth
              multiline
              required
              rows={3}
              placeholder='Tell us a little about the project...'
              inputProps={{ style: { color: '#B3B8C2' } }}
              sx={{
                bgcolor: '#FFFFFF',
                border: '1px solid #D0D5DD',
                borderRadius: '8px',
                mb: '16px',
                input: { color: '#B3B8C2' }
              }}
            />
            <InputLabel shrink htmlFor="bootstrap-input5" sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <Image src='/icons/attach.svg' width='24px' height='24px' />
              Add attachment
            </InputLabel>
            <input type='file' id="bootstrap-input6" style={{ display: 'none' }} />
            <InputLabel shrink htmlFor="bootstrap-input4">
              Services
            </InputLabel>
            <Grid container columns={3} spacing={1}>
              <Grid item xs={1}>
                <Button variant='outlined' onClick={() => setServices(prev => ({ ...prev, bd: !prev.bd }))} sx={{
                  borderColor: services.bd ? '#F0B270' : '#2D2D2D',
                  color: services.bd ? '#F0B270' : '#2D2D2D'
                }}>
                  Blockchain Development
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button variant='outlined' onClick={() => setServices(prev => ({ ...prev, bc: !prev.bc }))} sx={{
                  borderColor: services.bc ? '#F0B270' : '#2D2D2D',
                  color: services.bc ? '#F0B270' : '#2D2D2D'
                }}>
                  Blockchain Consulting
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button variant='outlined' onClick={() => setServices(prev => ({ ...prev, wd: !prev.wd }))} sx={{
                  borderColor: services.wd ? '#F0B270' : '#2D2D2D',
                  color: services.wd ? '#F0B270' : '#2D2D2D'
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
      </Grid >
    </Container >
  )
}

export default ContactUs
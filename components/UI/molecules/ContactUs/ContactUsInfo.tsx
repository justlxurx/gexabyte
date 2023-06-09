import { Box, Typography, useMediaQuery } from '@mui/material';
import SocialMedia from 'components/custom/SocialMedia';
import { useTranslation } from 'react-i18next';
import {socialURL} from "../../../custom/socialURL";

const ContactUsInfo = () => {
  const { t } = useTranslation()
  const isMobileScreen = useMediaQuery('(max-width:600px)')

  return (
    <div style={{ padding: '30px' }}>
      {isMobileScreen ?
        <>
          <Box sx={{
              position: 'absolute',
              top: '105vh',
              height: '100px',
              width: '100%',
              zIndex: -1,
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)'
          }}>
          </Box>
          <video autoPlay muted loop id={"myVideo"} style={{ width: '200vw', top: '130vh', visibility: 'visible', position: 'absolute', zIndex: -2, left: '-55%', transform: 'rotate(90deg)' }}>
            <source src={"/videos/Emitter.mp4"} type="video/mp4" />
          </video>
        </>
        :
        <video autoPlay muted loop id={"myVideo"} style={{ height: '100%', visibility: 'visible', position: 'absolute', zIndex: -2, left: '-30%', transform: 'rotate(90deg)' }}>
          <source src={"/videos/Emitter.mp4"} type={"video/mp4"} />
        </video>
      }

      <Typography sx={{
        fontSize: '32px',
        fontWeight: 700,
        fontFamily: 'Readex Pro',
        width: {
          xs: '100%',
          md: '60%'
        },
        textTransform: 'capitalize',
        mb: '1.25rem',
        lineHeight: '100%'
      }}>
        {t('contactUsForm.title')}
      </Typography>
      <Typography sx={{
        color: '#F0B270',
        fontSize: '16px',
        fontWeight: 600,
      }}>{t('contactUsForm.address')}</Typography>
        <a href={socialURL.twoGis}>
        <Typography sx={{
          textDecoration: 'underline',
          fontSize: '16px',
          fontWeight: 600,
          mb: '1rem'
        }}>Almaty, Markova 22/37</Typography>
      </a>
      <Typography sx={{
        color: '#F0B270',
        fontSize: '16px',
        fontWeight: 600,
      }}>{t('contactUsForm.sales')}</Typography>
      <a href={socialURL.salesDepartment}>
        <Typography sx={{
          textDecoration: 'underline',
          fontSize: '16px',
          fontWeight: 600,
          mb: '1rem'
        }}>sales@techculture.tech</Typography>
      </a>
      {/*<Typography style={{*/}
      {/*  color: '#F0B270',*/}
      {/*  fontSize: '16px',*/}
      {/*  fontWeight: 600,*/}
      {/*}}>{t('contactUsForm.hr')}</Typography>*/}
      {/*<a href={socialURL.hrDepartment}>*/}
      {/*  <Typography sx={{*/}
      {/*    textDecoration: 'underline',*/}
      {/*    fontSize: '16px',*/}
      {/*    fontWeight: 600,*/}
      {/*    mb: '1rem'*/}
      {/*  }}>hr@techculture.tech</Typography>*/}
      {/*</a>*/}
      <Typography sx={{
        fontSize: '16px',
        fontWeight: 600,
        color: '#F0B270'
      }}>{t('contactUsForm.socialMedia')}</Typography>
      <SocialMedia />
    </div>
  )
}

export default ContactUsInfo

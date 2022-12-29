import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material'; import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { theme } from '../../../utils/theme';
import CustomButton from '../CustomButton';
import SocialMedia from '../SocialMedia';
import { dropdownContent } from './AppBarDesktop';
import {arrowDownGrayIcon, burgerIcon, closeIcon, logoRawIcon} from "@public/icons";

const AppBarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { pathname } = useRouter()
  let reftp: HTMLElement | null = null;
  if (typeof window !== 'undefined') {
    reftp = document.getElementById("contact-us");
  }

  const changeMenu = () => {
    setIsOpen(prev => !prev);
  }

  const handleScroll = () => {
    reftp?.scrollIntoView({ behavior: 'smooth' });
  }

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <AppBar position="sticky" sx={{
      bgcolor: 'rgba(0, 0, 0, 0.65)',
      padding: '8px 8px',
      backdropFilter: 'blur(21px)',
      position: 'relative',
      zIndex: theme.zIndex.drawer + 1,
    }}>
      <Toolbar>
        <IconButton
          size={"large"}
          edge={"start"}
          color={"inherit"}
          aria-label={"menu"}
          sx={{ mr: 2 }}
          onClick={changeMenu}
        >
          {isOpen ?
            <Image src={closeIcon} width={'32px'} height={'32px'} alt={'closeIcon'}/>
            :
            <Image src={burgerIcon} width={'32px'} height={'32px'} alt={'burgerIcon'}/>
          }
        </IconButton>

        <Box sx={{ flexGrow: 1 }}>
          <Link href='/'>
            <Image src={logoRawIcon} width={'32px'} height={'32px'} style={{ cursor: 'pointer' }} alt={'logoRaw'}/>
          </Link>
        </Box>
        <CustomButton title={'Get in Touch'} bgcolor={'transparent'} handleClick={handleScroll} />
      </Toolbar>
      <Drawer
        anchor={'left'}
        open={isOpen}
        onClose={changeMenu}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', bgcolor: '#000000', padding: '2rem' },
        }}
        disableScrollLock={true}
      >
        <Toolbar />
        {/* {dropdownContent.map((item, idx) => (
          <Link href={item.link} key={idx}>
            <Typography key={idx} sx={{ fontSize: '24px', fontWeight: 500, color: '#A8B1D1' }}>{item.title}</Typography>
          </Link>
        ))} */}
        {dropdownContent.map((item, idx) => (
          item.items?.length ?
            <Accordion sx={{ bgcolor: '#000000' }} key={idx}>
              <AccordionSummary
                expandIcon={<Image src={arrowDownGrayIcon} alt={'arrowDownGrayIcon'}/>}
                aria-controls={"panel2a-content"}
                id={"panel2a-header"}
              >
                <Typography sx={{ fontSize: '24px', fontWeight: 500, color: '#A8B1D1' }}>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails >
                {item.items.map((itemY, idy) => (
                  <Link href={itemY.link} key={idy}>
                    <Typography style={{ cursor: 'pointer' }} sx={{ m: '1rem', fontSize: '22px', fontWeight: 500, color: '#A8B1D1' }}>{itemY.title}</Typography>
                  </Link>
                ))}
              </AccordionDetails>
            </Accordion>
            :
            <Link href={item.link} key={idx}>
              <Typography key={idx} sx={{ m: '1rem', fontSize: '24px', fontWeight: 500, color: '#A8B1D1' }}>{item.title}</Typography>
            </Link>
        ))}
        <Stack direction='row' sx={{ mt: 'auto' }}>
          <SocialMedia />
          {/* <Stack direction='row' spacing={2} sx={{ ml: 'auto' }}>
            <LocaleButton text='ENG' locale='en' />
            <LocaleButton text='RUS' locale='ru' />
          </Stack> */}
        </Stack>
      </Drawer>
    </AppBar >
  )
}

export default AppBarMobile

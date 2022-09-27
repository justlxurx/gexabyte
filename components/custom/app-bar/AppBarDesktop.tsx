import { Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { theme } from '../../../utils/theme';
import CustomButton from '../CustomButton';
import Dropdown from '../Dropdown';
import LocaleButton from '../home-page/LocaleButton';

export const dropdownContent = [
  {
    title: 'Solutions',
    menu: true,
    link: '#',
    items: [
            { title: 'Blockchain', link: '/blockchain' }, 
            { title: 'Consulting', link: '/consulting' }, 
            { title: 'Web&Mobile', link: '/webdev' }]
  },
  {
    title: 'Projects',
    menu: false,
    link: '/projects',
  },
]

const AppBarDesktop: React.FC = () => {
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
    <AppBar position="sticky" sx={{
      bgcolor: 'rgba(0, 0, 0, 0.65)',
      padding: '12px 80px',
      backdropFilter: 'blur(21px)',
      maxWidth: '1920px',
      m: 'auto'
    }}>
      <Container disableGutters maxWidth="xl">
        <Toolbar disableGutters sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div style={{display: "flex"}}>
          <Link href='/'>
            <Image src={'/logo.svg'} alt='logo' width={100} height={50} style={{ cursor: 'pointer'}} />
          </Link>

          <Stack direction='row' gap='2rem' fontSize='16px' style={{marginLeft: "10vw"}}>
            {dropdownContent.map((i, idx) => (
              <>
              <Dropdown data={i} key={idx} />
              </>
              ))}
          </Stack>
          </div>
          <Stack direction='row' gap='0.5rem' spacing={2} alignItems='center'>
            <LocaleButton text='ENG' locale='en' />
            <LocaleButton text='RUS' locale='ru' />
            <Link href='#contact-us'>
              <CustomButton
                title='Get in Touch'
                bgcolor={'transparent'}
                handleClick={handleScroll}
              />
            </Link>
          </Stack>
        </Toolbar>
      </Container >
    </AppBar >
  );
};

export default AppBarDesktop;

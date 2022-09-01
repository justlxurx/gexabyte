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
    title: 'Projects',
    menu: false,
    link: '/'
  },
  {
    title: 'Solutions',
    menu: true,
    items: [{ title: 'Я', link: '/sol1' }, { title: 'Не знаю', link: '/sol2' }, { title: 'Что тут', link: '/sol2' }, { title: 'должно быть', link: '/sol2' }],
    link: '/'
  },
  {
    title: 'Company',
    menu: true,
    items: [{ title: 'Я', link: '/sol1' }, { title: 'Не знаю', link: '/sol2' }, { title: 'Что тут', link: '/sol2' }, { title: 'должно быть', link: '/sol2' }],
    link: '/'
  }
]

const AppBarDesktop: React.FC = () => {
  const reftp = document.getElementById("contact-us");

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
          <Link href='/'>
            <Image src={'/logo.svg'} alt='logo' width={100} height={50} style={{ cursor: 'pointer' }} />
          </Link>

          <Stack direction='row' gap='2rem' fontSize='16px'>
            {dropdownContent.map((i, idx) => (
              <Dropdown data={i} key={idx} />
            ))}
          </Stack>
          <Stack direction='row' gap='0.5rem' spacing={2} alignItems='center'>
            <LocaleButton text='ENG' locale='en' />
            <LocaleButton text='RUS' locale='ru' />
            <Link href='#contact-us'>
              <CustomButton
                title='Get in Touch'
                bgcolor={theme.palette.secondary.main}
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

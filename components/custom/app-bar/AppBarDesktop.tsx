import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CustomButton from '../CustomButton';
import { theme } from '../../../utils/theme';
import { InputLabel, Menu, MenuItem, Select, SelectChangeEvent, Stack, SvgIcon, Tab, Tabs } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { navRoutes } from '../../../utils/routes';
import DropdownIcon from '../../../public/icons/sr-chevron-right.svg';
import Dropdown from '../Dropdown';
import LocaleButton from '../home-page/LocaleButton';
import { useTranslation } from 'react-i18next';
import useScroll from 'hooks/useScroll';

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
            {dropdownContent.map((i) => (
              <Dropdown data={i} />
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

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CustomButton from '../CustomButton';
import { theme } from '../../../utils/theme';
import { Stack, Tab, Tabs } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { navRoutes } from '../../../utils/routes';

const AppBarDesktop: React.FC = () => {
  const { asPath, locale } = useRouter();
  const [value, setValue] = React.useState('ru');

  // React.useEffect(() => {
  //   setValue(locale)
  // }, [locale])

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
            <Image src={'/logo.svg'} alt='logo' width={100} height={50} />
          </Link>

          <Stack direction='row' gap='2rem' fontSize='10px'>
            {navRoutes.map((route, idx) => (
              <Link key={idx} href={route.link} passHref>
                <a>
                  <Typography color={theme.palette.text.secondary}>
                    {route.title}
                  </Typography>
                </a>
              </Link>
            ))}
          </Stack>

          <Stack direction='row' gap='0.5rem'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} aria-label="locale-state">
                <Link href={asPath} locale='en'>
                  <Tab label='ENG' value='en' sx={{ p: 0, m: 0 }} />
                </Link>
                <Link href={asPath} locale='ru'>
                  <Tab label='RUS' value='ru' />
                </Link>
              </Tabs>
            </Box>
            <CustomButton title='Get in Touch' bgcolor={theme.palette.secondary.main} />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarDesktop;

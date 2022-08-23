import { AppBar, Box, Button, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import React from 'react';
import burgerIcon from '@public/icons/burger.svg';
import Image from 'next/image';
import CustomButton from '../CustomButton';
import { theme } from '../../../utils/theme';

const AppBarMobile: React.FC = () => {

  return (
    <AppBar position="sticky" sx={{
      bgcolor: 'rgba(0, 0, 0, 0.65)',
      padding: '8px 8px',
      backdropFilter: 'blur(21px)'
    }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Image src={'/icons/burger.svg'} width='32px' height='32px' />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Image src={'/logo-raw.svg'} width='32px' height='32px' />
        </Box>
        <CustomButton title='Get in Touch' bgcolor={theme.palette.secondary.main} />
      </Toolbar>
    </AppBar>
  )
}

export default AppBarMobile
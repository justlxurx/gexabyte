import { createTheme } from "@mui/material";

// const theme - createTheme();

export const theme = createTheme({
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
  palette: {
    background: {
      default: '#000000'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A8B1D1'
    },
    primary: {
      main: '#736AE4',
    },
    secondary: {
      main: '#F0B270',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontSize: '56px',
      lineHeight: '110%',
      fontWeight: 700,
      letterSpacing: '0.025rem',
      fontFamily: 'Readex Pro'
    }
  },
  breakpoints: {
    values: {
      // extra-small
      xs: 0,
      // small
      sm: 375,
      // medium
      md: 768,
      // large
      lg: 1366,
      // extra-large
      xl: 1920,
    }
  }
});
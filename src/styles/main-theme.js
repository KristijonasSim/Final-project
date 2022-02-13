import { createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
  spacing: 12,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1500,
    },
  },
});

const lightTheme = createTheme(mainTheme, {
  mixins: {
    toolbar: {
      [mainTheme.breakpoints.up('lg')]: {
        minHeight: 75,
      },
    },
  },
  typography: {
           h4: {
      [mainTheme.breakpoints.down('md')]: {
        fontSize: '1.3rem',
      },
    },
},
  palette: {
    primary: {
      main: '#e31238',
      dark: '#e31238',
      light: '#ff6984',
    },
  },
});

export default lightTheme;

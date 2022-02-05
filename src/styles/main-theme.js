import { createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
  spacing: 12,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1760,
    },
  },
  typography: {
    fontSize: 14,
    fontSizeLg: 17,
  },
});

const lightTheme = createTheme(mainTheme, {
  mixins: {
    toolbar: {
      [mainTheme.breakpoints.up('md')]: {
        minHeight: 75,
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

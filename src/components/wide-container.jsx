import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const WideContainer = styled(Container)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    maxWidth: theme.breakpoints.values.xl,
    padding: theme.spacing(0),
  },
}));

export default WideContainer;

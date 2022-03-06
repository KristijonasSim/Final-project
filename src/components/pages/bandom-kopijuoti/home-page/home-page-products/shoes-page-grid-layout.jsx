import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const ShoesPageGridLayout = styled(Box)(({ theme }) => ({
  display: 'grid',
  margin: '10px',
  gap: theme.spacing(2),
  [theme.breakpoints.up('xs')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',

  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

export default ShoesPageGridLayout;

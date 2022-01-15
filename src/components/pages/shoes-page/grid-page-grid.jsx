import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const ShoesPageGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  margin: theme.spacing(10, 0),
  gridTemplateColumns: '2fr',
  gap: theme.spacing(4,0),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',

  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
}));

export default ShoesPageGrid;

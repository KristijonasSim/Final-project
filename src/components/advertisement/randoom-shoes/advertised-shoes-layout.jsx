import styled from '@emotion/styled/types/base'
import { Box } from '@mui/material';

const AdvertisedShoesLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '10px',
  gap: theme.spacing(2),
  [theme.breakpoints.up('xs')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
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

export default AdvertisedShoesLayout
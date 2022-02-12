import {
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const ShoeFilterBox = styled(Box)(({ theme }) => ({
  display: 'block',
  maxHeight: '450px',
  border: '1px solid #E5E5E5',
  boxSizing: 'border-box',
  padding: '30px 16px',
  borderRadius: '5px',
}));

export default ShoeFilterBox
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CartButton = styled(Button)(({ theme }) => ({
  textDecoration: 'none',
  color: '#fff',
  backgroundColor: '#E93830',
  borderRadius: 0,
  padding: '7px 25px 5px ',
  width: '230px',
  alignItems: 'center',
  lineHeight: '1.428571429',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize,
  fontFamily: theme.typography.fontFamily,
  ':hover': {
    backgroundColor: '#CF0606',
  },
}));

export default CartButton;

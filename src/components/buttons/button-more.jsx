import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ButtonMore = styled(Button)(({ theme }) => ({
  color: 'black',
  border: '1px solid black',
  borderRadius: 0,
  padding: '14px 16px 8px',
  height: '100%',
  alignItems: 'center',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSizeLg,
  ':hover': {
    backgroundColor: "#E93830",
    color: 'white',
    border: '1px solid transparent'
  },
}));

export default ButtonMore
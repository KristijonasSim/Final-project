import React from 'react';
import {
  Button,
} from '@mui/material';

const FormButton = ({ children, ...rest }) => (
  <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    sx={{ height: 56, mb: 2 }}
    {...rest}
  >
    {children}
  </Button>
);

export default FormButton;

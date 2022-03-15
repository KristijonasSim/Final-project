import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  InputAdornment,
  Container,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AuthService from '../../services/auth-service';
import ConfirmationModal from './profile-page-confirmation-modal';

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'At least 2 symbols')
    .max(32, 'Maximum 32 symbols')
    .required('Name is required!'),
  surname: yup
    .string()
    .min(2, 'At least 2 symbols')
    .max(32, 'Maximum 32 symbols')
    .required('Surname is required!'),
  email: yup
    .string()
    .email('Email is not valid')
    .required('Email is required!'),
});

const ProfilePageForm = ({ name, surname, email }) => {
  const [emailBeingChecked, setEmailBeingChecked] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState(true);
  const [open, setOpen] = useState(false);

  const onSubmit = () => {
    setOpen(true);
  };

  const {
    values,
    errors,
    dirty,
    isValid,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name,
      surname,
      email,
    },
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const emailIsInitial = values.email === email;

  const handleEmailChange = (event) => {
    handleChange(event);
    if (event.target.value !== email && !errors.email) {
      (async () => {
        setEmailBeingChecked(true);
        const fetchedEmailAvailable = await AuthService.checkEmail(
          event.target.value,
        );
        setEmailBeingChecked(false);
        setEmailAvailable(fetchedEmailAvailable);
      })();
    }
  };

  let emailAdornment;
  if (!emailIsInitial && !errors.email) {
    if (emailBeingChecked) {
      emailAdornment = (
        <InputAdornment position="end">
          <CircularProgress size={24} />
        </InputAdornment>
      );
    } else {
      emailAdornment = emailAvailable ? (
        <InputAdornment position="end">
          <CheckCircleIcon color="success" />
        </InputAdornment>
      ) : (
        <InputAdornment position="end">
          <ErrorIcon color="error" />
        </InputAdornment>
      );
    }
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #E5E5E5',
        padding: 2,
      }}
    >
      <ConfirmationModal
        handleClose={() => setOpen(false)}
        open={open}
        formData={values}
      />
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Box sx={{
          display: 'flex', flexDirection: 'row', gap: 4, justifyContent: 'space-between',
        }}
        >
          <TextField
            sx={{ width: 500 }}
            label="Name"
            name="name"
            size="large"
            variant="standard"
            value={values.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
            disabled={isSubmitting}
          />

          <TextField
            sx={{ width: 500 }}
            label="Surname"
            name="surname"
            variant="standard"
            value={values.surname}
            onChange={handleChange}
            error={Boolean(errors.surname)}
            helperText={errors.surname}
            disabled={isSubmitting}
          />
        </Box>
        <TextField
          sx={{ marginTop: 3, width: '100%' }}
          label="Email"
          name="email"
          variant="standard"
          value={values.email}
          onChange={handleEmailChange}
          error={Boolean(errors.email) || !emailAvailable}
          helperText={errors.email ?? (emailAvailable ? undefined : 'Email is taken!')}
          InputProps={{ endAdornment: emailAdornment }}
          disabled={isSubmitting}
        />

        <Box sx={{ display: 'flex', justifyContent: 'end', pt: 2 }}>
          <Button
            variant="contained"
            type="submit"
            disabled={!dirty || !isValid}
            sx={{
              width: 200,
              height: 48,
            }}
          >
            {isSubmitting ? (
              <CircularProgress color="inherit" size={24} />
            ) : (
              'MODIFY'
            )}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ProfilePageForm;

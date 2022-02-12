/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  TextField,
  Grid,
  Alert,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useFormik } from 'formik';
import * as yup from 'yup';

import AuthForm from '../components/auth-from';
import { loginSuccess } from '../store/auth';
import ApiService from '../services/api-service';
import routes from '../routing/routes';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Is not valid email')
    .required('Is required'),
  password: yup
    .string()
    .required('Is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const handleLogin = async ({ email, password }) => {
    try {
      const { user, token } = await ApiService.login({ email, password });
      const redirectTo = searchParams.get('redirectTo');
      const loginSuccessAction = loginSuccess({ user, token, redirectTo });
      dispatch(loginSuccessAction);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };


  const {
    values, errors, touched, isValid, dirty, isSubmitting,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleLogin,
  })



  return (
        <AuthForm
                title="Login"
                linkTo={routes.RegisterPage}
                linkTitle="Dont have an account? Register"
                onSubmit={handleSubmit}
                loading={isSubmitting}
                isValid={dirty & isValid}
              >
                <Grid container spacing={4}>
                  {
                    errorMsg
                      ? (
                        <Grid item xs={12}>
                          <Alert
                            severity="error"
                            action={(
                              <IconButton
                                aria-label="close"
                                color="primary"
                                size="small"
                                onClick={() => setErrorMsg(null)}
                              >
                                <CloseIcon fontSize="inherit" />
                              </IconButton>
                          )}
      
                          >
                            {errorMsg}
                          </Alert>
                        </Grid>
                      )
                      : null
                  }
      
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="email"
                      label="Email"
                      autoFocus
                      // Props provided by Formik
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mb: 4 }}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      // Props provided by Formik
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      disabled={isSubmitting}

                    />
                  </Grid>
                </Grid>
        </AuthForm>
      )
  
};

export default LoginPage;


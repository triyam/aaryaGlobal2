import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik, Form, FormikProvider } from 'formik';
// import { Card, Container, Typography } from '@mui/material';
// material
import {
  Typography,
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Container,
  CssBaseline,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';
import useResponsive from '../../../hooks/useResponsive';

// component
import Iconify from '../../../dashboardComponents/Iconify';

// ----------------------------------------------------------------------

export default function ForgotPassword() {
  // const smUp = useResponsive('up', 'sm');

  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      service: '',
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      // handleSubmit(e);
      // SubmitHandler(e);
      navigate('/dashboard', { replace: true });
    },
  });

  // const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;
  const { errors, touched, values, isSubmitting, getFieldProps } = formik;

  const handleSubmit = (e) => {
    e.preventDefault();
    let URL = '';
    console.log(values);
    if (values.service === '') alert('Please select a service');
    else {
      if (values.service === 'car_rental') {
        URL = 'https://aryaglobal2.herokuapp.com/car/forgotpassword';
        // console.log('URL');
      }
      if (values.service === 'golf_rental') URL = 'https://aryaglobal2.herokuapp.com/golf/forgotpassword';
      if (values.service === 'hotel_rental') URL = 'https://aryaglobal2.herokuapp.com/hotel/forgotpassword';

      console.log(URL);
      const config = {
        header: {
          'Content-Type': 'application/json',
        },
      };
      if (values.email !== '' && values.service !== '') {
        console.log(values);
        // console.log(formik.initialValues.email);
        // console.log(formik.initialValues.password);
        axios
          .post(
            URL,
            {
              email: values.email,
              service: values.service,
            },
            config
          )
          .then((response) => {
            console.log(response.data);
            // window.alert("Login Successful!");
            console.log('Reset Link Sent Successfully!');
            window.alert('Check your email address for reset link');
            // localStorage.setItem('jwt', response.data.token);
            // localStorage.setItem('user', JSON.stringify(response.data.user));
            // navigate('/dashboard');
          })
          .catch((error) => {
            console.log(error);
            window.alert('Invalid Credentials!');
            console.log('Invalid Credentials!');
          });
        // alert('Login Success');
      } else {
        alert('Please Enter Valid Details');
        // console.log(values);
      }
    }
  };

  return (
    <FormikProvider value={formik}>
      {/* <Form autoComplete="off" noValidate onSubmit={handleSubmit}> */}

      <Container component="main" minWidth="100%">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit} sx={{ mt: 5, minWidth: '100%' }}>
            <FormControl sx={{ mt: 3, minWidth: '100%' }}>
              <InputLabel id="demo-simple-select-fullwidth-label">Select Service</InputLabel>
              <Select
                labelId="demo-simple-select-fullwidth-label"
                id="demo-simple-select-fullwidth"
                // value={age}
                // onChange={handleChange}
                {...getFieldProps('service')}
                fullWidth
                label="Service"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="car_rental">Car Rental</MenuItem>
                <MenuItem value="golf_rental">Golf Rental</MenuItem>
                <MenuItem value="hotel_rental">Hotel Rental</MenuItem>
              </Select>
            </FormControl>
            <Stack spacing={3} sx={{ mt: 3, minWidth: '100%' }}>
              <TextField
                fullWidth
                autoComplete="username"
                type="email"
                label="Email address"
                {...formik.getFieldProps('email')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
            </Stack>

            {/* <Link component={RouterLink} variant="subtitle2" to="/forgotpassword" underline="hover">
                Forgot password?
              </Link>
              <Link component={RouterLink} variant="subtitle2" to="/register" underline="hover">
                Don’t have an account?
              </Link> */}
            {/* {!smUp && (
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?{' '}
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  Get started
                </Link>
              </Typography>
            )} */}

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{ mt: 3, minWidth: '100%' }}
              loading={isSubmitting}
            >
              {/* <Link to="/dashboard/app">Login</Link> */}
              Submit
            </LoadingButton>
          </Form>
        </Box>
      </Container>
    </FormikProvider>
  );
}

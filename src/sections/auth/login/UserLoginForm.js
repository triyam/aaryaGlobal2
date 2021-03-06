import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
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
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../dashboardComponents/Iconify';

// ----------------------------------------------------------------------

export default function UserLoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true,
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

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    if (values.email !== '' && values.password !== '') {
      console.log(values);
      // console.log(formik.initialValues.email);
      // console.log(formik.initialValues.password);
      axios
        .post(
          'https://aryaglobal2.herokuapp.com/user/signin',
          // 'http://localhost:5000/user/signin',
          {
            email: values.email,
            password: values.password,
          },
          config
        )
        .then((response) => {
          console.log(response.data);
          // window.alert("Login Successful!");
          console.log('Login Successful!');
          localStorage.setItem('jwt', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          navigate('/dashboard');
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
  };

  return (
    <FormikProvider value={formik}>
      {/* <Form autoComplete="off" noValidate onSubmit={handleSubmit}> */}
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...formik.getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...formik.getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        {/* <FormControl sx={{ mt: 3, minWidth: 480 }}>
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
        </FormControl> */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="/userforgotpassword" underline="hover">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          {/* <Link to="/dashboard/app">Login</Link> */}
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}

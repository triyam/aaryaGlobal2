import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// material
import { Stack, TextField, IconButton, InputAdornment, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../dashboardComponents/Iconify';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    },
  });

  // const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  const { errors, touched, values, isSubmitting, getFieldProps } = formik;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    if (values.password === values.confirmPassword) {
      axios
        .post(
          'https://aryaglobal2.herokuapp.com/user/register',
          {
            username: values.firstName.concat(' ', values.lastName),
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
          },
          config
        )
        .then((response) => {
          console.log(response);
          // window.alert("Registration Successful!");
          console.log('Registration Successful!');
          navigate('/userLogin');
        })
        .catch((error) => {
          console.log(error);
          window.alert('Registration Failed ');
          console.log('Registration Failed');
        });
      // alert('Signup Success');
      console.log(values);
    } else {
      alert("Password Don't Match");
      console.log(values);
    }
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <TextField
            fullWidth
            autoComplete="current-password"
            type="text"
            label="Confirm Password"
            {...getFieldProps('confirmPassword')}
            // InputProps={{
            //   endAdornment: (
            //     <InputAdornment position="end">
            //       <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
            //         <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
            //       </IconButton>
            //     </InputAdornment>
            //   ),
            // }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          {/* <FormControl sx={{ mt: 2, minWidth: 480 }}>
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

          <LoadingButton fullwidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}

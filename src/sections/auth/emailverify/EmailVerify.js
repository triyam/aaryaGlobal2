import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import success from './success.png';
// import styles from "./styles.module.css";

const theme = createTheme();

const EmailVerify = () => {
  //   const navigate = useNavigate();
  const [validUrl, setValidUrl] = useState(true);
  const params = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      console.log(params);
      const URL = `https://aryaglobal2.herokuapp.com/${params.serviceId}/${params.userId}/verify/${params.token}`;
      axios
        .get(URL)
        .then((response) => {
          console.log(response.data);
          // window.alert("Login Successful!");
          console.log('Email Verification Successful');
          //   window.alert('Check your email address for reset link');
          setValidUrl(true);
        })
        .catch((error) => {
          console.log(error);
          // window.alert('Invalid Credentials!');
          console.log('Verification Failed');
          setValidUrl(false);
        });
      setValidUrl(true);
    };
    verifyEmailUrl();
  }, [params]);

  return (
    <ThemeProvider theme={theme}>
      {validUrl ? (
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={success} alt="success_img" />
          <h1>E-mail verified successfully</h1>
          <Link href="/home">
            <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Proceed to Login
            </Button>
          </Link>
        </Box>
      ) : (
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1>404 Not Found</h1>
        </Box>
      )}
    </ThemeProvider>
  );
};
export default EmailVerify;

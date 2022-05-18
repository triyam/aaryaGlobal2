
import Avatar from '@mui/material/Avatar';
import React, { useState } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


const currencies = [
  {
    value: "1",
    label: "1"
  },
  {
    value: "2",
    label: "2"
  },
  {
    value: "3",
    label: "3"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "5",
    label: "5"
  },
  {
    value: "6",
    label: "6"
  },
  {
    value: "7",
    label: "7"
  },
  {
    value: "8",
    label: "8"
  },
  {
    value: "9",
    label: "9"
  },
  {
    value: "10",
    label: "10"
  }
];


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [value, setValue] = React.useState(new Date());
  
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Enter your details here !!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <div>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
     
     <DesktopDatePicker
       label="For desktop"
       value={value}
       minDate={new Date('2017-01-01')}
       onChange={(newValue) => {
         setValue(newValue);
       }}
       renderInput={(params) => <TextField {...params} />}
     />
   
 </LocalizationProvider>

        <TextField
          id="outlined-select-currency-native"
          select
          label="泊"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true
          }}
          helperText=""
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="日帰り"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="宿泊日未定"
        />
      </div>

      <div>
        <TextField
          id="outlined-select-currency-native"
          select
          label="室"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true
          }}
          helperText=""
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="outlined-select-currency-native"
          select
          label="大人"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true
          }}
          helperText="1室ご利用人数"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="outlined-select-currency-native"
          select
          label="名 子供"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true
          }}
          helperText="1室ご利用人数"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <FormControlLabel control={<Checkbox defaultChecked />} label="全部" />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="ホテル"
        />
        <FormControlLabel control={<Checkbox defaultChecked />} label="旅館" />
      </div>
      <div>
        <TextField
          id="outlined-select-currency-native"
          select
          label="名 子供"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true
          }}
          helperText=""
          style={{ width: "45%" }}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>

      <div>
        <FormControlLabel control={<Checkbox defaultChecked />} label="禁煙" />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="露天風呂付客室"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="クラブフロア"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="スイート"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="朝食付"
        />
      </div>

      <div>
        <Button variant="outlined" color="error" style={{margin:"1%"}}>
          条件をクリア
        </Button>
        <Button variant="contained" color="success" style={{margin:"1%"}}>
          この条件で検索
        </Button>
      </div>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
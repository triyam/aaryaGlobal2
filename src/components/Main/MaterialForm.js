import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

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

export default function FormPropsTextFields() {

  const [value, setValue] = React.useState(new Date());
  
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
      style={{marginBottom:"2%"}}
    >
      <div className="text-center">
      <div>
        <h2 style={{margin:"1%"}}>宿泊検索</h2>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
     
     <DesktopDatePicker
       label="For desktop"
       value={value}
       minDate={new Date('2017-01-01')}
       onChange={(newValue) => {
         setValue(newValue);
       }}
       renderInput={(params) => <TextField {...params} />}
       style={{margin:"1%"}}
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
        
      </div>
      <div style={{margin:"1%"}}>
      <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="日帰り"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="宿泊日未定"
        />
      </div>

      <div style={{margin:"1%"}}>
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
      <div style={{margin:"1%"}}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="全部" />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="ホテル"
        />
        <FormControlLabel control={<Checkbox defaultChecked />} label="旅館" />
      </div>
      <div style={{margin:"1%"}}>
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

      <div style={{margin:"1%"}}>
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

      <div style={{margin:"1%"}}>
        <Button variant="outlined" color="error" style={{margin:"1%"}}>
          条件をクリア
        </Button>
        <Button variant="contained" color="success" style={{margin:"1%"}}>
          この条件で検索
        </Button>
      </div>
      </div>
    </Box>
  );
}

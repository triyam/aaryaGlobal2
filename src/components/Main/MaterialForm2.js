import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";


const currencies = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "7",
    label: "7",
  },
  {
    value: "8",
    label: "8",
  },
  {
    value: "9",
    label: "9",
  },
  {
    value: "10",
    label: "10",
  },
];

export default function SelectTextFields() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleDate = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 0.5, width: "20%" },
      }}
      noValidate
      autoComplete="off"
      style={{marginBottom:"5%"}}
    >
        {/* <Box
        component="fullWidth"
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    > */}

      <h2>ゴルフ場検索</h2>
      <div>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <TextField fullWidth label="fullWidth" id="fullWidth" />
      </div>
      {/* </Box> */}
      
      <div>
        <TextField
          id="outlined-select-currency-native"
          select
          label="室"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
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
            native: true,
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
            native: true,
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
        <FormGroup>
          <Stack direction="row" spacing={2}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="全部"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="ホテル"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="旅館"
            />
          </Stack>
        </FormGroup>
      </div>
      <div>
        <TextField
          id="outlined-select-currency-native"
          select
          label="名 子供"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
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
        <FormGroup>
          <Stack direction="row" spacing={2}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="禁煙"
            />
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
          </Stack>
        </FormGroup>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="日にち"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleDate}
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
              native: true,
            }}
            helperText=""
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <FormGroup>
            <Stack direction="row" spacing={2}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="日帰り"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="宿泊日未定"
              />
            </Stack>
          </FormGroup>
        </Stack>
      </div>

      {/* <div>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="error">
            条件をクリア
          </Button>
          <Button variant="contained" color="success">
            この条件で検索
          </Button>
        </Stack>
      </div> */}
    </Box>
    </>
  );
}

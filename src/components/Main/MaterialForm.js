<<<<<<< HEAD
import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Checkbox,
  Radio,
  Row,
  Col,
  Dropdown,
} from 'react-bootstrap';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
=======
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
>>>>>>> ef0adf022f1667fa0bbeb1d7f9bb71c7684f1cca

const MaterialForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
<<<<<<< HEAD
    <>
      <div style={{ padding: '10%' }}>
        <div style={{ borderStyle: 'dotted',borderColor:"red" }}>
          <Form style={{ padding: '5%' }}>
            <h1 style={{ textAlign: 'center',color:"red" }}>宿泊検索</h1>
            <Row style={{ float: 'center' }}>
              <Form.Group>
                <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="日帰り" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="宿泊日未定" />
              </Form.Group>
            </Row>
            <Row>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: 'white', color: 'black' }}>
                  泊
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">5</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">6</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">7</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">8</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">9</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              1室ご利用人数 大人
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: 'white', color: 'black' }}>
                  名
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">5</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">6</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">7</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">8</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">9</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: 'white', color: 'black' }}>
                  子供
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">0</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">5</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">6</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">7</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">8</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">9</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>

            <Row style={{ float: 'center' }}>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="全部" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="ホテル" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="旅館" />
              </Form.Group>
            </Row>

            <Row style={{ float: 'center' }}>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="禁煙" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="露天風呂付客室" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="クラブフロア" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="スイート" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="朝食付" />
              </Form.Group>
            </Row>
            <Row>
              <Dropdown style={{ width: '100%' }}>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    display: 'block',
                    width: '100%',
                    // border: "none",
                    // backgroundColor: "#04AA6D",
                    // color: "white",
                    // padding: "14px 28px",
                    // fontSize: "16px",
                    cursor: 'pointer',
                    textAlign: 'center',
                  }}
                >
                  北海道全域
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">北海道全域</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">5</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">6</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">7</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">8</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">9</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>
            <Row>
              <Col>
                <Button variant="primary" type="submit">
                  条件をクリア
                </Button>
              </Col>
              <Col>
                <Button variant="primary" type="submit" style={{ float: 'right', backgroundColor: 'red' }}>
                  この条件で検索
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
=======
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 0.5, width: "20%" },
      }}
      noValidate
      autoComplete="off"
      style={{marginBottom:"5%"}}
    >
      <h2>宿泊検索</h2>
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
          <Button variant="outlined" color="error">
            条件をクリア
          </Button>
          <Button variant="contained" color="success">
            この条件で検索
          </Button>
        </Stack>
>>>>>>> ef0adf022f1667fa0bbeb1d7f9bb71c7684f1cca
      </div>
    </>
  );
};

export default MaterialForm;

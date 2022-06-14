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

const MaterialForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
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
      </div>
    </>
  );
};

export default MaterialForm;

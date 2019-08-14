import React, { Component } from "react";
import Footer from "../../../layout/footer/footer";
import { Button, Form, Col } from "react-bootstrap";
import { MdHome } from "react-icons/md";
class Register extends Component {
  render() {
    return (
      <div>
        <div className="wrapperss">
          <div className="containers">
            <h1 className="head">Sign Up,</h1>
            <h3 className="head">Create your New Account</h3>
            <br />
            <div className="wrappers fadeInDown">
              <div id="formContent">
                <br />
                <div>
                  <a className="callback" href="/">
                    <MdHome />
                  </a>
                </div>
                <a href="/login">
                  <h2 className="inactive underlineHover" onClick="/login">
                    Sign In
                  </h2>
                </a>
                <a href="/register">
                  <h2 className="active">Sign Up </h2>
                </a>
                <Form>
                  {/* <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group> */}
                  <Form.Group
                    controlId="formGridAddress1"
                    className="fadeIn second"
                    style={{ paddingLeft: "8%", paddingRight: "8%" }}
                  >
                    <Form.Control
                      style={{ fontSize: "16px" }}
                      size="lg"
                      placeholder="อีเมล์"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formGridAddress1"
                    className="fadeIn second"
                    style={{ paddingLeft: "8%", paddingRight: "8%" }}
                  >
                    <Form.Control
                      style={{ fontSize: "16px" }}
                      type="t"
                      size="lg"
                      placeholder="ยืนยันอีเมล์"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formGridAddress1"
                    className="fadeIn second"
                    style={{ paddingLeft: "8%", paddingRight: "8%" }}
                  >
                    <Form.Control
                      style={{ fontSize: "16px" }}
                      size="lg"
                      type="t"
                      placeholder="รหัสผ่าน"
                    />
                  </Form.Group>
                  <Form.Row
                    className="fadeIn third"
                    style={{ paddingLeft: "8%", paddingRight: "8%" }}
                  >
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Control
                        style={{ fontSize: "16px" }}
                        size="lg"
                        type="Name"
                        placeholder="ชื่อ"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Control
                        style={{ fontSize: "16px" }}
                        size="lg"
                        type="Lastname"
                        placeholder="นามสกุล"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group
                    controlId="formGridAddress1"
                    className="fadeIn third"
                    style={{ paddingLeft: "8%", paddingRight: "8%" }}
                  >
                    <Form.Control
                      style={{ fontSize: "16px" }}
                      size="lg"
                      placeholder="เบอร์โทรศัพท์"
                    />
                  </Form.Group>
                  {/* <input
                    type="text"
                    id="login"
                    className="fadeIn second"
                    name="email"
                    placeholder="Email Address"
                  /> */}
                  {/* <input
                    type="text"
                    id="password"
                    className="fadeIn third"
                    name="password"
                    placeholder="Password"
                  /> */}
                  <br />
                  <Button variant="outline-success" size="lg">
                    Sign Up
                  </Button>
                  <br />
                  <br />
                </Form>
                <div id="formFooter">
                  มีบัญชีผู้ใช้แล้วคลิก
                  <a className="underlineHover" href="/login">
                    &nbsp;ลงชื่อเข้าใช้&nbsp;
                  </a>
                  เพื่อเข้าสู่ระบบ
                </div>
              </div>
            </div>
          </div>
          <ul className="bg-bubbles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;

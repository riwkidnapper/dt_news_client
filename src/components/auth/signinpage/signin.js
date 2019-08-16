import React, { Component } from "react";

import Footer from "../../../layout/footer/footer";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { green } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button, Form } from "react-bootstrap";
import { MdHome } from "react-icons/md";

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});
class Register extends Component {
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.body.classList.toggle("logins");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.body.classList.toggle("logins");
    }
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <Form>
          <Typography variant="h5" style={{ marginBottom: 24 }}>
            <h1 className="head">Sign Up,</h1>
            <h3 className="head">Create your New Account</h3>
          </Typography>
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
                <h2 className="inactive underlineHover"> Sign In </h2>
              </a>
              <a href="/register">
                <h2 className="active">Sign Up </h2>
              </a>
              <br />
              <ThemeProvider theme={theme}>
                <TextField
                  style={{ width: 350 }}
                  id="outlined-email-input"
                  label="Username"
                  className="username"
                  name="username"
                  autoComplete="username"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  style={{ width: 350 }}
                  id="outlined-email-input"
                  label="Email"
                  className="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  style={{ width: 350 }}
                  id="outlined-password-input"
                  label="Password"
                  className="Password"
                  type="Password"
                  name="Password"
                  autoComplete="Password"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  style={{ width: 350 }}
                  id="outlined-password-input"
                  label="Confirm Password"
                  className="Password"
                  type="Password"
                  name="Password"
                  autoComplete="Confirm Password"
                  margin="normal"
                  variant="outlined"
                />
              </ThemeProvider>
              <br />
              <br />
              <Button
                type="submit"
                className="button is-link"
                variant="outline-success"
                size="lg"
              >
                {"Sign Up"}
              </Button>
              <br />
              <br />
              <div id="formFooter">
                มีบัญชีผู้ใช้แล้วคลิก
                <a className="underlineHover" href="/login">
                  &nbsp;ลงชื่อเข้าใช้&nbsp;
                </a>
                เพื่อเข้าสู่ระบบ
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
          </div>
        </Form>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Register;

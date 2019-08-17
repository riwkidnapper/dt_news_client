import React, { Component } from "react";

import Footer from "../../../layout/footer/footer";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { InputAdornment } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Button, Form } from "react-bootstrap";
import { MdHome } from "react-icons/md";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: green
  },
  eye: {
    cursor: "pointer"
  }
});
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordIsMasked: true,
      showPassword: true
    };
  }

  togglePasswordMask = () => {
    this.setState(prevState => ({
      passwordIsMasked: !prevState.passwordIsMasked
    }));
  };

  toggleConfirmPasswordMask = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }));
  };

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
    const { passwordIsMasked, showPassword } = this.state;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <Form>
          <Typography variant="h1">Sign Up, </Typography>
          <Typography variant="h3">Create your New Account </Typography>
          <br />
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
                  name="Password"
                  autoComplete="Password"
                  margin="normal"
                  variant="outlined"
                  type={passwordIsMasked ? "password" : "text"}
                  {...this.props}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={this.togglePasswordMask}
                        >
                          {passwordIsMasked ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  style={{ width: 350 }}
                  id="outlined-password-input"
                  label="Confirm Password"
                  className="Password"
                  name="Password"
                  autoComplete="Confirm Password"
                  margin="normal"
                  variant="outlined"
                  type={showPassword ? "password" : "text"}
                  {...this.props}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={this.toggleConfirmPasswordMask}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
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

import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { InputAdornment } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import { Button, Form } from "react-bootstrap";

import "./admin.css";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#616161"
    }
  }
});
class admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordIsMasked: true
    };
  }

  togglePasswordMask = () => {
    this.setState(prevState => ({
      passwordIsMasked: !prevState.passwordIsMasked
    }));
  };

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.body.classList.toggle("login-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.body.classList.toggle("login-on");
    }
  }
  render() {
    const { passwordIsMasked } = this.state;
    return (
      <div className="admin">
        <Form>
          <div className="wrappers fadeInDown">
            <div id="formContentad">
              <br />
              <h2 className="form-signin-heading">Please Login</h2>
              <ThemeProvider theme={theme}>
                <TextField
                  style={{ width: 300 }}
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
                  style={{ width: 300 }}
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
              </ThemeProvider>
              <br />
              <br />

              <Button
                type="submit"
                size="lg"
                href="/admin/dashboard"
                variant="dark"
              >
                Login
              </Button>

              <br />
              <br />
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default admin;

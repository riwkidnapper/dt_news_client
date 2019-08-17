import React from "react";

import Footer from "../../../layout/footer/footer";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { InputAdornment } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { green } from "@material-ui/core/colors";

import { Button, Form } from "react-bootstrap";
import { MdHome } from "react-icons/md";
//import CircularProgress from "@material-ui/core/CircularProgress";

import "../css/login.css";

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});
class Login extends React.Component {
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
      document.body.classList.toggle("logins");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.body.classList.toggle("logins");
    }
  }

  render() {
    const { passwordIsMasked } = this.state;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <Form>
          <Typography variant="h1">Welcome Back,</Typography>
          <Typography variant="h3">Sign to continue</Typography>
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
                <h2 className="active"> Sign In </h2>
              </a>
              <a href="/register">
                <h2 className="inactive underlineHover">Sign Up </h2>
              </a>
              <br />
              <ThemeProvider theme={theme}>
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
              </ThemeProvider>
              <br />
              <br />
              <Button
                type="submit"
                className="button is-link"
                variant="outline-success"
                size="lg"
              >
                {"Login"}
              </Button>
              <br />
              <br />
              <div id="formFooter">
                <a className="underlineHover" href="/#">
                  Forgot Password?
                </a>
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

export default Login;

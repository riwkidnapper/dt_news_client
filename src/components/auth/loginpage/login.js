import React from "react";
// import { loginUser } from "../../../redux/actions/userActions";
import Footer from "../../../layout/footer/footer";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
// import CircularProgress from "@material-ui/core/CircularProgress";
import { InputAdornment } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { green } from "@material-ui/core/colors";

import { Button, Form, Spinner } from "react-bootstrap";
import { MdHome } from "react-icons/md";

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
      email: "",
      password: "",
      loading: false,
      errors: {},
      passwordIsMasked: true
    };
  }

  togglePasswordMask = () => {
    this.setState(prevState => ({
      passwordIsMasked: !prevState.passwordIsMasked
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    // const userData = {
    //   email: this.state.email,
    //   password: this.state.password
    // };
    this.props.history.push("/");
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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
    const { passwordIsMasked, errors, loading } = this.state;

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
              <form noValidate onSubmit={this.handleSubmit}>
                <ThemeProvider theme={theme}>
                  <TextField
                    style={{ width: 350 }}
                    id="outlined-email-input"
                    label="Email"
                    name="email"
                    className="email"
                    type="email"
                    helperText={errors.email}
                    error={errors.email ? true : false}
                    value={this.state.email}
                    onChange={this.handleChange}
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
                    helperText={errors.password}
                    error={errors.password ? true : false}
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
                  disabled={loading}
                >
                  {"Login"}
                  {
                    <Spinner
                      animation="border"
                      variant="success"
                      className="progress"
                    />
                  }
                </Button>
                <br />
                <br />
                <div id="formFooter">
                  <a className="underlineHover" href="/#">
                    Forgot Password?
                  </a>
                </div>
              </form>
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

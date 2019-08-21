import React, { Component } from "react";

import PropTypes from "prop-types";

import Footer from "../../../layout/footer/footer";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { InputAdornment } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import { Button, Form, Spinner } from "react-bootstrap";

import { green } from "@material-ui/core/colors";

import { MdHome } from "react-icons/md";

import { connect } from "react-redux";
import { signupUser } from "../../../redux/actions/userActions";

const theme = createMuiTheme({
  palette: {
    primary: green
  },
  eye: {
    cursor: "pointer"
  }
});
class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      errors: {},
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
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      username: this.state.username
    };
    this.props.signupUser(newUserData, this.props.history);
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {
      UI: { loading }
    } = this.props;
    const { passwordIsMasked, showPassword, errors } = this.state;
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

              {/* <Grid container>
                <form noValidate onSubmit={this.handleSubmit}>
                  <TextField
                    style={{ width: 350 }}
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    helperText={errors.email}
                    error={errors.email ? true : false}
                    value={this.state.email}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <TextField
                    style={{ width: 350 }}
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    helperText={errors.password}
                    error={errors.password ? true : false}
                    value={this.state.password}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <TextField
                    style={{ width: 350 }}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    helperText={errors.confirmPassword}
                    error={errors.confirmPassword ? true : false}
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  <TextField
                    style={{ width: 350 }}
                    id="handle"
                    name="handle"
                    type="text"
                    label="Handle"
                    helperText={errors.handle}
                    error={errors.handle ? true : false}
                    value={this.state.handle}
                    onChange={this.handleChange}
                    fullWidth
                  />
                  {errors.general && (
                    <Typography variant="body2">{errors.general}</Typography>
                  )}
                  <Button
                    type="submit"
                    className="button is-link"
                    variant="outline-success"
                    size="lg"
                    disabled={loading}
                  >
                    {"Sign Up"}
                    {loading && (
                      <Spinner
                        animation="border"
                        variant="success"
                        className="progress"
                      />
                    )}
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
                </form>
              </Grid> */}
              <Grid container>
                <form noValidate onSubmit={this.handleSubmit}>
                  <ThemeProvider theme={theme}>
                    <TextField
                      style={{ width: 350 }}
                      id="email"
                      label="Email"
                      className="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      margin="normal"
                      variant="outlined"
                      helperText={errors.email}
                      error={errors.email ? true : false}
                      value={this.state.email}
                      onChange={this.handleChange}
                      // id="email"
                      // name="email"
                      // type="email"
                      // label="Email"
                      // helperText={errors.email}
                      // error={errors.email ? true : false}
                      // value={this.state.email}
                      // onChange={this.handleChange}
                      // fullWidth
                    />
                    <TextField
                      style={{ width: 350 }}
                      id="outlined-password-input"
                      label="password"
                      className="password"
                      name="password"
                      autoComplete="password"
                      margin="normal"
                      variant="outlined"
                      helperText={errors.password}
                      error={errors.password ? true : false}
                      value={this.state.password}
                      onChange={this.handleChange}
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
                      // id="password"
                      // name="password"
                      // type="password"
                      // label="Password"
                      // helperText={errors.password}
                      // error={errors.password ? true : false}
                      // value={this.state.password}
                      // onChange={this.handleChange}
                      // fullWidth
                    />
                    <TextField
                      style={{ width: 350 }}
                      id="confirmPassword"
                      name="confirmPassword"
                      label="Confirm Password"
                      margin="normal"
                      variant="outlined"
                      helperText={errors.confirmPassword}
                      error={errors.confirmPassword ? true : false}
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                      type={showPassword ? "password" : "text"}
                      {...this.props}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={this.toggleConfirmPasswordMask}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      // id="confirmPassword"
                      // name="confirmPassword"
                      // type="password"
                      // label="Confirm Password"
                      // helperText={errors.confirmPassword}
                      // error={errors.confirmPassword ? true : false}
                      // value={this.state.confirmPassword}
                      // onChange={this.handleChange}
                      // fullWidth
                    />
                    <br /> <br />
                    <TextField
                      style={{ width: 350 }}
                      id="handle"
                      name="username"
                      type="text"
                      label="Username"
                      variant="outlined"
                      helperText={errors.username}
                      error={errors.username ? true : false}
                      value={this.state.username}
                      onChange={this.handleChange}
                      fullWidth
                    />
                  </ThemeProvider>

                  <br />
                  {errors.general && (
                    <Typography variant="body2" className="customError">
                      {errors.general}
                    </Typography>
                  )}
                  <br />

                  <Button
                    type="submit"
                    className="button is-link"
                    variant="outline-success"
                    size="lg"
                    disabled={loading}
                  >
                    {"Sign Up"}
                    {loading && (
                      <Spinner
                        animation="border"
                        variant="success"
                        className="progress"
                      />
                    )}
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
                </form>
              </Grid>
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

Register.propTypes = {
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

export default connect(
  mapStateToProps,
  { signupUser }
)(Register);

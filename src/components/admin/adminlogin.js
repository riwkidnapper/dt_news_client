import React, { Component } from "react";

import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { InputAdornment } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import { Button, Spinner } from "react-bootstrap";

import { connect } from "react-redux";
import { adminLogin } from "../../redux/actions/userActions";

import "./admin.css";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#616161"
    }
  }
});
class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
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

  handleSubmit = event => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.adminLogin(userData, this.props.history);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { passwordIsMasked, errors } = this.state;
    const {
      ui: { loading }
    } = this.props;

    return (
      <div className="admin">
        <form  onSubmit={this.handleSubmit}>
          <div className="wrappers fadeInDown">
            <div id="formContentad">
              <br />
              <h2 className="form-signin-heading">Please Login</h2>
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
                  id="password"
                  label="Password"
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
                />
              </ThemeProvider>
              <br />
              {errors.general && (
                <Typography variant="body2" className="customError">
                  {errors.general}
                </Typography>
              )}
              <br />

              <Button type="submit" size="lg" variant="dark" disabled={loading}>
                Login
                {loading && (
                  <Spinner
                    animation="border"
                    variant="white"
                    className="progress"
                  />
                )}
              </Button>

              <br />
              <br />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
AdminLogin.propTypes = {
  user: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  ui: state.ui
});

const mapActionsToProps = {
  adminLogin
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(AdminLogin);

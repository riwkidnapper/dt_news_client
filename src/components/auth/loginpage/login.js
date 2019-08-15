import React from "react";
import Footer from "../../../layout/footer/footer";
import { Button } from "react-bootstrap";
import "../css/login.css";
import { MdHome } from "react-icons/md";
//import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapperss">
          <div className="containers">
            <Typography variant="h5" style={{ marginBottom: 24 }}>
              <h1 className="head">Welcome Back,</h1>
              <h3 className="head">Sign to continue</h3>
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
                  <h2 className="active"> Sign In </h2>
                </a>
                <a href="/register">
                  <h2 className="inactive underlineHover">Sign Up </h2>
                </a>

                <div className="fadeIn first">
                  {/* <img
                    src="http://danielzawadzki.com/codepen/01/icon.svg"
                    id="icon"
                    alt="User Icon"
                  /> */}
                  User Icon
                </div>
                <form onSubmit={this.onSubmit}>
                  <input
                    className="fadeIn second"
                    type="email"
                    name="email"
                    onChange={this.onChange}
                  />
                  <input
                    className="fadeIn third"
                    type="password"
                    name="password"
                    onChange={this.onChange}
                  />
                  <br />
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
                </form>
                <div id="formFooter">
                  <a className="underlineHover" href="/#">
                    Forgot Password?
                  </a>
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

export default Login;

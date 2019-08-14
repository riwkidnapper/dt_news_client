import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import "./admin.css";

class admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
    return (
      <div className="admin">
        <Form className="form-signin">
          <h2 className="form-signin-heading">Please Login</h2>
          <br />
          <input
            type="emil"
            className="form-controls"
            name="username"
            placeholder="User Name"
            required=""
            autofocus=""
          />
          <br />
          <input
            type="password"
            className="form-controls"
            name="password"
            placeholder="Password"
            required=""
          />
          <Button href="/admin/dashboard" variant="dark" size="lg" block>
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default admin;

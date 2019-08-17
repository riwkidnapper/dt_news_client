import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import adminlogin from "./components/admin/adminlogin";
import AdminLayout from "./components/admin/layouts/admin";

import Login from "./components/auth/loginpage/login";
import Register from "./components/auth/signinpage/signin";

import aboutus from "./views/aboutus";
import addcredit from "./views/addcredit";
import confirmpay from "./views/confirmpay";
import contact from "./views/contact";
import Homepage from "./pages/homepage";
import postnews from "./views/postnews";
import updatenews from "./views/updatenews";

import Errorpage from "./pages/errorpage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/admin" component={adminlogin} />
            <Route
              exact
              path="/admin/dashboard"
              render={props => <AdminLayout {...props} />}
            />
            <Route
              exact
              path="/admin/user-page"
              render={props => <AdminLayout {...props} />}
            />
            <Route
              exact
              path="/admin/typography"
              render={props => <AdminLayout {...props} />}
            />
            <Route
              exact
              path="/admin/tables"
              render={props => <AdminLayout {...props} />}
            />
            <Route exact path="/aboutus" />
            <Route exact path="/addcredit" component={addcredit} />
            <Route exact path="/confirmpay" component={confirmpay} />
            <Route exact path="/contact" />
            <Route exact path="/postnews" component={postnews} />
            <Route exact path="/updatenews" component={updatenews} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={Errorpage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

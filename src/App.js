import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

import AuthRoute from "./util/AuthRoute";

import adminlogin from "./components/admin/adminlogin";
import AdminLayout from "./components/admin/layouts/admin";

import Login from "./components/auth/loginpage/login";
import Register from "./components/auth/signinpage/signin";

// import aboutus from "./views/aboutus";
import addcredit from "./views/addcredit";
import confirmpay from "./views/confirmpay";
// import contact from "./views/contact";
import postnews from "./views/postnews";
import updatenews from "./views/updatenews";

import Homepage from "./pages/homepage";
import Errorpage from "./pages/errorpage";

import axios from "axios";

import "./App.css";

axios.defaults.baseURL =
  "https://asia-east2-news-48fc7.cloudfunctions.net/webapi";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
              <AuthRoute exact path="/login" component={Login} />
              <AuthRoute exact path="/register" component={Register} />
              <Route path="*" component={Errorpage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

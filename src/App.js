import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

import ProtectedRoute from "./util/ProtectRoute";
import AdminRoute from "./util/AdminRoute";
import AuthRoute from "./util/AuthRoute";

import AdminLogin from "./components/admin/adminlogin";
import AdminLayout from "./components/admin/layouts/admin";

import Login from "./components/auth/loginpage/login";
import Register from "./components/auth/signinpage/signin";

// import aboutus from "./views/aboutus";
import AddCredit from "./views/addcredit";
import ConfirmPay from "./views/confirmpay";
import Payment from "./views/lib/payment";
// import contact from "./views/contact";
import PostNews from "./views/postnews";
import UpdateNews from "./views/updatenews";
import Admin from "./components/admin/layouts/admin";
import HomePage from "./pages/homepage";
import ErrorPage from "./pages/errorpage";
import Confirm from "./views/success";
import Consuccess from "./views/Consuccess";
import axios from "axios";

import "./App.css";

axios.defaults.baseURL =
  "https://us-central1-news-48fc7.cloudfunctions.net/webapi";

const token = localStorage.FBIdToken;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 + 50000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  isLoggedIn() {
    return this.state.isLoggedIn;
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <AdminRoute exact path="/admin" component={AdminLogin} />
            <ProtectedRoute
              exact
              path="/admin/dashboard"
              render={props => <AdminLayout {...props} />}
              component={Admin}
            />
            <ProtectedRoute
              exact
              path="/admin/user-page"
              render={props => <AdminLayout {...props} />}
              component={Admin}
            />
            <ProtectedRoute
              exact
              path="/admin/newspeper"
              render={props => <AdminLayout {...props} />}
              component={Admin}
            />
            <ProtectedRoute
              exact
              path="/admin/pagemodify"
              render={props => <AdminLayout {...props} />}
              component={Admin}
            />
            <Route exact path="/aboutus" />
            <Route exact path="/addcredit" component={AddCredit} />
            <Route exact path="/addcredit/payment" component={Payment} />
            <Route exact path="/addcredit/success" component={Consuccess} />
            <Route exact path="/confirmpay/success" component={Confirm} />
            <Route exact path="/confirmpay" component={ConfirmPay} />
            <Route exact path="/contact" />
            <Route exact path="/me" />
            <Route exact path="/postnews" component={PostNews} />
            <Route exact path="/downloadnews" component={UpdateNews} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React from "react";

import axios from "axios";
import jwtDecode from "jwt-decode";
import { logoutUser } from "../../../redux/actions/userActions";
import { Route, Switch, Redirect } from "react-router-dom";
import store from "../../../redux/store";
import { connect } from "react-redux";
import AdminNavbar from "../../Navbars/AdminNavbar";
import Footer from "../../footer/footer";
import Sidebar from "../../sidebar/sidebar";
import FixedPlugin from "../../fixedPlugin/fixedPlugin";
import routes from "../../../routes";
import PropTypes from "prop-types";
import "./adminlayout.css";
import { getUsers } from "../../../redux/actions/dataActions";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/";
  } else {
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUsers());
  }
}

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "success"
    };
    this.mainPanel = React.createRef();
  }

  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }

  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };

  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };

  render() {
    const {
      user: {
        credentials: { admin },
        authenticated
      }
    } = this.props;
    if (authenticated) {
      if (admin === true) {
        return (
          <div className="wrapper">
            <Sidebar
              {...this.props}
              routes={routes}
              bgColor={this.state.backgroundColor}
              activeColor={this.state.activeColor}
            />
            <div className="main-panel" ref={this.mainPanel}>
              <AdminNavbar {...this.props} />
              <Switch>
                {routes.map((prop, key) => {
                  return (
                    <Route
                      path={prop.layout + prop.path}
                      component={prop.component}
                      key={key}
                    />
                  );
                })}
              </Switch>
              <br />
              <br />
              <br />
              <Footer fluid />
            </div>
            <FixedPlugin
              bgColor={this.state.backgroundColor}
              activeColor={this.state.activeColor}
              handleActiveClick={this.handleActiveClick}
              handleBgClick={this.handleBgClick}
            />
          </div>
        );
      } else if (admin === false) {
        return <Redirect to="/" />;
      } else {
        return <div></div>;
      }
    } else {
      return <Redirect to="/" />;
    }
  }
}

Admin.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Admin);

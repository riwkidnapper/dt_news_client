import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to="/admin"
        />
      )
    }
  />
);
const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});
ProtectedRoute.propTypes = {
  user: PropTypes.object
};

export default connect(mapStateToProps)(ProtectedRoute);

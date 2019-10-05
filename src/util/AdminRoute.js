import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const AdminRoute = ({
  component: Component,
  Homepage,
  authenticated,
  credentials,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      authenticated === true ? (
        <Redirect to="/admin/dashboard" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
  credentials: state.user.credentials
});

AdminRoute.propTypes = {
  user: PropTypes.object
};

export default connect(mapStateToProps)(AdminRoute);

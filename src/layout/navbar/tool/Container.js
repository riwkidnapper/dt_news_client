import PropTypes from "prop-types";
import * as React from "react";

const Container = ({ children, animationDuration }) => (
  <div
    style={{
      pointerEvents: "none",
      transition: `opacity ${animationDuration}ms linear`
    }}
  >
    {children}
  </div>
);

Container.propTypes = {
  animationDuration: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

export default Container;

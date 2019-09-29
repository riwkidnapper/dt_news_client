import PropTypes from "prop-types";
import * as React from "react";

const Bar = ({ progress, animationDuration }) => (
  <div
    style={{
      background: "#c6e47f",
      height: 2,
      left: 0,
      marginLeft: `${(-1 + progress) * 300}%`,
      position: "fixed",
      top: 85,
      transition: `margin-left ${animationDuration}ms linear`,
      width: "100%",
      zIndex: 5000
    }}
  >
    <div
      style={{
        boxShadow: "0 0 10px #c6e47f, 0 0 5px #95be01da",
        display: "block",
        height: "100%",

        position: "absolute",
        right: 0,
        transform: "rotate(3deg) translate(0px, -4px)",
        width: 100
      }}
    />
  </div>
);

Bar.propTypes = {
  progress: PropTypes.number.isRequired
};

export default Bar;

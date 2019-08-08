import React from "react";
import { Link } from "react-router-dom";

const center = {
  textAlign: "center"
};

function error404(props) {
  return (
    <div>
      <h2 style={center}>The page {props.location.pathname} does not exist!</h2>
      <h3>
        Would you like to return <Link to="/">Homepage</Link> instead?
      </h3>
    </div>
  );
}

export default error404;

import React, { Component } from "react";

import Navbar from "../layout/navbar/navbar";
import Downloadnews from "./downloadnews";

import "../css/downloadnews.css";

export class updatenews extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Downloadnews />
      </div>
    );
  }
}

export default updatenews;

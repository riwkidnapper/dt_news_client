import React, { Component } from "react";

import Navbar from "../layout/navbar/navbar";
import Downloadnews from "./downloadnews";

import "../css/downloadnews.css";

export class updatenews extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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

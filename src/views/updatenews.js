import React, { Component } from "react";

import Header from "../layout/navbar/navbar";
import Downloadnews from "./downloadnews";

import "../css/downloadnews.css";

export class updatenews extends Component {
  render() {
    return (
      <div>
        <Header />
        <Downloadnews />
      </div>
    );
  }
}

export default updatenews;

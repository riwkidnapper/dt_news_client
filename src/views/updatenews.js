import React, { Component } from "react";

import NavBar from "../layout/navbar/navbar";
import DownloadNews from "./downloadnews";

import "../css/downloadnews.css";

export class UpdateNews extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <NavBar />
        <DownloadNews />
      </div>
    );
  }
}

export default UpdateNews;

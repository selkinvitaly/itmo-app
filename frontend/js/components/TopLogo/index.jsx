"use strict";

import React from "react";
import ReactDOM from "react-dom";

import classes from "./style.styl";

export default class extends React.Component {

  render() {
    return (
      <p className={classes.topLogo}>
        <a className={classes.topLogo__link} href="/">Itmo-App</a>
      </p>
    );
  }

};

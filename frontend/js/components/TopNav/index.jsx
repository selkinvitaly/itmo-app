"use strict";

import React from "react";
import ReactDOM from "react-dom";

import classes from "./style.styl";

export default class extends React.Component {

  render() {
    return (
      <menu className={classes.menu}>
        <li className={classes.menu__item}>
          <a className={classes.menu__link} href="/">Home</a>
        </li>
        <li className={classes.menu__item}>
          <a className={classes.menu__link} href="#">About</a>
        </li>
      </menu>
    );
  }

};

"use strict";

import React from "react";
import ReactDOM from "react-dom";

import classes from "./style.styl";

import TopNav from "../TopNav/";
import TopLang from "../TopLang/";
import TopLogo from "../TopLogo/";

export default class extends React.Component {

  render() {
    return (
      <header className={classes.header}>
        <div className={classes.headerMid}>
          <div className={classes.header__logo}>
            <TopLogo />
          </div>
          <div className={classes.header__nav}>
            <TopNav />
          </div>
          <div className={classes.header__lang}>
            <TopLang langs={this.props.langs} />
          </div>
        </div>
      </header>
    );
  }

};

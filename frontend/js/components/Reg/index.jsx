"use strict";

import React from "react";
import ReactDOM from "react-dom";

import classes from "./style.styl";

export default class extends React.Component {

  render() {
    return (
      <form method="post" action="reg" className={classes.reg}>
        <h2 className={classes.reg__title}>New to itmo-app?</h2>
        <p><input className={classes.reg__name} name="fullname" type="text" placeholder="Fullname" required /></p>
        <p><input className={classes.reg__email} type="email" placeholder="Email" required /></p>
        <p><input className={classes.reg__pw} type="password" placeholder="Password" required /></p>
        <p><input type="hidden" name="token" value="123" /></p>
        <p><input className={classes.reg__btn} type="submit" value="Sign up for itmo-app" /></p>
      </form>
    );
  }

};

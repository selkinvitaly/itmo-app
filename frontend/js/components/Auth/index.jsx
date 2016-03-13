"use strict";

import React from "react";
import ReactDOM from "react-dom";

import classes from "./style.styl";

export default class extends React.Component {

  render() {
    return (
      <form action="profile.html" className={classes.auth}>
        <p><input className={classes.auth__login} type="text" placeholder="Your login" required /></p>
        <p><input className={classes.auth__pw} type="password" placeholder="Your password" required /></p>
        <p><input className={classes.auth__btn} type="submit" value="Log in" /></p>
        <p><input type="hidden" name="token" value="123" /></p>
        <ul className={classes.authAdds}>
          <li className={classes.authRem}>
            <input className={classes.authRem__checkbox} id="auth-rem" type="checkbox" name="remember" />
            <label className={classes.authRem__label} htmlFor="auth-rem">Remember me</label>
          </li>
          <li className={classes.authForget}>
            <a className={classes.authForget__link} href="#">Forgot password?</a>
          </li>
        </ul>
      </form>
    );
  }

};

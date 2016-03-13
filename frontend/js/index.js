"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header/";
import HeaderBad from "./components/HeaderBad/";
import WelcomeTxt from "./components/WelcomeTxt/";
import WelcomeTxtBad from "./components/WelcomeTxtBad/";
import Auth from "./components/Auth/";
import AuthBad from "./components/AuthBad/";
import Reg from "./components/Reg/";

import { langStore } from "./stores/";

ReactDOM.render(<HeaderBad langs={langStore.getAll()} />, document.querySelector(".header-wrap"));
ReactDOM.render(<WelcomeTxtBad />, document.querySelector(".welcome-wrap"));
ReactDOM.render(<AuthBad />, document.querySelector(".auth-wrap"));
// ReactDOM.render(<Reg />, document.querySelector(".reg-wrap"));

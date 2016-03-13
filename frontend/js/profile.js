"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header/";
import NavSide from "./components/NavSide/";
import Content from "./components/Content/";

import { langStore, navsideStore} from "./stores";

ReactDOM.render(<Header langs={langStore.getAll()} />, document.querySelector(".header-wrap"));
ReactDOM.render(<NavSide items={navsideStore.getAll()} />, document.querySelector(".navside-wrap"));
ReactDOM.render(<Content />, document.querySelector(".content-wrap"));

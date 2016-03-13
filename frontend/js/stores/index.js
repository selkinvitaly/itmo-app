"use strict";

import LangStore from "./LangStore";
import NavSideStore from "./NavSideStore";

import { langs, menuItems } from "../data/";

const stores = {};

Object.assign(stores, {
  lang: new LangStore(stores, langs),
  navside: new NavSideStore(stores, menuItems)
});

export const langStore    = stores.lang;
export const navsideStore = stores.navside;

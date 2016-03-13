"use strict";

import dispatcher from "../dispatcher";
import { ACT_CHOOSE_MENU } from "../consts";

export function chooseMenu(id) {
  dispatcher.dispatch({
    type: ACT_CHOOSE_MENU,
    data: { id }
  });
};

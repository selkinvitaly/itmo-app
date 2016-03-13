"use strict";

import BaseStore from "./BaseStore";
import dispatcher from "../dispatcher";

import { ACT_CHOOSE_MENU, EVT_CHOOSE_MENU } from "../consts";

class NavSideStore extends BaseStore {

  constructor(...args) {
    super(...args);

    this._current = 0;

    dispatcher.register(action => {
      const { type, data } = action;

      switch (type) {
        case ACT_CHOOSE_MENU:
          this._current = data.id;
          this.updateSelectedMenu();
          break;
      }

    });
  }

  get currentPage() {
    return this._current;
  }

  addChooseMenuListener(cb) {
    this.on(EVT_CHOOSE_MENU, cb);
  }

  removeChooseMenuListener(cb) {
    this.removeListener(EVT_CHOOSE_MENU, cb);
  }

  updateSelectedMenu() {
    this.emit(EVT_CHOOSE_MENU);
  }


}

export default NavSideStore;

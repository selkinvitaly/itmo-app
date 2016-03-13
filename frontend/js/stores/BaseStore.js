"use strict";

import { EventEmitter } from "events";

class BaseStore extends EventEmitter {

  constructor(stores, items = []) {
    super();

    this._items = [];
    this._stores = stores;

    items.forEach(this.add.bind(this));
  }

  add(item) {
    this._items.push(item);
  }

  del(id) {
    this._items = this._items.filter(item => item.id !== id);
  }

  getAll() {
    return this._items.slice();
  }

}

export default BaseStore;

"use strict";

export default {

  closest(elem, selector, deep = 3) {
    while (deep-- && elem.matches && !elem.matches(selector)) {
      elem = elem.parentNode;
    }

    return elem.matches && elem.matches(selector) ? elem : null;
  }

};

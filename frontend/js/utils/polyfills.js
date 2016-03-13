"use strict";

// matches polyfill
window.Element && function(ElementPrototype) {
  ElementPrototype.matches = ElementPrototype.matches ||
  ElementPrototype.matchesSelector ||
  ElementPrototype.webkitMatchesSelector ||
  ElementPrototype.msMatchesSelector ||
  function(selector) {
    let node  = this;
    let nodes = (node.parentNode || node.document).querySelectorAll(selector);
    let i = -1;

    while (nodes[++i] && nodes[i] !== node);

    return !!nodes[i];
  }
}(Element.prototype);

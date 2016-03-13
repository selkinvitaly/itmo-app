"use strict";

import React, { Component } from "react";

import classes from "./style.styl";

class NavSideItem extends Component {

  getItem() {
    const classList = this.props.selected
      ? `${classes.navside__item} ${classes.navside__item_selected}`
      : classes.navside__item;

    return <li
      onClick={this.props.selectHandler}
      className={classList}>
        {this.props.item.title}
    </li>;
  }

  render() {
    return this.getItem();
  }

}

export default NavSideItem;

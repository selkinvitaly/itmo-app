"use strict";

import React, { Component } from "react";
import Item from "../NavSideItem";

import { navsideStore } from "../../stores/";
import * as actions from "../../actions/ui";

import classes from "./style.styl";

class NavSide extends Component {

  constructor() {
    super();

    this.state = {
      selected: navsideStore.currentPage
    };

    this._chooseMenu = () => {
      this.setState({
        selected: navsideStore.currentPage
      });
    };
  }

  componentDidMount() {
    navsideStore.addChooseMenuListener(this._chooseMenu);
  }

  componentWillUnmount() {
    navsideStore.removeChooseMenuListener(this._chooseMenu);
  }

  clickHandler(id) {
    return e => {
      actions.chooseMenu(id);
    };
  }


  getItems() {
    return this.props.items.map(item => {
      return <Item
        key={item.id}
        item={item}
        selectHandler={this.clickHandler(item.id)}
        selected={this.state.selected === item.id}
      />;
    });
  }

  render() {
    return <menu className={classes.navside}>
      {this.getItems()}
    </menu>
  }

}

export default NavSide;

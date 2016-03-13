"use strict";

import React from "react";
import ReactDOM from "react-dom";

import _ from "../../utils/helpers";

import classes from "./style.styl";

export default class extends React.Component {

  constructor() {
    super();
    this.state = {
      opened: false,
      currentLang: 0
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.hideHandler());
  }

  chooseHandler(id) {
    return e => {
      this.chooseLang(id);
    };
  }

  hideHandler() {
    return e => {
      let label = _.closest(e.target, "." + classes.langLabel, 1);
      let item  = _.closest(e.target, "." + classes.lang__item, 3);

      if (!label && !item) {
        this.hideList();
      }
    };
  }

  toggleHandler() {
    return e => {
      this.toggleList();
    };
  }

  chooseLang(id) {
    this.setState({
      opened: false,
      currentLang: id
    });
  }

  toggleList() {
    this.setState({
      opened: !this.state.opened
    });
  }

  hideList() {
    this.setState({
      opened: false
    });
  }

  getLangList() {
    return this.props.langs.map(lang =>
      <li onClick={this.chooseHandler(lang.id)} key={lang.id} className={classes.lang__item}>{lang.name}</li>
    );
  }

  getClassContainer() {
    return this.state.opened ? classes.lang + " " + classes.lang_opened : classes.lang;
  }

  getCurrentLabel() {
    return `${this.props.langs[this.state.currentLang].label}: ${this.props.langs[this.state.currentLang].name}`;
  }

  render() {
    return (
      <div className={this.getClassContainer()}>
        <div onClick={this.toggleHandler()} className={classes.langLabel}>
          <span className={classes.langLabel__txt}>{this.getCurrentLabel()}</span>
          <svg class={classes.langLabel__icn}>
            <use xlinkHref="assets/img/sprite.svg#arrow-down" />
          </svg>
        </div>
        <ul className={classes.lang__list}>
          {this.getLangList()}
        </ul>
      </div>
    );
  }

};

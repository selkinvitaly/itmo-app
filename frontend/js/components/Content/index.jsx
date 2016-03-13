"use strict";

import React, { Component } from "react";

import { navsideStore } from "../../stores/";

import classes from "./style.styl";

class Content extends Component {

  constructor() {
    super();

    this.state = {
      currentPage: navsideStore.currentPage
    };

    this._pages = {
      "MY_PAGE": 0,
      "ASSESSMENTS": 1,
      "SCHOLARSHIP": 2,
      "SETTINGS": 3,
      "HISTORY": 4
    };

    this._chooseMenu = () => {
      this.setState({
        currentPage: navsideStore.currentPage
      });
    };
  }

  componentDidMount() {
    navsideStore.addChooseMenuListener(this._chooseMenu);
  }

  componentWillUnmount() {
    navsideStore.removeChooseMenuListener(this._chooseMenu);
  }

  isVisiblePage(name) {
    let isCurrent = this.state.currentPage === this._pages[name];

    return !isCurrent ? { display: "none" } : null;
  }

  render() {
    return <div className={classes.wrap}>
      <section style={this.isVisiblePage("MY_PAGE")} className={classes.pgMyPage}>my page</section>
      <section style={this.isVisiblePage("ASSESSMENTS")} className={classes.pgAssessments}>my assessments</section>
      <section style={this.isVisiblePage("SCHOLARSHIP")} className={classes.pgScholarship}>my scholarship</section>
      <section style={this.isVisiblePage("SETTINGS")} className={classes.pgHistory}>my settings</section>
      <section style={this.isVisiblePage("HISTORY")} className={classes.pgSettings}>my history</section>
    </div>;
  }

}

export default Content;

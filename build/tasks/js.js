"use strict";

const gutil   = require("gulp-util");
const webpack = require("webpack");
const notify  = require("node-notifier");

module.exports = function(options) {
  let plugins = options && options.plugins;

  if (!plugins) {
    throw new gutil.PluginError("webpack", "js: incorrect config", {showStack: true});
  }

  return function(cb) {
    webpack(plugins.webpack, function(err, stats) {
      if (!err) {
        err = stats.toJson().errors[0];
      }

      if (err) {
        notify.notify({
          title: "JS task",
          message: err
        });
        throw new gutil.PluginError("webpack", err, {showStack: true});
      }

      gutil.log("[webpack]", stats.toString(plugins.webpackOutput));

      cb();
    });
  };

};

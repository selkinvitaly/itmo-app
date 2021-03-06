"use strict";

const stylus  = require("gulp-stylus");
const gulp    = require("gulp");
const gutil   = require("gulp-util");
const postcss = require("gulp-postcss");
const prefix  = require("autoprefixer");
const gulpIf  = require("gulp-if");
const smaps   = require("gulp-sourcemaps");
const csscomb = require("gulp-csscomb");
const notify  = require("gulp-notify");
const rev     = require("gulp-rev");

const isDev = require("../helpers/isDev");
const isWatched = require("../helpers/isWatched");

module.exports = function(options) {
  let src     = options && options.src;
  let dest    = options && options.dest;
  let plugins = options && options.plugins;

  let processors = [
    prefix(plugins.autoprefixer)
  ];

  if (!src || !dest || !plugins) {
    throw new gutil.PluginError("gulp-stylus", "css: incorrect config", {showStack: true});
  }

  return function() {
    return gulp.src(src)
      .pipe(gulpIf(isWatched, smaps.init()))
      .pipe(stylus(plugins.stylus))
      .on("error", notify.onError({ title: "CSS task" }))
      .pipe(postcss(processors))
      .pipe(gulpIf(isWatched, smaps.write()))
      .pipe(gulpIf(isDev, csscomb()))
      .pipe(gulpIf(!isDev, rev()))
      .pipe(gulp.dest(dest))
      .pipe(gulpIf(!isDev, rev.manifest(plugins.revOutput, plugins.rev)))
      .pipe(gulpIf(!isDev, gulp.dest(plugins.rev.base)));
  };

};

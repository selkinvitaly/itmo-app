"use strict";

const path  = require("path");
const isDev = require("../helpers/isDev");

module.exports = function(root) {
  let cfgWebpack = require("./webpack")(root);
  let tasks = {

    clean: {
      dest: "./dist/"
    },

    img: {
      src: ["./frontend/img/!(base64|sprite)", "./frontend/img/!(base64|sprite)/**/*.*"],
      dest: "./dist/assets/img/"
    },

    js: {
      src: "./frontend/js/*.js",
      dest: "./dist/assets/js/"
    },

    sprite: {
      src: ["./frontend/img/sprite/**/*.svg"],
      dest: "./dist/assets/img/"
    },

    bsync: {
      js: "./dist/assets/js/**/*.js",
      css: "./dist/assets/css/**/*.css",
      html: "./dist/**/*.html",
      img: "./dist/assets/img/content/**/*.*",
      sprite: "./dist/assets/img/sprite.svg"
    },

    css: {
      src: ["./frontend/css/*.styl"],
      dest: "./dist/assets/css/"
    },

    html: {
      dest: "./dist/",
      src: ["./frontend/html/*.jade"],
      basedir: "./frontend/html/"
    },

    watch: {
      css: "./frontend/css/**/*.styl",
      html: "./frontend/html/**/*.jade",
      img: "./frontend/img/content/**/*.*",
      sprite: "./frontend/img/sprite/**/*.svg"
    }

  };

  let plugins = {

    autoprefixer: {
      browsers: ["last 2 versions", "Firefox ESR", "ie >= 9"]
    },

    browserSync: {
      server: {
        baseDir: "dist/",
        index: "index.html"
      },
      ghostMode: false,
      ui: false,
      notify: false,
      open: false
    },

    stylus: {
      compress: !isDev
    },

    cheerio: {
      run: function($) {
        $("[fill]").removeAttr("fill");
        $("[style]").removeAttr("style");
      },
      parserOptions: { xmlMode: true }
    },

    svgSprite: {
      mode: {
        symbol: {
          dest: "./",
          bust: false,
          sprite: "sprite.svg"
        }
      },
      shape: {
        spacing: {
          box: "padding"
        }
      }
    },

    rev: {
      merge: true,
      base: "dist/"
    },

    revOutput: "dist/manifest.json",

    jadeInheritance: {
      basedir: tasks.html.basedir
    },

    imagemin: {
      progressive: true
    },

    jade: {
      pretty: isDev
    },

    webpack: cfgWebpack,

    webpackOutput: {
      hash: true,
      version: false,
      timings: true,
      assets: true,
      chunks: false,
      modules: false,
      cached: true,
      colors: true
    }

  };

  return {
    tasks: tasks,
    plugins: plugins
  };

};

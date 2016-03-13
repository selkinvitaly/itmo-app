"use strict";

const path      = require("path");
const hash      = require("../helpers/hash");
const isDev     = require("../helpers/isDev");
const isWatched = require("../helpers/isWatched");
const webpack   = require("webpack");
const autopref  = require("autoprefixer");
const AssetsPlugin = require("assets-webpack-plugin");

module.exports = function(root) {

  let options = {
    watch: isWatched,
    entry: {
      vendor: [
        "react",
        "react-dom",
        "classlist-polyfill",
        "./frontend/js/utils/polyfills",
        "./frontend/js/utils/helpers"
      ],
      index: ["./frontend/js/index"],
      profile: ["./frontend/js/profile"]
    },
    context: root,
    output: {
      path: path.join(root, "./dist/"),
      filename: hash("assets/js/[name].js", "chunkhash", isDev),
      chunkFilename: hash("assets/js/[id].js", "chunkhash", isDev),
      publicPath: "",
      pathinfo: isDev
    },
    debug: isWatched,
    devtool: isWatched ? "cheap-module-inline-source-map" : null,
    resolve: {
      modulesDirectories: ["node_modules"],
      extensions: ["", ".js", ".jsx"]
    },
    resolveLoader: {
      modulesDirectories: ["node_modules"],
      extensions: ["", ".loader.js", ".js"],
      moduleTemplates: ["*-loader", "*"]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: Infinity
      })
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: path.join(root, "./frontend/js/"),
          loader: "babel?presets[]=react,presets[]=es2015,presets[]=stage-0,plugins[]=transform-runtime"
        },
        {
          test: /\.styl$/,
          loader: isDev ? "style!css?modules!postcss!stylus?resolve url" : "style!css?minimize,modules!postcss!stylus?resolve url"
        }
      ]
    },
    postcss: function () {
      return [autopref({
        browsers: ["last 2 versions", "Firefox ESR", "ie >= 9"]
      })];
    }
  };

  // optimize
  if (!isDev) {
    options.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          "warnings": false,
          "drop_debugger": true,
          "drop_console" : true,
          "unsafe": true
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin()
    );
  }

  // JSON of assets for bundles
  if (!isDev) {
    options.plugins.push(new AssetsPlugin({
      path: path.join(root, "dist"),
      filename: "manifest.json",
      prettyPrint: true,
      update: true,
      processOutput(assets) {
        for (let key in assets) {
          if (typeof assets[key] === "string") continue;

          assets[key + ".js"] = assets[key].js.slice(options.output.publicPath.length);
          delete assets[key];
        }
        return JSON.stringify(assets);
      }
    }));
  }

  return options;
};

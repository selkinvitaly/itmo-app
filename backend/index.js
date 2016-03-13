"use strict";

const koa    = require("koa");
const path   = require("path");
const logger = require("koa-logger");
const route  = require("koa-route");
const app    = koa();

const db = {
  article: {
    id: 1,
    name: "hey"
  }
};

app.use(logger());

app.use(route.get("/test", function* () {
  this.type = "application/json";
  this.body = JSON.stringify(db);
}));

app.on("error", err => {
  console.log("sent error %s to the cloud", err.message);
  console.log(err);
});

app.listen(3001);

import path from "path";
import express from "express";
import proxy from "http-proxy-middleware";

const authLocalRoute = require("./routes/authLocal.js");
const userRoute = require("./routes//userRoute.js");
const passport = require("passport");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const validator = require("express-validator");
const logger = require("morgan");
const flash = require("connect-flash");
const cors = require("cors");
const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html"),
  devServerProxy = {
    "/search": {
      target: "https://api-v3.igdb.com",
      ws: false,
      changeOrigin: true,
      logLevel: "debug",
      onProxyRes: function(proxyRes, req, res) {
        proxyRes.headers["Allow-Access-Control-Origin"] = "*";
      },
      onProxyReq: function(proxyReq, req, res) {
        proxyReq.setHeader("Allow-Access-Control-Origin", "*");
      }
    },
    "/games": {
      target: "https://api-v3.igdb.com",
      ws: false,
      changeOrigin: true,
      logLevel: "debug",
      onProxyRes: function(proxyRes, req, res) {
        proxyRes.headers["Allow-Access-Control-Origin"] = "*";
      },
      onProxyReq: function(proxyReq, req, res) {
        proxyReq.setHeader("Allow-Access-Control-Origin", "*");
      }
    }
  };

const mongoDB =
  "mongodb://masterveloute:Heyheyhey3@ds131747.mlab.com:31747/gameapp_react";
mongoose.connect(mongoDB, { useNewUrlParser: true });
require("./passportConfig.js")(passport);

app.use(logger("dev"));

app.use(express.json());
app.use(
  session({
    secret: "dhfpaiojdhfopshdapfsapfoidnfopsangspd",
    resave: false,
    saveUninitialized: false
  })
);
app.use(flash());
app.use(
  validator({
    errorFormatter: function(param, msg, value) {
      let namespace = param.split("."),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += `[${namespace.shift()}]`;
      }

      return {
        param: formParam,
        msg,
        value
      };
    }
  })
);
// use passport
app.use(passport.initialize());
app.use(passport.session());

if (devServerProxy) {
  Object.keys(devServerProxy).forEach(context => {
    return app.use(proxy(context, devServerProxy[context]));
  });
}
//express routes
app.use("/authLocal", authLocalRoute);
app.use("/user", userRoute);

app.use(express.static(DIST_DIR));
app.use(cors());
app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});

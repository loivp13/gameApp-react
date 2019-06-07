import path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import historyApiFallback from "connect-history-api-fallback";
import config from "../../webpack.dev.config.js";
import cors from "cors";
import proxy from "http-proxy-middleware";

const authLocalRoute = require("./routes/authLocal.js");
const passport = require("passport");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const validator = require("express-validator");
const logger = require("morgan");
const flash = require("connect-flash");
const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html"),
  compiler = webpack(config),
  devServerProxy = config.devServer.proxy;

// connect to mongoDB
const mongoDB =
  "mongodb://masterveloute:Heyheyhey3@ds131747.mlab.com:31747/gameapp_react";
mongoose.connect(mongoDB, { useNewUrlParser: true });

require("./passportConfig.js")(passport);

app.use(logger("dev"));

app.use(express.json());

// app.use(express.urlencoded({ extended: false }));
// use cookieParser
app.use(cookieParser());

//use express-session
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

app.use(
  historyApiFallback({
    verbose: false
  })
);
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    logLevel: "silent"
  })
);
app.use(webpackHotMiddleware(compiler));

// use passport
app.use(passport.initialize());
app.use(passport.session());

//setup proxy route
if (devServerProxy) {
  Object.keys(devServerProxy).forEach(context => {
    return app.use(proxy(context, devServerProxy[context]));
  });
}
//express routes
app.use("/authLocal", authLocalRoute);

app.get("*", (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set("content-type", "text/html");
    res.sendFile(result);
    res.end();
  });
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});

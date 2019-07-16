/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/models/user.js":
/*!***********************************!*\
  !*** ./src/server/models/user.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\n\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\nvar userSchema = new Schema({\n  email: {\n    type: String,\n    required: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  username: {\n    type: String,\n    required: true\n  },\n  address: {\n    type: String,\n    required: true\n  },\n  city: {\n    type: String,\n    required: true\n  },\n  state: {\n    type: String,\n    required: true\n  },\n  zipcode: {\n    type: String,\n    required: true\n  },\n  cart: {\n    type: Object\n  },\n  wishList: {\n    type: Object\n  }\n});\n\nuserSchema.methods.encryptPassword = function (password) {\n  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);\n};\n\nuserSchema.methods.validPassword = function (password) {\n  return bcrypt.compareSync(password, this.password);\n};\n\nmodule.exports = mongoose.model(\"User\", userSchema);\n\n//# sourceURL=webpack:///./src/server/models/user.js?");

/***/ }),

/***/ "./src/server/passportConfig.js":
/*!**************************************!*\
  !*** ./src/server/passportConfig.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar User = __webpack_require__(/*! ./models/user.js */ \"./src/server/models/user.js\");\n\nvar LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\").Strategy; //how to store user in the session\n\n\nmodule.exports = function (passport) {\n  passport.serializeUser(function (user, done) {\n    done(null, user.id);\n  });\n  passport.deserializeUser(function (id, done) {\n    User.findById(id, function (err, user) {\n      done(err, user);\n    });\n  });\n  passport.use(\"local.signup\", new LocalStrategy({\n    usernameField: \"username\",\n    passwordField: \"password\",\n    passReqToCallback: true\n  }, function (req, username, password, done) {\n    //use express-validator to check\n    console.log(\"checking for if user exist\");\n    var _req$body = req.body,\n        email = _req$body.email,\n        address = _req$body.address,\n        city = _req$body.city,\n        state = _req$body.state,\n        zipcode = _req$body.zipcode;\n    User.findOne({\n      email: email\n    }, function (err, user) {\n      if (err) {\n        return done(err);\n      }\n\n      if (user) {\n        return done(null, false, req.flash(\"signupErrors\", \"This email has been taken\"));\n      }\n\n      var newUser = new User();\n      newUser.set({\n        email: email,\n        password: newUser.encryptPassword(password),\n        username: username,\n        address: address,\n        city: city,\n        state: state,\n        zipcode: zipcode\n      });\n      newUser.save(function (err, result) {\n        if (err) {\n          console.log(err);\n          return done(err);\n        }\n\n        return done(null, newUser);\n      });\n    });\n  }));\n  passport.use(\"local.signin\", new LocalStrategy({\n    usernameField: \"username\",\n    passwordField: \"password\",\n    passReqToCallback: true\n  }, function (req, username, password, done) {\n    User.findOne({\n      username: username\n    }, function (err, user) {\n      if (err) {\n        return done(err);\n      }\n\n      if (!user) {\n        return done(null, false, req.flash(\"loginError\", \"Incorrect username\"));\n      }\n\n      if (!user.validPassword(password)) {\n        return done(null, false, req.flash(\"loginError\", \"Incorrect password\"));\n      }\n\n      return done(null, user);\n    });\n  }));\n};\n\n//# sourceURL=webpack:///./src/server/passportConfig.js?");

/***/ }),

/***/ "./src/server/routes/authLocal.js":
/*!****************************************!*\
  !*** ./src/server/routes/authLocal.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar router = express.Router();\nrouter.post(\"/signup\", function (req, res, next) {\n  passport.authenticate(\"local.signup\", {\n    failureFlash: true\n  }, function (err, user, info) {\n    if (err) {\n      return next(err);\n    }\n\n    if (!user) {\n      return res.send({\n        error: req.flash(\"signupErrors\")\n      });\n    }\n\n    res.send(user.username);\n  })(req, res, next);\n});\nrouter.post(\"/signin\", function (req, res, next) {\n  passport.authenticate(\"local.signin\", {\n    failureFlash: true\n  }, function (err, user, info) {\n    if (err) {\n      return next(err);\n    }\n\n    if (!user) {\n      console.log(user);\n      return res.send({\n        error: req.flash(\"loginError\")\n      });\n    }\n\n    res.send(user.username);\n  })(req, res, next);\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/authLocal.js?");

/***/ }),

/***/ "./src/server/routes/userRoute.js":
/*!****************************************!*\
  !*** ./src/server/routes/userRoute.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar User = __webpack_require__(/*! ../models/user.js */ \"./src/server/models/user.js\");\n\nrouter.post(\"/addTo\", function (req, res, next) {\n  console.log(req.body);\n  User.find({\n    username: req.body.userid\n  }, function (err, user) {\n    if (err) {\n      res.send(\"Something went wrong with mLab\");\n    } else if (user.length === 0) {\n      res.send(\"No user found\");\n    } else {\n      console.log(user);\n    }\n  });\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/userRoute.js?");

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var connect_history_api_fallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! connect-history-api-fallback */ \"connect-history-api-fallback\");\n/* harmony import */ var connect_history_api_fallback__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(connect_history_api_fallback__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webpack.dev.config.js */ \"./webpack.dev.config.js\");\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! http-proxy-middleware */ \"http-proxy-middleware\");\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nvar authLocalRoute = __webpack_require__(/*! ./routes/authLocal.js */ \"./src/server/routes/authLocal.js\");\n\nvar userRoute = __webpack_require__(/*! ./routes//userRoute.js */ \"./src/server/routes/userRoute.js\");\n\nvar passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar validator = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nvar logger = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar flash = __webpack_require__(/*! connect-flash */ \"connect-flash\");\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()(),\n    DIST_DIR = __dirname,\n    HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(DIST_DIR, \"index.html\"),\n    compiler = webpack__WEBPACK_IMPORTED_MODULE_2___default()(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_6___default.a),\n    devServerProxy = _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_6___default.a.devServer.proxy; // connect to mongoDB\n\nvar mongoDB = \"mongodb://masterveloute:Heyheyhey3@ds131747.mlab.com:31747/gameapp_react\";\nmongoose.connect(mongoDB, {\n  useNewUrlParser: true\n});\n\n__webpack_require__(/*! ./passportConfig.js */ \"./src/server/passportConfig.js\")(passport);\n\napp.use(logger(\"dev\"));\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json()); // app.use(express.urlencoded({ extended: false }));\n// use cookieParser\n// app.use(cookieParser());\n// use express-session\n\napp.use(session({\n  secret: \"dhfpaiojdhfopshdapfsapfoidnfopsangspd\",\n  resave: false,\n  saveUninitialized: false\n}));\napp.use(flash());\napp.use(validator({\n  errorFormatter: function errorFormatter(param, msg, value) {\n    var namespace = param.split(\".\"),\n        root = namespace.shift(),\n        formParam = root;\n\n    while (namespace.length) {\n      formParam += \"[\".concat(namespace.shift(), \"]\");\n    }\n\n    return {\n      param: formParam,\n      msg: msg,\n      value: value\n    };\n  }\n}));\napp.use(connect_history_api_fallback__WEBPACK_IMPORTED_MODULE_5___default()({\n  verbose: false\n}));\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler, {\n  publicPath: _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_6___default.a.output.publicPath,\n  logLevel: \"silent\"\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default()(compiler)); // use passport\n\napp.use(passport.initialize());\napp.use(passport.session()); //setup proxy route\n\nif (devServerProxy) {\n  Object.keys(devServerProxy).forEach(function (context) {\n    return app.use(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_8___default()(context, devServerProxy[context]));\n  });\n} //express routes\n\n\napp.use(\"/authLocal\", authLocalRoute);\napp.use(\"/user\", userRoute);\napp.get(\"*\", function (req, res, next) {\n  compiler.outputFileSystem.readFile(HTML_FILE, function (err, result) {\n    if (err) {\n      return next(err);\n    }\n\n    res.set(\"content-type\", \"text/html\");\n    res.sendFile(result);\n    res.end();\n  });\n});\nvar PORT = process.env.PORT || 8080;\napp.listen(PORT, function () {\n  console.log(\"App listening to \".concat(PORT, \"....\"));\n  console.log(\"Press Ctrl+C to quit.\");\n});\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar Dotenv = __webpack_require__(/*! dotenv-webpack */ \"dotenv-webpack\");\n\nmodule.exports = {\n  entry: {\n    main: [\"webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&quiet=true\", \"./src/index.js\"]\n  },\n  output: {\n    path: path.join(__dirname, \"dist\"),\n    publicPath: \"/\",\n    filename: \"[name].js\"\n  },\n  mode: \"development\",\n  target: \"web\",\n  devtool: \"#source-map\",\n  module: {\n    rules: [{\n      enforce: \"pre\",\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: \"eslint-loader\",\n      options: {\n        emitWarning: true,\n        failOnError: false,\n        failOnWarning: false\n      }\n    }, {\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: \"babel-loader\"\n    }, {\n      // Loads the javacript into html template provided.\n      // Entry point is set below in HtmlWebPackPlugin in Plugins\n      test: /\\.html$/,\n      use: [{\n        loader: \"html-loader\" //options: { minimize: true }\n\n      }]\n    }, {\n      test: /\\.css$/,\n      use: [\"style-loader\", \"css-loader\"]\n    }, {\n      test: /\\.(png|svg|jpg|gif)$/,\n      use: [\"file-loader\"]\n    }]\n  },\n  devServer: {\n    noInfo: true,\n    historyApiFallback: true,\n    proxy: {\n      \"/search\": {\n        target: \"https://api-v3.igdb.com\",\n        ws: false,\n        changeOrigin: true,\n        logLevel: \"debug\",\n        onProxyRes: function onProxyRes(proxyRes, req, res) {\n          proxyRes.headers[\"Allow-Access-Control-Origin\"] = \"*\";\n        },\n        onProxyReq: function onProxyReq(proxyReq, req, res) {\n          proxyReq.setHeader(\"Allow-Access-Control-Origin\", \"*\");\n        }\n      },\n      \"/games\": {\n        target: \"https://api-v3.igdb.com\",\n        ws: false,\n        changeOrigin: true,\n        logLevel: \"debug\",\n        onProxyRes: function onProxyRes(proxyRes, req, res) {\n          proxyRes.headers[\"Allow-Access-Control-Origin\"] = \"*\";\n        },\n        onProxyReq: function onProxyReq(proxyReq, req, res) {\n          proxyReq.setHeader(\"Allow-Access-Control-Origin\", \"*\");\n        }\n      }\n    }\n  },\n  plugins: [new HtmlWebPackPlugin({\n    template: \"./src/html/index.html\",\n    filename: \"./index.html\",\n    excludeChunks: [\"server\"]\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin(), new Dotenv({\n    path: \".env.development\",\n    // load this now instead of the ones in '.env'\n    safe: true,\n    // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.\n    systemvars: true,\n    // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.\n    silent: true,\n    // hide any errors\n    defaults: false // load '.env.defaults' as the default values if empty.\n\n  })]\n};\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "connect-flash":
/*!********************************!*\
  !*** external "connect-flash" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-flash\");\n\n//# sourceURL=webpack:///external_%22connect-flash%22?");

/***/ }),

/***/ "connect-history-api-fallback":
/*!***********************************************!*\
  !*** external "connect-history-api-fallback" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-history-api-fallback\");\n\n//# sourceURL=webpack:///external_%22connect-history-api-fallback%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv-webpack":
/*!*********************************!*\
  !*** external "dotenv-webpack" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv-webpack\");\n\n//# sourceURL=webpack:///external_%22dotenv-webpack%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n\n//# sourceURL=webpack:///external_%22express-validator%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-proxy-middleware\");\n\n//# sourceURL=webpack:///external_%22http-proxy-middleware%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });
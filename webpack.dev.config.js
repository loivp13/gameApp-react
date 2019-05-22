const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const url = require("url");
const Dotenv = require("dotenv-webpack");
module.exports = {
  entry: {
    main: [
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&quiet=true",
      "./src/index.js"
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  mode: "development",
  target: "web",
  devtool: "#source-map",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
            //options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
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
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      filename: "./index.html",
      excludeChunks: ["server"]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new Dotenv({
      path: ".env.development", // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    })
  ]
};

const { container } = require("webpack");
const { merge } = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json");

const { ModuleFederationPlugin } = container;

const plugins = [
  new HtmlWebpackPlugin({
    template: "./public/index.html",
  }),
  new ModuleFederationPlugin({
    name: "dashboard",
    filename: "remoteEntry.js",
    exposes: {
      "./DashboardIndex": "./src/bootstrap",
    },
    shared: packageJSON.dependencies,
  }),
];

const config = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8083/",
  },
  devServer: {
    port: 8083,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8080",
    },
  },
  plugins,
};

module.exports = merge(commonConfig, config);

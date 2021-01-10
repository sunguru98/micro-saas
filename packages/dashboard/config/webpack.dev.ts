import merge from "webpack-merge";
import path from "path";
import { Configuration, WebpackPluginInstance, container } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

import commonConfig from "./webpack.common";
import packageJSON from "../package.json";

const { ModuleFederationPlugin } = container;

const plugins: WebpackPluginInstance[] = [
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

const config: Configuration = {
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

export default merge(commonConfig, config);

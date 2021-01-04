import merge from "webpack-merge";
import path from "path";

import { Configuration, WebpackPluginInstance, container } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

import commonConfig from "./webpack.common";
import packageJSON from "../package.json";

const { ModuleFederationPlugin } = container;

const plugins: WebpackPluginInstance[] = [
  new ModuleFederationPlugin({
    name: "auth",
    filename: "remoteEntry.js",
    exposes: {
      "./AuthIndex": "./src/bootstrap",
    },
    shared: packageJSON.dependencies,
  }),

  new HtmlWebpackPlugin({
    template: "./public/index.html",
  }),
];

const config: Configuration = {
  mode: "development",
  devServer: {
    port: 8082,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  plugins,
};

export default merge(commonConfig, config);

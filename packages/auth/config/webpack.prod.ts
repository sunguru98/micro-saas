import { Configuration, WebpackPluginInstance, container } from "webpack";
import merge from "webpack-merge";

import commonConfig from "./webpack.common";
import packageJSON from "../package.json";

const { ModuleFederationPlugin } = container;

const plugins: WebpackPluginInstance[] = [
  new ModuleFederationPlugin({
    name: "auth",
    exposes: {
      "./AuthIndex": "./src/bootstrap",
    },
    filename: "remoteEntry.js",
    shared: packageJSON.dependencies,
  }),
];

const config: Configuration = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/auth/latest/",
  },
  plugins,
};

export default merge(commonConfig, config);

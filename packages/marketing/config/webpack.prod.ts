import merge from "webpack-merge";
import { Configuration, container, WebpackPluginInstance } from "webpack";

import commonConfig from "./webpack.common";
import packageJSON from "../package.json";

const { ModuleFederationPlugin } = container;

const plugins: WebpackPluginInstance[] = [
  new ModuleFederationPlugin({
    name: "marketing",
    exposes: {
      "./MarketingIndex": "./src/bootstrap",
    },
    shared: packageJSON.dependencies,
  }),
];

const config: Configuration = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins,
};

export default merge(commonConfig, config);

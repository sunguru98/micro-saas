import merge from "webpack-merge";
import { Configuration, container } from "webpack";
import { WebpackPluginInstance } from "webpack";

import packageJSON from "../package.json";
import commonConfig from "./webpack.common";

const { ModuleFederationPlugin } = container;

const plugins: WebpackPluginInstance[] = [
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
  mode: "production",
  plugins,
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/dashboard/latest/",
  },
};

export default merge(commonConfig, config);

import { container, WebpackPluginInstance, Configuration } from "webpack";
import merge from "webpack-merge";

import commonConfig from "./webpack.common";
import packageJSON from "../package.json";

const { ModuleFederationPlugin } = container;
const domain: string = process.env.PROD_DOMAIN_URL!;

const plugins: WebpackPluginInstance[] = [
  new ModuleFederationPlugin({
    name: "container",
    remotes: {
      marketing: `marketing@${domain}/marketing/remoteEntry.js`,
    },
    shared: packageJSON.dependencies,
  }),
];

const config: Configuration = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins,
};

export default merge(commonConfig, config);

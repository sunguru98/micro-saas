import { Configuration, WebpackPluginInstance, container } from "webpack";
import path from "path";
import merge from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";

import commonConfig from "./webpack.common";
import packageJSON from "../package.json";

const plugins: WebpackPluginInstance[] = [
  new container.ModuleFederationPlugin({
    name: "marketing",
    filename: "remoteEntry.js",
    exposes: {
      "./MarketingIndex": "./src/bootstrap",
    },
  }),

  new HtmlWebpackPlugin({
    template: "public/index.html",
    shared: packageJSON.dependencies,
  }),
];

const config: Configuration = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  plugins,
};

export default merge(commonConfig, config);

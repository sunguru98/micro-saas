import { Configuration, WebpackPluginInstance, container } from "webpack";
import path from "path";
import merge from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

import commonConfig from "./webpack.common";
import packageJSON from "../package.json";

const plugins: WebpackPluginInstance[] = [
  new container.ModuleFederationPlugin({
    name: "marketing",
    filename: "remoteEntry.js",
    exposes: {
      "./MarketingIndex": "./src/bootstrap",
    },
    shared: packageJSON.dependencies,
  }),

  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),

  new CleanWebpackPlugin(),
];

const config: Configuration = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8081/",
  },
  devServer: {
    port: 8081,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  plugins,
};

export default merge(commonConfig, config);

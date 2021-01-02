import { Configuration, WebpackPluginInstance, container } from "webpack";
import path from "path";
import merge from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";

import commonConfig from "./webpack.common";
import packageJSON from "../package.json";

const plugins: WebpackPluginInstance[] = [
  new container.ModuleFederationPlugin({
    name: "container",
    remotes: {
      marketing: "marketing@http://localhost:8081/remoteEntry.js",
    },
    shared: packageJSON.dependencies,
  }),

  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),
];

const config: Configuration = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  plugins,
};

export default merge(commonConfig, config);

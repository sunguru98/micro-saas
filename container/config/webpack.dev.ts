import { Configuration, WebpackPluginInstance } from "webpack";
import merge from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";

import commonConfig from "./webpack.common";

const plugins: WebpackPluginInstance[] = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),
];

const config: Configuration = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
  plugins,
};

export default merge(commonConfig, config);

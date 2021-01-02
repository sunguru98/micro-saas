import { Configuration, Plugin } from "webpack";
import merge from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";

import commonConfig from "./webpack.common";

const plugins: Plugin[] = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),
];

const config: Configuration = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  plugins,
};

export default merge(commonConfig, config);

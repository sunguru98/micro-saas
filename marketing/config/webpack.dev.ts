import { Configuration, WebpackPluginInstance, container } from "webpack";
import merge from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";

import commonConfig from "./webpack.common";

const plugins: WebpackPluginInstance[] = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),
  new container.ModuleFederationPlugin({
    name: "marketing",
    filename: "remoteEntry.ts",
    exposes: {
      "./MarketingIndex": "./src/bootstrap.tsx",
    },
    // shared: {
    //   react: {
    //     eager: true,
    //   },
    // },
  }),
];

const config: Configuration = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
  plugins,
};

export default merge(commonConfig, config);

import { Configuration, WebpackPluginInstance } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const plugins: WebpackPluginInstance[] = [new CleanWebpackPlugin()];

const config: Configuration = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-typescript",
            "@babel/preset-env",
            "@babel/preset-react",
          ],
          plugins: ["@babel/plugin-transform-runtime"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins,
};

export default config;

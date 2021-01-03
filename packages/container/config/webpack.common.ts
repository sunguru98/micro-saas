import { Configuration, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const plugins: WebpackPluginInstance[] = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),
];

const config: Configuration = {
  entry: "./src/index",
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      // Babel (for JSX/TSX and React as well as Transpiling)
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

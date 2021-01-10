import { Configuration, WebpackPluginInstance } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { VueLoaderPlugin } from "vue-loader";

const plugins: WebpackPluginInstance[] = [
  new CleanWebpackPlugin(),
  new VueLoaderPlugin(),
];

const config: Configuration = {
  entry: "./src/index.js",
  module: {
    rules: [
      { test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i, loader: "file-loader" },
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.s?css$/,
        use: ["vue-style-loader", "sass-loader", "css-loader", "style-loader"],
      },
      {
        test: /\.m?js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"],
          plugins: ["@babel/plugin-transform-runtime"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".vue", ".ts", ".js"],
  },
  plugins,
};

export default config;

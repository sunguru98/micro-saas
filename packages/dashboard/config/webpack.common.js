const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const plugins = [new CleanWebpackPlugin(), new VueLoaderPlugin()];

const config = {
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

module.exports = config;

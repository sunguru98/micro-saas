import { Configuration } from "webpack";

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
};

export default config;

/* ALIAS RULES */
// rules: [
//   // Babel (for JSX/TSX and React as well as Transpiling)
//   {
//     test: /\.tsx?$/,
//     loader: "ts-loader",
//     exclude: /node_modules/,
//   },
//   {
//     test: /\.jsx?$/,
//     loader: "babel-loader",
//     exclude: /node_modules/,
//     options: {
//       presets: ["@babel/preset-react", "@babel/preset-env"],
//       plugins: ["@babel/plugin-transform-runtime"],
//     },
//   },
// ],

const { merge } = require("webpack-merge");
const { container } = require("webpack");
const packageJSON = require("../package.json");
const commonConfig = require("./webpack.common");

const { ModuleFederationPlugin } = container;

const plugins = [
  new ModuleFederationPlugin({
    name: "dashboard",
    filename: "remoteEntry.js",
    exposes: {
      "./DashboardIndex": "./src/bootstrap",
    },
    shared: packageJSON.dependencies,
  }),
];

const config = {
  mode: "production",
  plugins,
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/dashboard/latest/",
  },
};

export default merge(commonConfig, config);

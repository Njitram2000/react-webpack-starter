const path = require("path");
const webpack = require("webpack");

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: "./src/App.tsx",
  //context: path.resolve(__dirname, "src"),
  mode: "development",
  module: {
    rules: [
      // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
      {
        test: /\.(t|j)sx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      // addition - add source-map support
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@src': path.resolve(__dirname, 'src')
    },
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 9000,
    publicPath: "http://localhost:9000/dist/",
    hotOnly: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  // addition - add source-map support
  devtool: "source-map",
  node: { fs: 'empty', child_process: 'empty', net: 'empty' , tls: 'empty' },
};
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/App.jsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: { 'react-dom': '@hot-loader/react-dom'  }
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 45011,
    publicPath: "http://localhost:45011/dist/",
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
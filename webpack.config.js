const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: outputPath,
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [
      // importできるファイルの拡張子
      ".ts",
      ".tsx",
      ".js",
      ".json",
    ],
  },
  devtool: "inline-source-map", // sourcemapを使えるようにする
  devServer: {
    // 開発用のローカルサーバの設定
    contentBase: outputPath,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};

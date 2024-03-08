const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "production";
process.env.NODE_ENV === "production"
  ? (mode = "production")
  : (mode = "development");

module.exports = {
  mode: mode,
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
};

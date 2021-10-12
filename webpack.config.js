const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  target: "web",
  entry: {
    app: path.resolve(__dirname, "src/js", "index.js"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/index.html"),
          to: path.resolve(__dirname, "public/index.html"),
        },
        {
          from: path.resolve(__dirname, "src/contact.html"),
          to: path.resolve(__dirname, "public/contact.html"),
        },
        {
          from: path.resolve(__dirname, "src/media"),
          to: path.resolve(__dirname, "public/media"),
        },
        {
          from: path.resolve(__dirname, "src/css"),
          to: path.resolve(__dirname, "public/css"),
        },
      ],
    }),
  ],

  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "bundle.min.js",
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

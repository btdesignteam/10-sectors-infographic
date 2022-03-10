const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      publicPath: '',
      assetModuleFilename: 'images/[name][ext]'
   },
   devServer: {
       compress: true,
       port: 3000,
       open: true
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /[\\/]node_modules[\\/]/,
            use: {
               loader: 'babel-loader',
            },
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            // use: 'file-loader',
            type: 'asset/resource',
            generator: {
               filename: 'images/[name][ext]'
            },
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               MiniCssExtractPlugin.loader,
               "css-loader",
               "postcss-loader",
               "sass-loader",
            ]
         }
      ]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve(__dirname, 'public/index.html'),
         filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
         // Options similar to the same options in webpackOptions.output
         // both options are optional
         filename: "main.css",
         chunkFilename: "[id].css",
      }),
      new CopyPlugin({
         patterns: [
            { from: "public/data", to: "data" },
            { from: "public/images", to: "images" },
         ],
      }),
   ]
};
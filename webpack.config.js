const pathModule = require("path")
const htmlPlugin = require("html-webpack-plugin")
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: "bundle.js"
      , path: pathModule.resolve(__dirname, "dist"),
      assetModuleFilename: 'images/[name][ext]'
    },
    module:{
        rules: [
            {
              test: /\.css$/i,
              use:  [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader",
                ],
              },
        ]

    },
   
    plugins: [
      new htmlPlugin({template:"src/index.html"}),
      new MiniCssExtractPlugin({ filename: "styles.css" }),   
      new CssMinimizerPlugin()
    ],
    optimization:{
        minimize:true,
        minimizer:[
          
          "...",
          new ImageMinimizerPlugin({
            minimizerOptions: {
                
                plugins: [
                  ["gifsicle", { interlaced: true }],
                  ["mozjpeg",{quality:70}],
                  ["optipng", { optimizationLevel: 5 }],
          
                 ['svgo']
                ],
            },
          }),
        ]
      }
  }
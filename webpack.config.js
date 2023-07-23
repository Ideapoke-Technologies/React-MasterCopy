const path = require('path');
const HWP = require('html-webpack-plugin');
var webpack = require('webpack');
const Dotenv = require('dotenv-webpack');


module.exports = (env) => {
  return {
    entry: ['whatwg-fetch', path.join(__dirname, '/src/index.js')], //whatwg-fetch added to Support IE
    output: {
      filename: 'build.js',
      path: path.join(__dirname, '/dist'),
      publicPath: `${env.file == "" || env.file == undefined ? '/' : "/design/"}`
    },
    devtool: "inline-source-map",
    target: ['web', 'es5'],
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: {
                "ie": "11" //To Support IE
              }
            }]
          ]
        }
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 100000 } // Convert images < 8kb to base64 strings
        }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }]
    },
    devServer: { //This is required for routing - if page refreshes roting link should work
      historyApiFallback: true,
    },
    plugins: [
      new HWP(
        {
          template: path.join(__dirname, '/public/index.html'),
          //filename: 'dashboard.html'
        }), new webpack.ProvidePlugin({  //Added To Support in IE
          React: 'react',
          Promise: 'es6-promise'
        }),
      new Dotenv({
        path: `./environments/.env${env.file ? `.${env.file}` : ''}`
      })
    ]
  }
}
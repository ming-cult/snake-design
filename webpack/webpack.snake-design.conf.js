/*
 * 此配置文件暂时还未用到
 * 可以执行 node webpack/webpack.snake-design.conf.js查看打印
 */
const path = require("path")
const fs = require("fs")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

const publicPath = "/"

function resolve() {
  return path.resolve(__dirname, '..')
}

let webpackEntery = {}
// 获取多入口文件
function readFiles(dir = './components') {
  try {
    const files = fs.readdirSync(dir)
    files.forEach(fileName => {
      // 排除__test__测试文件
      if (fileName === '__test__') {
        return
      }
      const filePath = path.join(dir, fileName);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        readFiles(filePath)
      } else {
        // 只编译js文件
        if (/.(j|t)sx?$/.test(filePath)) {
          webpackEntery[filePath.replace(/(^components\/)|(.(j|t)sx?$)/g, '')] = filePath
          console.log('js:', filePath)
        }
        // 打印所有的scss|css文件
        if (/.s?css$/.test(filePath)) {
          console.log('css:', filePath)
        }
      }
    })
  } catch (err) {
    console.log(err)
  }
}
readFiles()

const projectRootPath = path.resolve(__dirname, '../');
const assetsPath = path.resolve(projectRootPath, './lib');

module.exports = {
  devtool: false,
  context: path.resolve(__dirname, '..'),
  entry: webpackEntery,
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "[name].js",
    publicPath: publicPath,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      components: resolve() + '/components',
      types: resolve() + '/types'
    }
  },

  module: {
    loaders: [
      {
        test: /\.(j|t)sx?$/,
        loader: "ts-loader",
        options: {
          configFile: '../tsconfig.lib.json'
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?importLoaders=2&minimize=true', 'postcss-loader', 'sass-loader']
        })
      },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=10240' }
    ]
  },
  plugins: [
    new CleanPlugin([assetsPath], { root: projectRootPath }),
    // css files from the extract-text-plugin loader
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
      IS_CLIENT: true,
      IS_SERVER: false,
      IS_DEVELOPMENT: false,
      ENABLE_DEVTOOLS: false,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]
};

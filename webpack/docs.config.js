const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = require('../config')

const publicPath = "/"

function resolve() {
  return path.resolve(__dirname,'..')
}

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    'main': [
      "./docs/app.tsx"
    ],
  },
  output: {
    path: path.resolve(__dirname, "../server/static"),
    filename: "[name]-[chunkhash:6].js",
    chunkFilename: '[name]-[chunkhash:6].js',
    publicPath: publicPath,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      components: resolve()  + '/components',
      types: resolve() + '/types',
      layout: resolve() + '/docs/layout',
      routes: resolve() + '/docs/routes',
      static: resolve() + '/docs/static'
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?importLoaders=2&minimize=true', 'postcss-loader']
        })
      },
      { test: /\.scss$/,
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
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../server/static/build/vendor/vendor-manifest.json')
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({filename: '[name]-[contenthash:6].css', allChunks: true}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
      IS_CLIENT: true,
      IS_SERVER: false,
      IS_DEVELOPMENT: false,
      ENABLE_DEVTOOLS: false,
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../server/views/index.ejs'),
      template: path.resolve(__dirname, '../docs/index.html'),
      inject: true,
      chunks: ['vendor', 'main'],
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      parallel: true,
      uglifyOptions: {
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }
    }),
    new FriendlyErrorsPlugin(),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};

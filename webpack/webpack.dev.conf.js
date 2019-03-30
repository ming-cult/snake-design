const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const config = require('../config')

const publicPath = "/"

function resolve() {
  return path.resolve(__dirname,'..')
}

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    'main': [
      "./docs/app.tsx"
    ],
    'vendor': [
      'react-hot-loader/patch',
    ]
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].js",
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
    loaders: [
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
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      { test: /\.scss$/,
        use: ['style-loader', 'css-loader?importLoaders=2', 'postcss-loader', 'sass-loader']
      },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=10240' }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../build/vendor/vendor-manifest.json')
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"localdev"',
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../docs/index.html'),
      inject: true,
      chunks: ['vendor', 'main'],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new FriendlyErrorsPlugin(),
    new OpenBrowserPlugin({
      url: `http://${config.host}:${config.port}`,
    }),
  ],
  devServer: {
    host: config.host,
    port: config.port,
    quiet: true,
    // noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { color: true, assets: true, assetsSort: "field", chunks: false },
    historyApiFallback: true
  }
};

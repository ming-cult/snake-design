const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = require('../config')

const publicPath = "./"

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
    path: path.resolve(__dirname, "../docsDist"),
    filename: "docs.js",
    chunkFilename: 'docs.js',
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
        loader: require.resolve('ts-loader'),
        exclude: /node_modules/
      },
      // {
      //   test: /\.md$/,
      //   loader: require.resolve('raw-loader')
      // },
      {
        test: /\.md$/,
        loader: `babel-loader!${path.join(__dirname, './addImportLoader.js')}`
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?importLoaders=2', 'postcss-loader', 'sass-loader']
      },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=10240' }
    ]
  },
  plugins: [
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
      template: path.resolve(__dirname, '../docs/index.html'),
      inject: true,
      chunks: ['main'],
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

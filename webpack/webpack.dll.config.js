const path = require('path');
const webpack = require('webpack');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const CleanPlugin = require('clean-webpack-plugin')
const projectRootPath = path.resolve(__dirname, '../');
// const dllPath = path.resolve(projectRootPath, './build/vendor');

const dllPath = process.env.NODE_ENV === 'production' ?
path.join(__dirname, '../server/static/build/vendor') :
path.join(__dirname, '../build/vendor')

const plugins = [
  new webpack.DllPlugin({
    /**
     * path
     * 定义 manifest 文件生成的位置
     * [name]的部分由entry的名字替换
     */
    path: path.join(dllPath, '[name]-manifest.json'),
    /**
     * name
     * dll bundle 输出到那个全局变量上
     * 和 output.library 一样即可。
     */
    context: __dirname,
    name: '[name]_library'
  })
]
const outputFileName = '[name].dll.js'
if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new CleanPlugin([dllPath], { root: projectRootPath }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ParallelUglifyPlugin({
      cacheDir: 'node_modules/.cache/uglifyjs_cache',
      sourceMap: true,
      uglifyJS: {
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }
    })
  )
}

module.exports = {
  mode: 'development',
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
    ]
  },
  output: {
    path: dllPath,
    filename: outputFileName,
    library: '[name]_library'
  },
  plugins: plugins
}

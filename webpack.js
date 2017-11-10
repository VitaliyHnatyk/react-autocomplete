const webpack = require('webpack')
module.exports = {
    entry: './src/index.js',
    output: {
      filename: './dist/react-autocomplete.js',
      libraryTarget: 'umd',
      library: 'ReactTable'
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
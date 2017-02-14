import path from 'path'
import nodeExternals from 'webpack-node-externals'

const DIR = path.resolve(__dirname, '../server/')

const babelConfig = {
  babelrc: false,
  presets: [['env', {
    targets: { node: 'current' },
    modules: false,
    useBuiltIns: true
  }], 'react']
}

export default {
  context: DIR,
  entry: './',
  output: {
    path: DIR,
    filename: 'server.bundle.js'
  },
  target: 'node',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: babelConfig
      }
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'css-loader/locals',
          options: {
            modules: true,
            localIdentName: '[folder]__[local]--[hash:base64:5]',
            camelCase: true
          }
        }
      ] 
    }]
  },
  devtool: 'source-map',
  performance: { hints: false },
  resolve: {
    modules: ['node_modules', 'shared'],
    extensions: ['.js', '.jsx', '.json']
  },
  externals: [ nodeExternals() ]
}

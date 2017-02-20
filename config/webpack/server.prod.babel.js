import path from 'path'
import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'
import baseConfig from './base.babel'

const DIR = path.resolve(__dirname, '../../server/')

export default baseConfig({
  // babel configuration
  targets: { node: 'current' }
}, {
  // webpack configuration
  context: DIR,
  entry: './',
  output: {
    path: DIR,
    filename: 'server.bundle.js'
  },
  target: 'node',
  jsExclude: /node_modules/,
  devtool: 'source-map',
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})

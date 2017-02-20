import path from 'path'
import webpack from 'webpack'
import config from 'config'
import baseConfig from './base.babel'

const ASSETS = path.resolve(__dirname, '..', config.get('publicDir'), 'assets')
const APPDIR = path.resolve(__dirname, '../../app')
const CLIENT = path.resolve(__dirname, '../../client.js')

const vendor = [
  'react',
  'react-dom',
  'redux',
  'react-router-dom',
  'react-redux',
  'redux-saga',
  'normalizr',
  'axios',
  'moment',
  'styled-components',
  'feathers/client',
  'feathers-rest/client',
  'feathers-socketio/client',
  'socket.io-client',
]

export default baseConfig({
  // babel configuration
  targets: { browsers: ['last 2 versions'] }
}, {
  // webpack configuration
  entry: {
    main: [
      CLIENT
    ],
    vendor
  },
  output: {
    path: path.join(ASSETS, 'javascript'),
    filename: '[name].bundle.js',
    publicPath: config.get('publicPath')
  },
  noParse: /\/server\//,
  jsInclude: [CLIENT, APPDIR],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: { screw_ie8: true },
      compress: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  devtool: 'source-map'
})

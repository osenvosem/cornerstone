import path from 'path'
import webpack from 'webpack'
import config from 'config'

const ASSETS = path.resolve(__dirname, config.get('public'), 'assets')
const APPDIR = path.resolve(__dirname, '../app')
const CLIENT = path.resolve(__dirname, '../client.js')

const babelConfig = {
  babelrc: false,
  presets: [[ 'env', {
    targets: { browsers: 'last 2 versions' },
    modules: false,
    useBuiltIns: true
  }], 'react' ],
  plugins: [ 'react-hot-loader/babel' ]
}

export default {
  entry: {
    main: [
      'react-hot-loader/patch',
      CLIENT
    ],
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-router-dom',
      'redux-saga',
      'normalizr',
      'axios',
      'moment'
    ]
  },
  output: {
    path: path.join(ASSETS, 'javascript'),
    filename: '[name].bundle.js',
    publicPath: '/assets/'
  },
  module: {
    noParse: /\/server\//,
    rules: [{
      test: /\.jsx?$/,
      include: [APPDIR, CLIENT],
      use: {
        loader: 'babel-loader',
        options: babelConfig
      }
    }, {
      test: /\.css$/,
      include: APPDIR,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[folder]__[local]--[hash:base64:5]',
            camelCase: true
          }
        }
      ] 
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'inline-source-map',
  performance: { hints: false },
  resolve: {
    modules: ['node_modules', 'shared'],
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    compress: true,
    hot: true,
    hotOnly: true,
    publicPath: '/assets/',
    proxy: {
      "*": "http://localhost:3000"
    }
  }
}

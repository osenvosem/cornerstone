import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'

export default function (b, w) {

  const babelConfig = {
    babelrc: false,
    presets: [[ 'env', {
      targets: b.targets,
      modules: false,
      useBuiltIns: true
    }], 'react' ],
    plugins: [
      'lodash',
      'styled-components',
      ...b.plugins || []
    ]
  }

  return {
    context: w.context || '',
    entry: w.entry,
    output: w.output,
    target: w.target || 'web',
    module: {
      noParse: w.noParse || /default_value/,
      rules: [{
        test: /\.jsx?$/,
        include: w.jsInclude,
        exclude: w.jsExclude,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        }
      }, ...w.rules || []]
    },
    performance: { hints: false },
    resolve: {
      modules: ['node_modules', 'shared'],
      extensions: ['.js', '.jsx', '.json']
    },
    devtool: w.devtool || 'source-map',
    plugins: [
      new LodashModuleReplacementPlugin(),
      ...w.plugins || []
    ],
    externals: w.externals || '',
    devServer: w.devServer || {}
  }
}

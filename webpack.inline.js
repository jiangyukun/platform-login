var path = require('path')
var webpack = require('webpack')
process.env.NODE_ENV = 'inline'

module.exports = [
  {
    // devtool: 'cheap-module-eval-source-map',
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/js/main/index.js'
    ],
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      port: 3000
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: 'http://localhost:3000/static/'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"inline"'
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      loaders: [
        {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/, include: __dirname},
        {test: /\.scss$/, loader: 'style!css!autoprefixer!sass?sourceMap'},
        {test: /\.(jpg|png)$/, loader: "url?limit=8192"}
      ]
    }
  }
]

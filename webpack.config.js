const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const pagesExtractCSS = new ExtractTextPlugin('[name].css', {allChunks: true})

module.exports = {
  entry: './src/main.js',
  output: {
    path: './public/assets',
    filename: 'script.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.js$/,
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        loader: pagesExtractCSS.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
        exclude: /(node_modules|\.global\.)/,
      }, {
        test: /\.css$/,
        loader: pagesExtractCSS.extract('style', 'css?modules&importLoaders=1&localIdentName=[local]!postcss-loader'),
        include: /\.global\./,
      }, {
        test: /\.css$/,
        loader: pagesExtractCSS.extract('style', 'css?modules&localIdentName=[local]'),
        include: /node_modules/,
      }, {
        test: /\.scss$/,
        loader: pagesExtractCSS.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!resolve-url!sass'),
        exclude: /(node_modules|\.global\.)/,
      }, {
        test: /\.scss$/,
        loader: pagesExtractCSS.extract('style', 'css?modules&importLoaders=1&localIdentName=[local]!postcss-loader!resolve-url!sass'),
        include: /\.global\./,
      }, {
        test: /\.scss$/,
        loader: pagesExtractCSS.extract('style', 'css?modules&localIdentName=[local]!resolve-url!sass'),
        include: /node_modules/,
      }
    ]
  },
  postcss: [
    require('postcss-flexbugs-fixes'),
    autoprefixer({
      browsers: ['last 2 versions'],
      remove: false,
    }),
  ],
  plugins: [
    pagesExtractCSS,
  ],
  devtool: 'source-map',
}

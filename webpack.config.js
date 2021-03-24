const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `public`)
  },
  devServer: {
    contentBase: path.resolve(__dirname, `public`),
    open: false,
    port: 1337,
    historyApiFallback: true //нужно для работы React-router
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        }
      },
      // настреиваем загрузчики для css и png для работы с пакетом leaflet
      {
        test: /\.css$/i,
        use: [`style-loader`, `css-loader`]
      },
      {
        test: /\.png$/i,
        use: [`file-loader`]
      }
    ],
  },
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  devtool: `source-map`,
};

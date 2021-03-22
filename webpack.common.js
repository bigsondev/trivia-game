const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    publicPath: "/"
  },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                },
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
};


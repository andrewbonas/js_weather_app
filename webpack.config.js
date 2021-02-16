const path = require('path');
//const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            ['@babel/preset-env', {
            useBuiltIns: "usage",
            corejs: 3,
          }]
        ]
        }
      }
    }
    ],
  },
  plugins: [new ESLintPlugin()],
};

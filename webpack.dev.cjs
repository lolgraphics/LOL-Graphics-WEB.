const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.cjs');

module.exports = (env) =>
  merge(common(env), {
    mode: 'development',
    entry: './src/main.tsx',
    output: {
      filename: 'bundle.[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(ts|tsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        },
      ],
      unknownContextCritical: false,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@Components': path.resolve(__dirname, 'src/components'),
        '@Pages': path.resolve(__dirname, 'src/Pages'),
        '@ProjectRedux': path.resolve(__dirname, 'src/redux'),
      },
    },
    stats: {
      errorDetails: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve('dist'),
      },
      hot: true,
      port: 5000,
    },
  });

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
          test: /\.(ts|tsx)$/,  // Alterado para arquivos .ts e .tsx
          exclude: /node_modules/,
          use: 'ts-loader',  // Usar ts-loader para arquivos TypeScript
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
      unknownContextCritical: false,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@Components': path.resolve(__dirname, 'src/components'),
        '@Utils': path.resolve(__dirname, 'src/utils'),
        '@Pages': path.resolve(__dirname, 'src/pages'),
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

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

require('dotenv').config({path: './.env'});

function generateRandomBundleName() {
  const randomNumber = Math.random().toString(36).substring(7);
  return `index.bundle.${randomNumber}.js`;
} 

module.exports = (env) => ({ 
  entry: 'src/main.tsx',
  output: { 
    path: path.resolve(__dirname, 'dist'),
    filename: generateRandomBundleName(),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
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
              '@babel/preset-typescript'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: `./.env.${env.goal}`,
    }),
  ]
})
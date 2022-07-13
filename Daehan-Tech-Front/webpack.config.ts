import path from 'path';

import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import DotenvPlugin from 'dotenv-webpack';

interface WebpackConfig extends webpack.Configuration {
  devServer?: webpackDevServer.Configuration;
}

const config: WebpackConfig = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@themes': path.resolve(__dirname, 'src/themes'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  ignoreWarnings: [/Failed to parse source map/],
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new DotenvPlugin(),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};

export default config;

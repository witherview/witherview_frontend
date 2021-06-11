const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = (env) => {
  const isAnalyze = env === 'isAnalyze';
  const isDevelopment = env === 'isDevelopment';

  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : 'hidden-source-map',
    entry: './src/index.tsx',
    optimization: isDevelopment
      ? {}
      : {
          minimizer: [
            new TerserWebpackPlugin({
              cache: true,
            }),
          ],
        },
    output: {
      filename: 'bundle.[hash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: 'url-loader',
          },
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.(ts|js)x?$/,
          include: path.resolve('src'),
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@atoms': path.resolve(__dirname, 'src/components/atoms'),
        '@molecules': path.resolve(__dirname, 'src/components/molecules'),
        '@organisms': path.resolve(__dirname, 'src/components/organisms'),
        // '@components': path.resolve(__dirname, 'src/components'),
        // '@templates': path.resolve(__dirname, 'src/pages/template'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@mocks': path.resolve(__dirname, 'src/mocks'),
        '@repository': path.resolve(__dirname, 'src/repository'),
        '@routes': path.resolve(__dirname, 'src/routes'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@style': path.resolve(__dirname, 'src/style'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@context': path.resolve(__dirname, 'src/context'),
        '@style': path.resolve(__dirname, 'src/style/'),
      },
    },

    plugins: isAnalyze
      ? [new BundleAnalyzerPlugin()]
      : [
          new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'favicon.png',
          }),
          new TsconfigPathsPlugin({
            configFile: path.resolve(__dirname, './tsconfig.json'),
          }),
        ],

    devServer: {
      host: 'localhost',
      port,
      stats: 'errors-only',
      open: true,
      historyApiFallback: true,
    },
  };
};

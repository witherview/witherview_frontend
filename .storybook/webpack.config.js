const path = require('path');

module.exports = async ({ config }) => {
  // styles
  config.module.rules.push({
    test: /\.(sass|scss)$/,
    use: ['resolve-url-loader'],
    include: path.resolve(__dirname, '../'),
  });

  // fonts
  config.module.rules.push({
    test: /\.(woff|woff2|eot|ttf|svg)$/,
    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.alias = {
    '@atoms': path.resolve(__dirname, '../src/components/atoms'),
    // '@molecule': path.resolve(__dirname, 'src/components/molecule'),
    // '@organism': path.resolve(__dirname, 'src/components/organism'),
    '@components': path.resolve(__dirname, '../src/components'),
    // '@templates': path.resolve(__dirname, 'src/pages/template'),
    '@pages': path.resolve(__dirname, '../src/pages'),
    '@assets': path.resolve(__dirname, '../src/assets'),
    '@hooks': path.resolve(__dirname, '../src/hooks'),
    '@mocks': path.resolve(__dirname, '../src/mocks'),
    '@repository': path.resolve(__dirname, '../src/repository'),
    '@routes': path.resolve(__dirname, 'src/routes'),
    '@store': path.resolve(__dirname, '../src/store'),
    '@utils': path.resolve(__dirname, '../src/utils'),
    '@context': path.resolve(__dirname, '../src/context'),
  };

  // don't forget to return.
  return config;
};

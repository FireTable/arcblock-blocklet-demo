const port = process.env.BLOCKLET_PORT || process.env.PORT || 3000;
const whenDev = process.env.NODE_ENV === 'development';

const webpackConfig = whenDev
  ? {
      configure: {
        output: {
          publicPath: '',
        },
      },
    }
  : {};

module.exports = {
  webpack: {
    ...webpackConfig,
  },
  devServer: {
    port,
    client: {
      // If you want to development this blocklet without blocklet-server, you can delete next line, otherwise the hot reload will be failed.
      webSocketURL: 'wss://0.0.0.0/ws',
    },
  },
};

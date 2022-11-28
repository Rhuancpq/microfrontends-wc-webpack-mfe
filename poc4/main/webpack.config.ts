import { container } from 'webpack';
const deps = require('./package.json').dependencies;

module.exports = {
  output: {
    publicPath: 'http://localhost:4201/',
    uniqueName: 'MainMicrofrontend',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  devServer: {
    port: 4201,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: 'MainMicrofrontend',
      filename: 'bundle.js',
      exposes: {
        './Microfrontend': './src/bootstrap.ts',
      },
    }),
  ],
};

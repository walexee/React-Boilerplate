import WebpackStrip from 'strip-loader';
import devConfig from './webpack.config.js';

var stripLoader = {
    test: [/\.js$/, /\.jsx/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.log')
}

devConfig.module.loaders.push(stripLoader);
devConfig.debug = false;
devConfig.noInfo = true;

export default devConfig;

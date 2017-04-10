import path from 'path';
import webpack from 'webpack';
import express from 'express';
import config from '../webpack.config';

const app = express();
const compiler = webpack(config);
const port = 3000;

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {chunks:false, colors:true}
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log(`Listening at http://localhost:${port}/`);
});

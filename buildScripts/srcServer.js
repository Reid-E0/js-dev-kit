import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
  })
);
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
  //pretend data to mock db
  res.json([
    {
      id: 1,
      firstName: 'Kilgore',
      lastName: 'Trout',
      email: 'kilgore@trout.com',
    },
    { id: 2, firstName: 'Tim', lastName: 'Norton', email: 'tnorton@email.com' },
    { id: 3, firstName: 'Tina', lastName: 'Belcher', email: 'tb@burgers.com' },
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

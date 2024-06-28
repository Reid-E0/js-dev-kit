/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
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

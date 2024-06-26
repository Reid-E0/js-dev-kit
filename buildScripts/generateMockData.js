/* generates mock data for local development*/
/* eslint-disable no-console*/
const { generate, extend } = require('json-schema-faker');

import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

extend('faker', () => require('faker'));
const json = JSON.stringify(generate(schema));

fs.writeFile('./src/api/db.json', json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green('Database Generated'));
  }
});

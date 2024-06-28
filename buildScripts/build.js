/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(
  chalk.blue('Generating minified bundle for prod. Please be patient...')
);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map((error) => console.log(chalk.red(error)));
  }
  console.log(`Webpack stats: ${stats}`);

  console.log(chalk.green('Your app is ready for prod in /dist'));

  return 0;
});

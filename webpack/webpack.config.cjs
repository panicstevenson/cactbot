'use strict';

const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cactbotModules = {
  config: 'ui/config/config',
  coverage: 'util/coverage/coverage',
  rdmty: 'ui/dps/rdmty/dps',
  xephero: 'ui/dps/xephero/xephero',
  eureka: 'ui/eureka/eureka',
  fisher: 'ui/fisher/fisher',
  jobs: 'ui/jobs/jobs',
  oopsyraidsy: 'ui/oopsyraidsy/oopsyraidsy',
  pullcounter: 'ui/pullcounter/pullcounter',
  radar: 'ui/radar/radar',
  raidboss: 'ui/raidboss/raidboss',
  raidemulator: 'ui/raidboss/raidemulator',
  test: 'ui/test/test',
};

const cactbotChunks = {
  raidbossData: 'ui/common/raidboss_data',
  oopsyraidsyData: 'ui/common/oopsyraidsy_data',
};

const cactbotHtmlChunksMap = {
  'ui/config/config.html': {
    chunks: [
      cactbotChunks.raidbossData,
      cactbotChunks.oopsyraidsyData,
      cactbotModules.config,
    ],
  },
  'util/coverage/coverage.html': {
    chunks: [
      cactbotChunks.raidbossData,
      cactbotChunks.oopsyraidsyData,
      cactbotModules.coverage,
    ],
  },
  'ui/dps/rdmty/dps.html': {
    chunks: [
      cactbotModules.rdmty,
    ],
  },
  'ui/dps/xephero/xephero-cactbot.html': {
    chunks: [
      cactbotModules.xephero,
    ],
  },
  'ui/eureka/eureka.html': {
    chunks: [
      cactbotModules.eureka,
    ],
  },
  'ui/fisher/fisher.html': {
    chunks: [
      cactbotModules.fisher,
    ],
  },
  'ui/jobs/jobs.html': {
    chunks: [
      cactbotModules.jobs,
    ],
  },
  'ui/oopsyraidsy/oopsyraidsy.html': {
    chunks: [
      cactbotChunks.oopsyraidsyData,
      cactbotModules.oopsyraidsy,
    ],
  },
  'ui/pullcounter/pullcounter.html': {
    chunks: [
      cactbotModules.pullcounter,
    ],
  },
  'ui/radar/radar.html': {
    chunks: [
      cactbotModules.radar,
    ],
  },
  'ui/raidboss/raidboss.html': {
    chunks: [
      cactbotChunks.raidbossData,
      cactbotModules.raidboss,
    ],
  },
  'ui/raidboss/raidemulator.html': {
    chunks: [
      cactbotChunks.raidbossData,
      cactbotModules.raidemulator,
    ],
  },
  'ui/test/test.html': {
    chunks: [
      cactbotModules.test,
    ],
  },
};

module.exports = function(env, argv) {
  const dev = argv.mode === 'development';

  const entries = {};
  Object.entries(cactbotModules).forEach(([key, module]) => {
    // TDOO: Remove when everything is TypeScript, convert to:
    // entries[module] = `./${module}.ts`;
    let extension = 'js';
    if (['radar', 'raidboss', 'test'].includes(key))
      extension = 'ts';
    entries[module] = `./${module}.${extension}`;
  });

  const htmlPluginRules = Object.entries(cactbotHtmlChunksMap).map(([file, config]) => {
    return new HtmlWebpackPlugin({
      template: file,
      filename: file,
      ...config,
    });
  });

  return {
    entry: {
      ...entries,
      ...(() => dev ? ({ timerbar: './resources/timerbar.ts' }) : ({}))(),
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          'raidboss_data': {
            test: /[\\/]ui[\\/]raidboss[\\/]data[\\/]/,
            name: cactbotChunks.raidbossData,
            chunks: 'all',
          },
          'oopsyraidsy_data': {
            test: /[\\/]ui[\\/]oopsyraidsy[\\/]data[\\/]/,
            name: cactbotChunks.oopsyraidsyData,
            chunks: 'all',
          },
        },
      },
    },
    devtool: dev ? 'source-map' : undefined,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist'),
    },
    devServer: { writeToDisk: true },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          // Worker has to go before normal js
          test: /NetworkLogConverterWorker\.(?:c|m)?js$/,
          loader: 'worker-loader',
          options: {
            esModule: true,
            inline: 'fallback',
            worker: {
              type: 'Worker',
              options: {
                type: 'classic',
                name: 'NetworkLogConverterWorker',
              },
            },
          },
          resolve: {
            fullySpecified: false,
          },
        },
        {
          // this will allow importing without extension in js files.
          test: /\.m?js$/,
          exclude: /node_modules/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.ts$/,
          loader: 'ts-loader',
        },
        {
          test: /\.css$/,
          exclude: /(pullcounter)\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          // TODO: Convert all css to use these loaders
          test: /(pullcounter)\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '',
              },
            },
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            },
          ],
        },
        {
          test: /data[\\\/]\w*_manifest\.txt$/,
          use: [
            {
              loader: './webpack/loaders/manifest-loader.cjs',
            },
          ],
        },
        {
          test: /data[\\\/](?!\w*_manifest\.txt).*\.txt$/,
          use: [
            {
              loader: 'raw-loader',
            },
            {
              loader: './webpack/loaders/timeline-loader.cjs',
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin({}),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        // TODO: Update to [name].css
        filename: 'pullcounter.css',
      }),
      ...htmlPluginRules,
    ],
    stats: {
      children: true,
    },
  };
};

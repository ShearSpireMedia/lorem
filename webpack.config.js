const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

const entryObject = {index: { import: './src/index.js', filename: './src/[name].js' }};
const patternsArray = [
    { from: "./index.html", to: "./index.html" },
    { from: "./css", to: "./css" }
];

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

module.exports = {
    mode: 'production',
    entry: entryObject,
    output: {
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new CopyPlugin({
            patterns: patternsArray,
        }),
    ],
    resolve: { },
    module: {
      rules: [],
    },
    optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
          minRemainingSize: 0,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          enforceSizeThreshold: 50000,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      },
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },


    devServer: {
        open: true
    }
};

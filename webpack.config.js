const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bleh.js',
    path: path.resolve(__dirname, 'dist')
  }
};

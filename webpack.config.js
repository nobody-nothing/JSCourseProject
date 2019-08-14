
module.exports = {
  entry: './blocks/block.js',
  output: {
    filename: './toolkit.js'
  },

    watch: true,
    devtool: "eval-source-map",
    module: {

      rules: [
          {
              test: /\.js$/,
              use: {
                loader: 'babel-loader',
                 options: {
                    presets: ['babel-preset-env']
                 }
              }
          }, {
              test: /\.pug$/,
              use: 'pug-loader'
          }, {
              test: /\.scss$/,
              use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'

              ]
          }

      ]
  }
};

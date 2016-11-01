module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  loaders: [
    {
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }
  ]
};

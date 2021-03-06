const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // the output bundle won't be optimized for production but suitable for development
  mode: 'development',
  // the app entry point is /src/index.js
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
  	// the output of the webpack build will be in /dist directory
    path: path.resolve(__dirname, 'dist'),
    // the filename of the JS bundle will be bundle.js
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },

  module: {
    rules: [
      {
      	// for any file with a suffix of js or jsx
        test: /\.(js|jsx)?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        use: {
          loader: 'babel-loader'
        },
      }, 
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        },
        
      },
      {
        test: /\.(png|jpg|svg|jpg)$/,
        type: 'asset/resource'
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3006,
    historyApiFallback: true,
    contentBase: './',
    hot: true
},
  
  // add a custom index.html as the template
  plugins: [
     
    new HtmlWebpackPlugin({ 
      injects: true,
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: './index.html'
    })
  ]
};
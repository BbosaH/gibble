
const webpack =require('webpack');
const path = require('path');

module.exports ={
  entry :{

    app :'./client/app/app.jsx',

  },
  output :{
    path : __dirname,
    filename: './client/bundle.js'
  },
  resolve :{

  	alias : {

      redux_store :path.resolve(__dirname, 'client/app/store/redux-store.jsx/'),
      logging : path.resolve(__dirname,'client/app/middlewares/logging.jsx'),
      combined_reducer : path.resolve(__dirname,'client/app/reducers/index.jsx'),

  	},
  	extensions : ['.js','.jsx']

  },
  module : {
  	loaders:[
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude :/(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=1000000"
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?limit=1000000"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=node_modules/bootstrap/fonts/[name].[ext]'
      },
      { test: /\.json$/, loader: 'json-loader' }
  		
  	]
  }
}
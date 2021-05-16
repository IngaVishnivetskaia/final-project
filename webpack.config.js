const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
  mode: "development",

  output: {
     publicPath: '/'
  },

  module: {

    rules: [

        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },


        //loading pokemon images PNG only
        {
            test: /\.png$/,
            use: [ 
                { 
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[name]-[sha1:hash:7].[ext]'
                      }
            
                },        
                ]
        },

          // Loading fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      },

      // Loading CSS
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
        // use: [ MiniCssExtractPlugin.loader, 'css-loader']
      },

      // Loading SASS/SCSS
      {
        test: /\.(s[ca]ss)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
      }
    ]


},
      plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main-[hash:8].css'
          })
      ],

      devServer: {
        open: true,
        historyApiFallback: true
      }
};
const path = require('path');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),  // 动态获取路径
    filename: 'bundle.js',
    publicPath: "dist/",  // 经过
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin("Lynch！")
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: "url-loader",
          options: {
            name: 'img/[name].[hash:8].[ext]'
          },
        }]
      },
      {
        test: /\.js&/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      }

    ]
  },
  
  resolve: {  // 重新指向，导入的指向
    extensions: [".vue"],
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  }
}
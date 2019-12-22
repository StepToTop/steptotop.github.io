const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var webpack = require('webpack');

module.exports = {
    devServer: {
        port: 3000,
        progress: true,

    },
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),  // 一定要绝对路径
        publicPath: "dist/",
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'  // 针对template
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'  // 针对script
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {}
                    },
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader', // 针对style
                    'style-loader',
                    'css-loader',
                    // {  // 先放一下，先用scope（不行，要追求）
                    /*
                    * 但是这个module到底解决了什么痛点呢？结合前辈的博客：http://www.mamicode.com/info-detail-2427137.html
                    * 我大致感知一下所谓的痛点：
                    *   1、存在冲突。先知道CSS存在一种Layout的规则机制：后面的样式会覆盖掉前面的。所以有了模块化的想法。
                    *       方案：原本模块化的css实现就得通过namespace
                    *   2、嵌套层次太深了，就会有比较。开销非常大。可拓展性也不好。
                    *   3、代码冗余：区分开了模块之后，还是可能会有很多重复容易的CSS样式。
                    * 然后前辈提了一些方案：
                    *   1、常见的CSS预处理器（Sass/Less）说来惭愧，我没用过。
                    *   2、BEM（Block Element Modifier）也不知道这个是啥。
                    *       查了一下这个懂了，就是——只有B E M三级
                    *       看起来是一种命名规则
                    *   3、CSS Modules
                    *       命名哈希化——Scope
                    *       模块引入机制
                    *       解决嵌套层次过深的问题——应该就哈希化？
                    * */
                    //     loader: 'css-loader',
                    //     options: {
                    //         modules: true,
                    //         localIdentName: '[local]_[hash:base64:8]'
                    //     }
                    // }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
};
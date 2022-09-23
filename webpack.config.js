const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinicssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@styles': path.resolve(__dirname,'src/styles/'),
            '@icons': path.resolve(__dirname,'src/assets/icons/'),
            '@imgs': path.resolve(__dirname,'src/assets/imgs/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:[
                     {
                    loader: 'babel-loader',
                     }
                ]   
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                         "style-loader",
                         "css-loader", 
                         "sass-loader"
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset'
            }
        ]
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MinicssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        
        historyApiFallback:true
    }
}
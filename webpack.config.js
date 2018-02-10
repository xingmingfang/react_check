const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        bundle: './main.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [{
                test: /(\.js|\.jsx)$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules/')
            },
            {
                test: /\.css|\.scss|\.sass$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'NODE.ENV': JSON.stringify("development")
        })
    ],
    devServer: {
        open: true,
        port: 8081,
        inline: true,
        noInfo: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'eval-source-map'
}
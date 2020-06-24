const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', // development production
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './dist/mplayer.js',
        library: {
            root: 'MPlayer',
            amd: 'mplayer',
            commonjs: 'mplayer'
        },
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this',
        publicPath: "",
    },
    devtool: 'eval‐source‐map',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        publicPath: '/',
    }
}
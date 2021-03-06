var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test : /\.(js)$/, use: 'babel-loader'},
            {test : /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    mode:'production',
    plugins : [
        new HtmlWebpackPlugin ({
            template: './index.html'
        })
    ]
}

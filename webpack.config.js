const path = require('path')
const Plugin1 = require('./plugin/plugin1')
const LicenseWebpackPlugin = require('./plugin/license-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './test.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: path.resolve('./loader/loader1.js'),
                        // loader: path.resolve('./loader/async-loader.js'),
                    },
                ]
            }
        ]
    },
    plugins: [
        new Plugin1(),
        new LicenseWebpackPlugin()
    ]
}
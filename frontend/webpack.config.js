const path = require('path');

const config = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{ 
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        publicPath: "/cms",
        contentBase: path.join(__dirname, 'public')
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = config

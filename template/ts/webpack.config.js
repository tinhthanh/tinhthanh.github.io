const { CheckerPlugin } = require('awesome-typescript-loader');
const { join } = require('path');
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        background: join(__dirname, 'src/background.ts'),
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        path: join(__dirname, '../src/assets/js'),
        filename: '[name].js'
    },
    plugins: [
        new CheckerPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
};

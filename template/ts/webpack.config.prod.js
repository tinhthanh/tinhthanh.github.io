const { CheckerPlugin } = require('awesome-typescript-loader');
const { join } = require('path');
const { optimize } = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        background: join(__dirname, 'src/background.ts')
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
        new CheckerPlugin(),
        new optimize.AggressiveMergingPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
};

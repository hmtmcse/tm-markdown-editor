var path = require('path');

module.exports = {
    entry: './react-app/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'react-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["transform-class-properties"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
};


const path = require("path");
const webpack = require("webpack");

const srcPath = path.join(__dirname, ".");

module.exports = {
    entry: "./main.js",
    devtool: "inline-source-map",
    output: {
        path: srcPath,
        filename: "bundle.js"
    },
    node: {
        fs: "empty"
    },
    target: "node",
    mode: "development",
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "eslint-loader",
                }
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env"
                        ],
                        "plugins": [
                            "transform-object-rest-spread"
                        ]
                    }
                }
            },
        ]
    },
    devServer: {
        contentBase: srcPath,
        compress: false,
        port: 8080
    }
};

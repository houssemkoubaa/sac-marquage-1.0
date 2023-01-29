module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_models/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}
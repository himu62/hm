module.exports = {
    entry: __dirname + "/src/index.tsx",
    output: {
        path: __dirname + "/../public_html",
        filename: "script.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    "devtool": process.env.NODE_ENV === "production" ? false : "inline-source-map"
};

const path = require("path")

module.exports = {
    entry: "./scr/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}

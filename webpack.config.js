module.exports = {
  mode: "production",

  entry: "./src/js/main.js",
  output: {
    //  出力先
    path: `${__dirname}/public/assets/js`,
    // 出力ファイル
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ]
            }
          }
        ]
      }
    ]
  }
};
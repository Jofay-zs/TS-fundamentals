module.exports = {
  mode: "production", // Modo de ejecucion
  entry: "./src/main.ts", // El punto de entrada para webpack
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // resolve: Extensiones que soporta nuestro proyecto
  resolve: {
    extensions: [".ts", ".js"],
  },
  // output: Indica el nombre de nuestro archivo resultante
  output: {
    filename: "bundle.js",
  },
};

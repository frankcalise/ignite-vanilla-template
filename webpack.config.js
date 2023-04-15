const path = require("path")

const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const appDirectory = path.resolve(__dirname)
const { presets } = require(`${appDirectory}/babel.config.js`)

const compileNodeModules = [
  // Add every react-native package that needs compiling
  "react-native-gesture-handler",
  "react-native-reanimated",
].map((moduleName) => path.resolve(appDirectory, `node_modules/${moduleName}`))

const babelLoaderConfiguration = {
  test: /\.js$|tsx?$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname, "index.web.js"), // Entry to your application
    path.resolve(__dirname, "app"),
    ...compileNodeModules,
  ],
  use: {
    loader: "babel-loader",
    options: {
      cacheDirectory: true,
      presets,
      plugins: ["react-native-web"],
    },
  },
}

const svgLoaderConfiguration = {
  test: /\.svg$/,
  use: [
    {
      loader: "@svgr/webpack",
    },
  ],
}

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png)$/,
  type: "asset/inline",
}

const fontLoaderConfiguration = {
  test: /\.(woff(2)?|ttf|eot|otf)$/,
  type: "asset/resource",
}

const cssLoaderConfiguration = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
}

module.exports = {
  entry: ["babel-polyfill", path.join(__dirname, "index.web.js")],
  output: {
    path: path.resolve(appDirectory, "dist"),
    publicPath: "/",
    filename: "rnw.bundle.js",
  },
  resolve: {
    // web extension order is important, must come first
    extensions: [".web.tsx", ".web.ts", ".web.js", ".tsx", ".ts", ".js"],
    alias: {
      "react-native$": "react-native-web",
    },
  },
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      svgLoaderConfiguration,
      fontLoaderConfiguration,
      cssLoaderConfiguration,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
    }),
    new webpack.EnvironmentPlugin({ JEST_WORKER_ID: null }),
    new webpack.DefinePlugin({
      // See: https://github.com/necolas/react-native-web/issues/349
      __DEV__: JSON.stringify(true),
      process: { env: {} },
    }),
  ],
}

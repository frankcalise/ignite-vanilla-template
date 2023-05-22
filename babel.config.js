const plugins = [
  [
    "@babel/plugin-proposal-decorators",
    {
      legacy: true,
    },
  ],
  ["@babel/plugin-proposal-optional-catch-binding"],
  "@babel/plugin-proposal-export-namespace-from",
]

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins,
}

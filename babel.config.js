module.exports = function(api) {
  api.cache(true);
  return {
    presets: [["module:metro-react-native-babel-preset"], ["react-app"]],
    ignore: ["node_modules/art/core/color.js"],
    plugins: [
      "@babel/plugin-transform-arrow-functions",
      [
        "@babel/plugin-proposal-class-properties",
        {
          loose: true
        }
      ],
      [
        "module-resolver",
        {
          alias: {
            "^react-native$": "react-native-web"
          }
        }
      ]
    ]
  };
};

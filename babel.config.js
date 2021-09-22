module.exports = function (api) {
  api.cache(true);
  const plugins = ["transform-es2015-modules-commonjs"];
  const presets = [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    "@babel/preset-react",
    "transform-es2015-modules-commonjs",
  ];
  // ["@babel/preset-env", "@babel/preset-react"];

  return {
    presets,
    plugins,
  };
};

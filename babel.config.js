module.exports = function (api) {
  api.cache(true);
  const presets = [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ];
  // ["@babel/preset-env", "@babel/preset-react"];

  return {
    presets,
  };
};

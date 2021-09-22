module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  // roots: ["<rootDir>/src/test"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  collectCoverage: true,
  coverageReporters: ["lcov"],
  moduleDirectories: ["src", "node_modules"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
    },
  },
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  transform: {
    "^.+\\.(js|jsx|ts)$": "babel-jest",
    "^.+\\.(css|scss)$": "identity-obj-proxy",
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.svg": "<rootDir>/fileTransformer.ts",
  },
  transformIgnorePatterns: [
    "^.+\\.module\\.(css|sass|scss)$",
    "/node_modules/(?!lit-html).+\\.js",
    "!<rootDir>/node_modules/@here/hds-react-components"
  ],
  verbose: false
};

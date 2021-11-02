module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    __REDUX_DEVTOOLS_EXTENSION__: true,
  },
  rules: {
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": ["error"]
  }
};

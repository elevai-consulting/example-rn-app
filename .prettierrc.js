module.exports = {
  printWidth: 100,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: '**/*.yml',
      options: {
        singleQuote: false,
      },
    },
  ],
};

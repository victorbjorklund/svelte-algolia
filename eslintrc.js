module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [`eslint:recommended`],
  parserOptions: {
    sourceType: `module`,
  },
  rules: {
    indent: [`error`, 2, { SwitchCase: 1 }],
    quotes: [`error`, `backtick`, { avoidEscape: true }],
    semi: [`error`, `never`],
    'linebreak-style': [`error`, `unix`],
    'no-console': [`error`, { allow: [`warn`, `error`] }],
    'no-var': `error`,
    'spaced-comment': [`error`, `always`],
  },
}
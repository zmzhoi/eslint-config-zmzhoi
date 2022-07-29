module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  rules: {
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'func-names': 0,
    'react/require-default-props': 0,
    'no-unused-vars': 1,
    'no-console': 0,
    'react/react-in-jsx-scope': 0,
    'react/forbid-prop-types': 0,
    'no-restricted-exports': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'no-shadow': 0,
    'react/no-array-index-key': 0,
    'no-debugger': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'no-return-assign': 0,
    'arrow-body-style': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'import/no-named-as-default-member': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent', 'index'],
          'object',
        ],
        pathGroups: [
          {
            pattern: '~**/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
};

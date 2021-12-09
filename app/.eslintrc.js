module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'never'],
    'no-unused-vars': ['error', {
      vars: 'all', args: 'after-used', ignoreRestSiblings: true, argsIgnorePattern: '^_',
    }],
    'space-before-function-paren': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off',
    camelcase: 'off',
    'no-shadow': ['error', { allow: ['done', 'data', 'error', 'cb', 'resolve', 'reject'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
}

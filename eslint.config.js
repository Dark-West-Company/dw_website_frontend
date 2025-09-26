import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginSvelte from 'eslint-plugin-svelte';
import pluginPrettier from 'eslint-config-prettier';

export default [
  pluginJs.configs.recommended,
  pluginPrettier,
  ...pluginSvelte.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
];

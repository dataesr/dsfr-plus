import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'example-ts'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  jsxA11y.flatConfigs.strict,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // Types are the source of truth; no runtime prop-types.
      'react/prop-types': 'off',
      // Components are wrapped in forwardRef/polyRef and named by their variable.
      'react/display-name': 'off',
      // Library entry points re-export several components per file.
      'react-refresh/only-export-components': 'off',

      // The DSFR markup requires these roles (see systeme-de-design.gouv.fr):
      // <dialog role="dialog"> for the Modale, <ul role="tablist"> for the Onglets.
      'jsx-a11y/no-redundant-roles': ['error', { dialog: ['dialog'] }],
      'jsx-a11y/no-noninteractive-element-to-interactive-role': ['error', { ul: ['tablist'] }],

      // Technical debt: reported as warnings so `npm run lint` passes; bring these to zero
      // when the components are reworked (see the accessibility issues on GitHub).
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true, argsIgnorePattern: '^_' }],
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
);

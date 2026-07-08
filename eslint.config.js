import js from '@eslint/js';

export default [
  { ignores: ['node_modules/**', 'reports/**', 'playwright-report/**'] },
  js.configs.recommended,
  { languageOptions: { globals: { process: 'readonly' } } },
];

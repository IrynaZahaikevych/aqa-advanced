import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		ignores: ['node_modules', 'coverage'],
	},

	js.configs.recommended,
	prettier,

	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: {
			globals: {
				...globals.node,
				...globals.jest,
			},
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-console': 'off',
			semi: ['error', 'always'],
			'arrow-parens': ['error', 'always'],
		},
	},
]);

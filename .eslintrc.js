module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/jsx-indent': [2, 'tab'],
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		'comma-dangle': ['error', 'never'],
		'linebreak-style': 'off',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'jsx-quotes': ['error', 'prefer-single'],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'import/prefer-default-export': 'off',
		'implicit-arrow-linebreak': 'off',
		'arrow-body-style': ['error', 'as-needed'],
		'no-unused-vars': 'warn',
		'react/function-component-definition': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-shadow': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'react/self-closing-comp': 'off',
		'react/require-default-props': 'off',
		'react/jsx-props-no-spreading': 'warn'
	}
};

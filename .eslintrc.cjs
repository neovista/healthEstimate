// SPDX-FileCopyrightText: 2022 Johannes Loher
// SPDX-FileCopyrightText: 2022 David Archibald
//
// SPDX-License-Identifier: MIT

module.exports = {
	parserOptions: {
		ecmaVersion: 13,
		extraFileExtensions: [".cjs", ".mjs"],
		sourceType: "module",
	},

	env: {
		browser: true,
		es6: true,
		jquery: true,
	},

	extends: ["eslint:recommended", "@typhonjs-fvtt/eslint-config-foundry.js/0.8.0"],

	plugins: [],

	rules: {
		"array-bracket-spacing": ["warn", "never"],
		"array-callback-return": "warn",
		"arrow-spacing": "warn",
		"brace-style": "warn",
		"comma-dangle": ["warn", "only-multiline"],
		"comma-style": "warn",
		"computed-property-spacing": "warn",
		"constructor-super": "error",
		"default-param-last": "warn",
		"dot-location": ["warn", "property"],
		"eol-last": ["error", "always"],
		eqeqeq: ["warn", "smart"],
		"func-call-spacing": "warn",
		"func-names": ["warn", "never"],
		"getter-return": "warn",
		indent: ["warn", "tab", { SwitchCase: 1 }],
		"lines-between-class-members": "warn",
		"new-parens": ["warn", "always"],
		"no-alert": "warn",
		"no-array-constructor": "warn",
		"no-class-assign": "warn",
		"no-compare-neg-zero": "warn",
		"no-cond-assign": "warn",
		"no-const-assign": "error",
		"no-constant-condition": "warn",
		"no-constructor-return": "warn",
		"no-delete-var": "warn",
		"no-dupe-args": "warn",
		"no-dupe-class-members": "warn",
		"no-dupe-keys": "warn",
		"no-duplicate-case": "warn",
		"no-duplicate-imports": ["warn", { includeExports: true }],
		"no-else-return": "warn",
		"no-empty": ["warn", { allowEmptyCatch: true }],
		"no-empty-character-class": "warn",
		"no-empty-pattern": "warn",
		"no-func-assign": "warn",
		"no-global-assign": "warn",
		"no-implicit-coercion": ["warn", { allow: ["!!"] }],
		"no-implied-eval": "warn",
		"no-import-assign": "warn",
		"no-invalid-regexp": "warn",
		"no-irregular-whitespace": "warn",
		"no-iterator": "warn",
		"no-lone-blocks": "warn",
		"no-lonely-if": "warn",
		"no-misleading-character-class": "warn",
		"no-mixed-operators": "warn",
		"no-multi-str": "warn",
		"no-multiple-empty-lines": ["warn", { max: 1 }],
		"no-new-func": "warn",
		"no-new-object": "warn",
		"no-new-symbol": "warn",
		"no-new-wrappers": "warn",
		"no-nonoctal-decimal-escape": "warn",
		"no-obj-calls": "warn",
		"no-octal": "warn",
		"no-octal-escape": "warn",
		"no-promise-executor-return": "warn",
		"no-proto": "warn",
		"no-regex-spaces": "warn",
		"no-script-url": "warn",
		"no-self-assign": "warn",
		"no-self-compare": "warn",
		"no-setter-return": "warn",
		"no-sequences": "warn",
		"no-template-curly-in-string": "warn",
		"no-this-before-super": "error",
		"no-unexpected-multiline": "warn",
		"no-unmodified-loop-condition": "warn",
		"no-unneeded-ternary": "warn",
		"no-unreachable": "warn",
		"no-unreachable-loop": "warn",
		"no-unsafe-negation": ["warn", { enforceForOrderingRelations: true }],
		"no-unsafe-optional-chaining": ["warn", { disallowArithmeticOperators: true }],
		"no-unused-expressions": "warn",
		"no-useless-backreference": "warn",
		"no-useless-call": "warn",
		"no-useless-catch": "warn",
		"no-useless-computed-key": ["warn", { enforceForClassMembers: true }],
		"no-useless-concat": "warn",
		"no-useless-constructor": "warn",
		"no-useless-rename": "warn",
		"no-useless-return": "warn",
		"no-var": "warn",
		"no-void": "warn",
		"no-whitespace-before-property": "warn",
		"prefer-numeric-literals": "warn",
		"prefer-object-spread": "warn",
		"prefer-regex-literals": "warn",
		"prefer-spread": "warn",
		"rest-spread-spacing": ["warn", "never"],
		"semi-spacing": "warn",
		"semi-style": ["warn", "last"],
		"space-unary-ops": ["warn", { words: true, nonwords: false }],
		"switch-colon-spacing": "warn",
		"symbol-description": "warn",
		"template-curly-spacing": ["warn", "never"],
		"unicode-bom": ["warn", "never"],
		"use-isnan": ["warn", { enforceForSwitchCase: true, enforceForIndexOf: true }],
		"valid-typeof": ["warn", { requireStringLiterals: true }],
		"wrap-iife": ["warn", "inside"],

		"arrow-parens": ["warn", "always"],
		"comma-spacing": "warn",
		"dot-notation": "warn",
		"key-spacing": "warn",
		"keyword-spacing": ["warn", { overrides: { catch: { before: true, after: false } } }],
		"max-len": [
			"warn",
			{
				code: 120,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		"no-extra-boolean-cast": ["warn", { enforceForLogicalOperands: true }],
		"no-extra-semi": "warn",
		"no-multi-spaces": ["warn", { ignoreEOLComments: true }],
		"no-throw-literal": "error",
		"no-trailing-spaces": "warn",
		"no-useless-escape": "warn",
		"no-unused-vars": ["warn", { args: "none" }],
		"nonblock-statement-body-position": ["warn", "beside"],
		"one-var": ["warn", "never"],
		"operator-linebreak": [
			"warn",
			"before",
			{
				overrides: { "=": "after", "+=": "after", "-=": "after" },
			},
		],
		"prefer-template": "warn",
		"quote-props": ["warn", "as-needed", { keywords: false }],
		quotes: ["warn", "double", { avoidEscape: true, allowTemplateLiterals: false }],
		semi: "warn",
		"space-before-blocks": ["warn", "always"],
		"space-before-function-paren": [
			"warn",
			{
				anonymous: "always",
				named: "never",
				asyncArrow: "always",
			},
		],
		"spaced-comment": "warn",
	},

	globals: {
		chroma: false,
		Grapick: false,
		PIXI: false,
	},

	overrides: [
		{
			files: ["./*.js", "./*.cjs", "./*.mjs"],
			env: {
				node: true,
			},
		},
	],
};

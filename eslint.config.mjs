import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	{
		plugins: {
			"@typescript-eslint": tseslint,
			import: importPlugin,
		},
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
		rules: {
			...tseslint.configs.recommended.rules,
			...tseslint.configs["recommended-requiring-type-checking"].rules,
			...importPlugin.configs.recommended.rules,
			...importPlugin.configs.typescript.rules,

			// sort imports
			"import/order": "error",

			// no let exports
			"import/no-mutable-exports": "error",

			"import/no-cycle": "error",
			"import/no-default-export": "error",

			"@typescript-eslint/consistent-type-imports": [
				"error",
				{
					prefer: "type-imports",
					fixStyle: "inline-type-imports",
					disallowTypeAnnotations: false,
				},
			],

			"import/no-duplicates": ["error", { "prefer-inline": true }],

			// false negatives
			"import/namespace": ["off"],

			// we allow empty interfaces
			"no-empty-pattern": "off",
			"@typescript-eslint/no-empty-interface": "off",

			// we allow empty functions
			"@typescript-eslint/no-empty-function": "off",

			// we sometimes use async functions that don't await anything
			"@typescript-eslint/require-await": "off",

			// make sure to `await` inside try…catch
			"@typescript-eslint/return-await": ["error", "in-try-catch"],

			// allow unused vars prefixed with `_`
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],

			// numbers and booleans are fine in template strings
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{ allowNumber: true, allowBoolean: true },
			],

			"@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],

			"no-restricted-imports": [
				"error",
				{
					name: "next/router",
					message: "Please use next/navigation instead.",
				},
			],
		},
	},
	// Override rules for Next.js app directory and middleware
	{
		files: ["app/**/*.ts", "app/**/*.tsx", "src/app/**/*.ts", "src/app/**/*.tsx", "middleware.ts"],
		rules: {
			"import/no-default-export": "off",
		},
	},
	prettierConfig,
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
		// Ignore JS and JSX files
		"**/*.js",
		"**/*.jsx",
	]),
]);

export default eslintConfig;

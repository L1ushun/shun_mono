import eslintPluginSvelte from "eslint-plugin-svelte";
import tsParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser";
import js from "@eslint/js";
import globals from "globals";
export default [
  js.configs.recommended,
  ...eslintPluginSvelte.configs["flat/recommended"],
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".svelte"],
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ["**/*.svelte", "*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
      },
    },
  },
  {
    rules: {
      "svelte/no-at-html-tags": "error",
      "svelte/no-useless-mustaches": [
        "error",
        {
          ignoreIncludesComment: false,
          ignoreStringEscape: false,
        },
      ],
      "no-undef": "off",
    },
  },
];

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "next/core-web-vitals", "plugin:@typescript-eslint/recommended", "prettier"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": "error",
    "no-shadow": 0,
    "sort-imports": [
      "warn",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
        allowSeparatedGroups: true,
      },
    ],
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "sibling", "index", "parent", "unknown", "type", "object"],
        pathGroups: [
          {
            pattern: "next",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "next**",
            group: "external",
          },
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "react**",
            group: "external",
          },
          {
            pattern: "@react**",
            group: "external",
          },
          {
            pattern: "_app/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "_constants/**",
            group: "object",
            position: "before",
          },
          {
            pattern: "_types/**",
            group: "type",
          },
          {
            pattern: "_assets/**",
            group: "object",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "desc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
  globals: {
    __DEV__: true,
  },
};

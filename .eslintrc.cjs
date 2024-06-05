/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "./tsconfig.json" },
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-react-compiler",
    "prettier",
    "tailwindcss",
  ],
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    // * React-Compiler
    "react-compiler/react-compiler": "error",
    "react/react-in-jsx-scope": "off", // * Don't to Import React
    "react/prop-types": "off", // * Don't Need Prop Types
    "prettier/prettier": ["warn", {}, { usePrettierrc: true }],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "error",
    // "@next/next/no-img-element": "off",
  },
  ignorePatterns: ["node_modules/", "build/", "dist/", ".next/"],
};

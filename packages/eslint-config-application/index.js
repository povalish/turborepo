module.exports = {
  extends: [
    "next", 
    "next/core-web-vitals",
    "turbo", 
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "warn",
    "no-use-before-define": "off",
    "camelcase": "off",
    "class-methods-use-this": "off",
    "no-shadow": "off",
    "no-unused-vars": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "max-classes-per-file": "error",
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "implicit-arrow-linebreak": [
      "error",
      "beside"
    ],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".tsx",
          ".ts"
        ]
      }
    ],
    "react/jsx-one-expression-per-line": "off",
    "react/self-closing-comp": "error",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/function-component-definition": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-boolean-value": "error",
    "react/button-has-type": "error",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "error",
    "import/order": "off",
    "import/no-unresolved": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never",
        "js": "never",
        "jsx": "never",
        "": "never"
      }
    ],
    "global-require": "off"
  },
};
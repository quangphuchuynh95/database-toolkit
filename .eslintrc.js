module.exports = {
  root: true,
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "react", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/no-empty-interface": "off",
  },
};

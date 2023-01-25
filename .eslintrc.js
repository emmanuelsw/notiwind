module.exports = {
  root: true,
  env: {
    node: true,
  },
  "plugins": ["prettier"],
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript/recommended",
    "prettier"
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",

    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off",
  },
};

import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettierPlug from "eslint-plugin-prettier/recommended";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  files: [
    "./composables/**/*.{ts,tsx}",
    "./components/**/*.{vue,ts,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./stores/**/*.ts",
    "./server/**/*.ts",
    "./nuxt.config.ts",
    "./app.config.ts",
    "./eslint.config.{mjs,js,cjs}",
    "./app.vue",
    "./error.vue",
    "./layers/**/*.{ts,vue}",
  ],
  rules: {
    "no-console": "warn",
  },
})
  .prepend(prettierPlug, simpleImportSort.configs)
  .override("nuxt/typescript/rules", {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  })
  .override("nuxt/vue/rules", {
    rules: {
      "vue/max-attributes-per-line": "off",
      "vue/html-self-closing": "off",
      "vue/multi-word-component-names": "off",
      // Vue Composition API ordering
      "vue/order-in-components": [
        "error",
        {
          order: [
            "el",
            "name",
            "key",
            "parent",
            "functional",
            ["delimiters", "comments"],
            ["components", "directives", "filters"],
            "extends",
            "mixins",
            ["provide", "inject"],
            "ROUTER_GUARDS",
            "layout",
            "middleware",
            "validate",
            "scrollToTop",
            "transition",
            "loading",
            "inheritAttrs",
            "model",
            ["props", "propsData"],
            "emits",
            "setup",
            "asyncData",
            "data",
            "fetch",
            "head",
            "computed",
            "watch",
            "watchEffect",
            "LIFECYCLE_HOOKS",
            "methods",
            ["template", "render"],
            "renderError",
          ],
        },
      ],
      // This helps with script setup organization
      "vue/component-api-style": ["error", ["script-setup", "composition"]],
      // Enforce consistent defineProps/defineEmits order
      "vue/define-macros-order": [
        "error",
        {
          order: ["defineProps", "defineEmits"],
        },
      ],
    },
  })
  .overrideRules({
    "prettier/prettier": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  });

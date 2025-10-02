// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  (module.exports = {
    rules: {
      "vue/multi-word-component-names": [
        "error",
        {
          ignores: ["default"],
        },
      ],
    },
  })
);

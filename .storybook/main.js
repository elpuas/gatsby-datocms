const path = require("path")

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
    "storybook-addon-gatsby"
  ],
  "core": {
    "builder": "webpack5"
  }
}
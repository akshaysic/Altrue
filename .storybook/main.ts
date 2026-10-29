import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  // Stories sit next to the code they show. The prefixes keep routes and building blocks apart in the sidebar.
  "stories": [
    { "directory": "../app", "files": "**/*.stories.@(js|jsx|mjs|ts|tsx)", "titlePrefix": "Pages" },
    { "directory": "../components", "files": "**/*.stories.@(js|jsx|mjs|ts|tsx)", "titlePrefix": "Components" }
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp"
  ],
  "framework": "@storybook/nextjs-vite"
};
export default config;
import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  // Stories sit next to the code they show. The prefixes split the sidebar into
  // the new design system, the app's routes, and the placeholder scaffold it replaces.
  "stories": [
    { "directory": "../components/ui", "files": "**/*.@(mdx|stories.@(ts|tsx))", "titlePrefix": "Design system" },
    { "directory": "../app", "files": "**/*.stories.@(ts|tsx)", "titlePrefix": "Pages" },
    { "directory": "../components", "files": "*.stories.@(ts|tsx)", "titlePrefix": "Scaffold" },
    { "directory": "../components/layout", "files": "**/*.stories.@(ts|tsx)", "titlePrefix": "Scaffold/layout" }
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
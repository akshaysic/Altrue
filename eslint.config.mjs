// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import nextVitals from "eslint-config-next/core-web-vitals";

// storybook-static is build output; linting its bundled JS produces hundreds of false errors.
const config = [
  { ignores: ["storybook-static/**"] },
  ...nextVitals,
  ...storybook.configs["flat/recommended"],
];

export default config;

import type { Preview } from '@storybook/nextjs-vite'
// Same global stylesheet as app/layout.tsx (Tailwind base/components/utilities + body background).
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    // Every route lives in the App Router, so mock next/navigation (Link, notFound) the App Router way.
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
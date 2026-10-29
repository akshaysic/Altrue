import type { CSSProperties } from 'react'
import type { Preview } from '@storybook/nextjs-vite'
// Same fonts and global stylesheet as app/layout.tsx.
import '@fontsource/instrument-sans/400.css'
import '@fontsource/instrument-sans/500.css'
import '@fontsource/instrument-sans/600.css'
import '@fontsource/instrument-sans/700.css'
import '@fontsource/geist-mono/400.css'
import '@fontsource/geist-mono/500.css'
import '../app/globals.css'

// The accent colour is still undecided, so the toolbar lets you try each candidate.
const ACCENTS = [
  { value: '#2E5E45', title: 'Green #2E5E45 (current)' },
  { value: '#1F4E79', title: 'Blue #1F4E79' },
  { value: '#8A4B2F', title: 'Rust #8A4B2F' },
  { value: '#14181B', title: 'Ink #14181B' },
]

const preview: Preview = {
  globalTypes: {
    accent: {
      description: 'Design-system accent colour (pending decision)',
      toolbar: { title: 'Accent', icon: 'paintbrush', items: ACCENTS, dynamicTitle: true },
    },
  },
  initialGlobals: { accent: ACCENTS[0].value },
  decorators: [
    (Story, { globals }) => (
      <div style={{ '--ds-accent': globals.accent ?? ACCENTS[0].value } as CSSProperties}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    options: {
      storySort: { order: ['Design system', ['Foundations', '*'], 'Pages', 'Scaffold'] },
    },
    // Every route lives in the App Router, so mock next/navigation (Link, notFound) the App Router way.
    nextjs: {
      appDirectory: true,
    },
    // The three widths the MVP roadmap designs and visually QAs at.
    viewport: {
      options: {
        mobile390: { name: 'Mobile 390', styles: { width: '390px', height: '844px' }, type: 'mobile' },
        tablet768: { name: 'Tablet 768', styles: { width: '768px', height: '1024px' }, type: 'tablet' },
        desktop1440: { name: 'Desktop 1440', styles: { width: '1440px', height: '900px' }, type: 'desktop' },
      },
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
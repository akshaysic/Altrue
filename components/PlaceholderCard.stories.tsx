import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { PlaceholderCard } from './PlaceholderCard';

const meta = {
  component: PlaceholderCard,
  tags: ['ai-generated'],
  args: {
    title: 'Active plan',
    children: (
      <>
        <p>Status: active</p>
        <p className="mt-2">Monthly amount: $10</p>
        <p className="mt-2">Next mocked charge date: 2026-06-01</p>
      </>
    ),
  },
} satisfies Meta<typeof PlaceholderCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, args }) => {
    await expect(canvas.getByRole('heading', { level: 2 })).toHaveTextContent(args.title);
  },
};

export const WithList: Story = {
  args: {
    title: 'Example interventions',
    children: (
      <ul className="list-disc space-y-1 pl-5">
        <li>Malaria prevention</li>
        <li>Vaccination support</li>
        <li>Maternal health services</li>
      </ul>
    ),
  },
};

export const CssCheck: Story = {
  play: async ({ canvas, args }) => {
    const heading = canvas.getByRole('heading', { name: args.title });
    // The title uses text-ink, a custom colour from tailwind.config.ts (#1f2933).
    // Fails if globals.css / Tailwind / the project theme did not load.
    await expect(getComputedStyle(heading).color).toBe('rgb(31, 41, 51)');
    // The card itself uses border-dashed.
    await expect(getComputedStyle(heading.closest('section')!).borderTopStyle).toBe('dashed');
  },
};

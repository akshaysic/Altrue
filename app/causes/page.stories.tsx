import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { causes } from '@/lib/seed';
import CausesPage from './page';

const meta = {
  component: CausesPage,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof CausesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    // One card per seeded cause, each titled with the cause name.
    const cardTitles = canvas.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent);
    await expect(cardTitles).toEqual(causes.map((cause) => cause.name));
    // Tags come from seed data (first three per cause).
    await expect(canvas.getAllByText(causes[0].tags[0]).length).toBeGreaterThan(0);
  },
};

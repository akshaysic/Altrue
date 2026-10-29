import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { causes } from '@/lib/seed';
import HomePage from './page';

const meta = {
  component: HomePage,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    // Both "Start giving" buttons (nav + hero) lead into onboarding.
    for (const link of canvas.getAllByRole('link', { name: 'Start giving' })) {
      await expect(link).toHaveAttribute('href', '/onboarding');
    }
    // The cause grid shows the first eight seeded causes, each linking to its detail page.
    for (const cause of causes.slice(0, 8)) {
      await expect(canvas.getByRole('link', { name: new RegExp(cause.name) })).toHaveAttribute('href', `/causes/${cause.slug}`);
    }
  },
};

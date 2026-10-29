import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { PageHeader } from './PageHeader';

const meta = {
  component: PageHeader,
  tags: ['ai-generated'],
  args: {
    eyebrow: 'Cause discovery',
    title: 'Choose what you care about',
    description:
      'All eight MVP cause areas are seeded here for inspection. This is cause-first discovery, not a charity marketplace.',
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithEyebrow: Story = {};

export const WithoutEyebrow: Story = {
  args: { eyebrow: undefined },
  play: async ({ canvas, args }) => {
    await expect(canvas.getByRole('heading', { level: 1 })).toHaveTextContent(args.title);
    // The eyebrow paragraph is optional and must not render when it isn't passed.
    await expect(canvas.queryByText('Cause discovery')).toBeNull();
  },
};

export const DonorDashboard: Story = {
  args: {
    eyebrow: 'Donor dashboard',
    title: 'Demo donor home',
    description: 'This dashboard is scaffolded with a mocked active plan and demo report preview.',
  },
};

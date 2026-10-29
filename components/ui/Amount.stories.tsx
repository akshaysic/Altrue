import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { formatCents } from '@/lib/formatters';
import { Amount } from './Amount';

const meta = {
  component: Amount,
  tags: ['autodocs', 'ai-generated'],
  args: { cents: 1000, caption: 'every month' },
  argTypes: {
    size: { control: 'inline-radio', options: ['hero', 'compact'] },
  },
} satisfies Meta<typeof Amount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {
  play: async ({ canvas, args }) => {
    await expect(canvas.getByText(formatCents(args.cents))).toBeVisible();
  },
};

export const Compact: Story = { args: { size: 'compact', caption: undefined } };

/** Small amounts are valid and get the same treatment. */
export const SmallAmount: Story = { args: { cents: 300 } };

export const WithCents: Story = { args: { cents: 1050 } };

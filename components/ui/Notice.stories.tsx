import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { Notice } from './Notice';

const meta = {
  component: Notice,
  tags: ['autodocs', 'ai-generated'],
  args: {
    title: 'Demo',
    children: 'No real donations, payments, or nonprofit partnerships are active.',
  },
  decorators: [
    (Story) => (
      <div className="max-w-[390px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Notice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DemoBanner: Story = {
  play: async ({ canvas, args }) => {
    await expect(canvas.getByRole('note')).toHaveTextContent(String(args.children));
  },
};

export const WithoutTitle: Story = {
  args: { title: undefined, children: 'This is a starting point. You can adjust the split before confirming.' },
};

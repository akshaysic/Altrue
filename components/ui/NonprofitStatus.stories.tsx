import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { NonprofitStatus } from './NonprofitStatus';

const meta = {
  component: NonprofitStatus,
  tags: ['autodocs', 'ai-generated'],
  args: { status: 'verified' },
  argTypes: {
    status: { control: 'inline-radio', options: ['verified', 'pending_review', 'data_incomplete'] },
  },
} satisfies Meta<typeof NonprofitStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Verified: Story = {};

export const PendingReview: Story = { args: { status: 'pending_review' } };

export const DataIncomplete: Story = { args: { status: 'data_incomplete' } };

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <NonprofitStatus status="verified" />
      <NonprofitStatus status="pending_review" />
      <NonprofitStatus status="data_incomplete" />
    </div>
  ),
  play: async ({ canvas }) => {
    for (const label of ['Verified', 'Pending review', 'Data incomplete']) {
      await expect(canvas.getByText(label)).toBeVisible();
    }
  },
};

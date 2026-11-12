import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { NonprofitStatus } from './NonprofitStatus';

const meta = {
  component: NonprofitStatus,
  tags: ['autodocs', 'ai-generated'],
  args: { status: 'givewell' },
  argTypes: {
    status: { control: 'inline-radio', options: ['givewell', 'ace', 'post-mvp'] },
  },
} satisfies Meta<typeof NonprofitStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EvaluatedByGiveWell: Story = {};

export const EvaluatedByAce: Story = { args: { status: 'ace' } };

export const PostMvp: Story = { args: { status: 'post-mvp' } };

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <NonprofitStatus status="givewell" />
      <NonprofitStatus status="ace" />
      <NonprofitStatus status="post-mvp" />
    </div>
  ),
  play: async ({ canvas }) => {
    for (const label of ['Evaluated by GiveWell', 'Evaluated by Animal Charity Evaluators', 'Post-MVP']) {
      await expect(canvas.getByText(label)).toBeVisible();
    }
    // Altrue does not verify charities, so no tag may say so.
    await expect(canvas.queryByText(/verified/i)).toBeNull();
  },
};

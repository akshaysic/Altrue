import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { CauseList } from '@/components/prototype/CauseList';

const meta = {
  component: CauseList,
  parameters: { layout: 'padded', viewport: { defaultViewport: 'mobile1' } },
  args: { areas: [] },
} satisfies Meta<typeof CauseList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllAreas: Story = {
  play: async ({ canvas }) => {
    for (const name of ['GiveDirectly', 'Malaria Consortium', 'Against Malaria Foundation', 'Helen Keller Intl', 'New Incentives', 'GiveWell Top Charities Fund', 'The Humane League']) {
      await expect(canvas.getByRole('link', { name })).toBeVisible();
    }
    await expect(canvas.getByRole('heading', { name: 'Let experts decide' })).toBeVisible();
  },
};

export const AnimalWelfareOnly: Story = {
  args: { areas: ['Animal welfare'] },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'The Humane League' })).toBeVisible();
    await expect(canvas.queryByRole('heading', { name: 'Featured' })).toBeNull();
  },
};

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { CharityDetail } from '@/components/prototype/CharityDetail';
import { getCharityById } from '@/lib/seed/charities';

const meta = {
  component: CharityDetail,
  parameters: { layout: 'padded', viewport: { defaultViewport: 'mobile1' } },
  args: { charity: getCharityById('against-malaria-foundation')! },
} satisfies Meta<typeof CharityDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AgainstMalariaFoundation: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1 })).toHaveTextContent('Against Malaria Foundation');
    await expect(canvas.getByText('$6')).toBeVisible();
    await expect(canvas.getByText('October 2026')).toBeVisible();
  },
};

export const NoFigures: Story = {
  args: { charity: getCharityById('the-humane-league')! },
};

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { getNonprofitsByCauseId } from '@/lib/seed';
import CauseDetailPage from './page';

const meta = {
  component: CauseDetailPage,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  args: { params: { slug: 'global-health' } },
} satisfies Meta<typeof CauseDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalHealth: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1 })).toHaveTextContent('Global Health');
    // Placeholder nonprofits for the cause come from seed data, with their verification status.
    for (const nonprofit of getNonprofitsByCauseId('global-health')) {
      await expect(canvas.getByRole('heading', { name: nonprofit.name })).toBeVisible();
    }
    await expect(canvas.getByText('Demo cost: $2.50 per nets')).toBeVisible();
  },
};

export const MentalHealth: Story = {
  args: { params: { slug: 'mental-health' } },
};

export const ClimateEnvironment: Story = {
  args: { params: { slug: 'climate-environment' } },
};

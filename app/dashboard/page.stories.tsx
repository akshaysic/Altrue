import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { demoAllocations, demoPlans } from '@/lib/seed';
import { formatCents, formatPercent } from '@/lib/formatters';
import DashboardPage from './page';

const meta = {
  component: DashboardPage,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof DashboardPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    const plan = demoPlans[0];
    await expect(canvas.getByText(`Monthly amount: ${formatCents(plan.monthlyAmountCents)}`)).toBeVisible();
    await expect(canvas.getByText(`Next mocked charge date: ${plan.nextChargeDate}`)).toBeVisible();
    // Every seeded allocation is listed with its percentage.
    for (const allocation of demoAllocations) {
      await expect(canvas.getByText(`${allocation.causeId}: ${formatPercent(allocation.percentage)}`)).toBeVisible();
    }
  },
};

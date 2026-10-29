import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { MOCKED_FEE_CENTS } from '@/lib/constants';
import { demoPlans } from '@/lib/seed';
import { formatCents } from '@/lib/formatters';
import CheckoutPage from './page';

const meta = {
  component: CheckoutPage,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof CheckoutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1 })).toHaveTextContent('Confirm a mocked plan');
    await expect(canvas.getByText(`Monthly amount: ${formatCents(demoPlans[0].monthlyAmountCents)}`)).toBeVisible();
    await expect(canvas.getByText(`Mocked platform fee: ${formatCents(MOCKED_FEE_CENTS)}`)).toBeVisible();
    // The checkout scaffold must never collect payment details.
    await expect(canvas.queryByRole('textbox')).toBeNull();
  },
};

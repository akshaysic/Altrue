import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent, within } from 'storybook/test';
import { formatCents } from '@/lib/formatters';
import { DONATE_STEP_CENTS, DonateScreen } from './DonateScreen';
import { CONCEPT_LABEL } from './HeroFrame';
import { type HeroScreenProps } from './HeroScreens';
import { heroSplit } from './heroData';
import { sampleDonor } from './sampleDonor';

/**
 * The donate screen as a pitch frame. Storybook only: none of this is an app route.
 * Charities come from lib/seed/sources.ts; the donor, card and dates belong to the fictional "Sample donor".
 */
const meta = {
  title: 'Donate',
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  globals: { viewport: { value: 'mobile390', isRotated: false } },
  args: { showConceptLabel: true },
  argTypes: {
    showConceptLabel: { control: 'boolean', description: 'Shows "Concept mockup · sample data" in the frame header.' },
  },
  render: (args) => <DonateScreen {...args} />,
} satisfies Meta<HeroScreenProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const subtotal = (root: HTMLElement, area: string) =>
  within(root.querySelector<HTMLElement>(`[data-area="${area}"]`)!).getByText(/Subtotal/).parentElement!.textContent;

const healthCents = (cents: number) =>
  heroSplit(sampleDonor.areas, cents, false)
    .filter(({ organization }) => organization.category === 'Global health')
    .reduce((sum, line) => sum + line.cents, 0);

export const MonthlyGift: Story = {
  play: async ({ canvas, canvasElement, step }) => {
    await expect(canvas.getByText(CONCEPT_LABEL)).toBeVisible();
    await expect(canvas.getByRole('listitem', { current: 'step' })).toHaveTextContent('Donate');
    await expect(canvas.getByText(sampleDonor.paymentMethod)).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Review monthly gift' })).toBeVisible();
    // The amount shows once: no separate stepper row repeating it.
    await expect(canvas.getAllByText(formatCents(sampleDonor.monthlyCents))).toHaveLength(1);

    await step('the − and + beside the amount change the split', async () => {
      await expect(subtotal(canvasElement, 'Global health')).toBe(`Subtotal ${formatCents(healthCents(sampleDonor.monthlyCents))}`);
      await userEvent.click(canvas.getByRole('button', { name: `Give ${formatCents(DONATE_STEP_CENTS)} more each month` }));
      const next = sampleDonor.monthlyCents + DONATE_STEP_CENTS;
      await expect(subtotal(canvasElement, 'Global health')).toBe(`Subtotal ${formatCents(healthCents(next))}`);
      const less = canvas.getByRole('button', { name: `Give ${formatCents(DONATE_STEP_CENTS)} less each month` });
      await userEvent.click(less);
      less.blur();
      await expect(subtotal(canvasElement, 'Global health')).toBe(`Subtotal ${formatCents(healthCents(sampleDonor.monthlyCents))}`);
    });

    await step('let experts decide collapses the split to the fund', async () => {
      const experts = canvas.getByRole('button', { name: /Let experts decide/ });
      await userEvent.click(experts);
      await expect(canvasElement.querySelectorAll('[data-area]')).toHaveLength(1);
      await expect(canvas.queryByText('GiveDirectly')).toBeNull();
      await userEvent.click(experts);
      experts.blur();
      await expect(canvas.getByText('GiveDirectly')).toBeVisible();
    });
  },
};

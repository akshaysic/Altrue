import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent, within } from 'storybook/test';
import { formatCents } from '@/lib/formatters';
import { curatedOrganizations } from '@/lib/seed/sources';
import { DONATE_STEP_CENTS, DonateScreen } from './DonateScreen';
import { CONCEPT_LABEL } from './HeroFrame';
import { heroSplit, type HeroScreenProps } from './HeroScreens';
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

const subtotal = (canvasElement: HTMLElement, area: string) =>
  within(canvasElement.querySelector<HTMLElement>(`section[data-area="${area}"]`)!).getByText(/Subtotal/).parentElement!.textContent;

export const MonthlyGift: Story = {
  play: async ({ canvas, canvasElement, step }) => {
    await expect(canvas.getByText(CONCEPT_LABEL)).toBeVisible();
    await expect(canvas.getByText(sampleDonor.paymentMethod)).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Review monthly gift' })).toBeVisible();

    await step('the sample history only uses seed charities and adds up', async () => {
      const ids = new Set(curatedOrganizations.map((org) => org.id));
      await expect(sampleDonor.history).toHaveLength(3);
      for (const gift of sampleDonor.history) {
        for (const line of gift.lines) await expect(ids.has(line.organizationId)).toBe(true);
        await expect(gift.lines.reduce((sum, { cents }) => sum + cents, 0)).toBe(gift.cents);
      }
    });

    await step('the stepper changes the split', async () => {
      await expect(subtotal(canvasElement, 'Global health')).toBe(`Subtotal ${formatCents(400)}`);
      const more = canvas.getByRole('button', { name: 'Give more to Monthly gift' });
      await userEvent.click(more);
      const next = sampleDonor.monthlyCents + DONATE_STEP_CENTS;
      const lines = heroSplit(sampleDonor.areas, next, false);
      await expect(lines.reduce((sum, { cents }) => sum + cents, 0)).toBe(next);
      const health = lines.filter(({ organization }) => organization.category === 'Global health').reduce((s, l) => s + l.cents, 0);
      await expect(subtotal(canvasElement, 'Global health')).toBe(`Subtotal ${formatCents(health)}`);
      await userEvent.click(canvas.getByRole('button', { name: 'Give less to Monthly gift' }));
      await expect(subtotal(canvasElement, 'Global health')).toBe(`Subtotal ${formatCents(400)}`);
    });

    await step('let experts decide routes everything to the fund', async () => {
      const experts = canvas.getByRole('button', { name: /Let experts decide/ });
      await userEvent.click(experts);
      await expect(canvas.queryByText('GiveDirectly')).toBeNull();
      await expect(subtotal(canvasElement, 'Global health')).toBe(`Subtotal ${formatCents(sampleDonor.monthlyCents)}`);
      await userEvent.click(experts);
      await expect(canvas.getByText('GiveDirectly')).toBeVisible();
    });

    // End in the default state with nothing focused, so screenshots stay clean.
    (canvasElement.ownerDocument.activeElement as HTMLElement | null)?.blur();
  },
};

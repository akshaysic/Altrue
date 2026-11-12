import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent } from 'storybook/test';
import { formatCents } from '@/lib/formatters';
import { curatedOrganizations } from '@/lib/seed/sources';
import { CONCEPT_LABEL } from './HeroFrame';
import {
  CharityEvidenceScreen,
  ChooseCausesScreen,
  EVIDENCE_CHARITY_ID,
  GivingHistoryScreen,
  YourPlanScreen,
  heroSplit,
  type HeroScreenProps,
} from './HeroScreens';
import { sampleDonor } from './sampleDonor';

/**
 * Hero frames for the pitch and case study. Storybook only: none of this is an app route.
 * Charities and figures come from lib/seed/sources.ts; the donor is the fictional "Sample donor".
 */
const meta = {
  title: 'Screens',
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  globals: { viewport: { value: 'mobile390', isRotated: false } },
  args: { showConceptLabel: true },
  argTypes: {
    showConceptLabel: { control: 'boolean', description: 'Shows "Concept mockup · sample data" in the frame header.' },
  },
} satisfies Meta<HeroScreenProps>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Toggles back and drops focus, so the frame ends in its default state and screenshots stay clean. */
async function restore(toggle: HTMLElement) {
  await userEvent.click(toggle);
  toggle.blur();
}

export const ChooseCauses: Story = {
  render: (args) => <ChooseCausesScreen {...args} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(CONCEPT_LABEL)).toBeVisible();
    const health = canvas.getByRole('button', { name: 'Global health' });
    await expect(health).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(health);
    await expect(health).toHaveAttribute('aria-pressed', 'false');
    await restore(health);
  },
};

export const YourPlan: Story = {
  render: (args) => <YourPlanScreen {...args} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(CONCEPT_LABEL)).toBeVisible();
    const lines = heroSplit(sampleDonor.areas, sampleDonor.monthlyCents, false);
    // The split must add up to the plan, to the cent.
    await expect(lines.reduce((sum, { cents }) => sum + cents, 0)).toBe(sampleDonor.monthlyCents);
    const totalRow = canvas.getByText('Total').closest('div')!;
    await expect(totalRow).toHaveTextContent(formatCents(sampleDonor.monthlyCents));

    const experts = canvas.getByRole('button', { name: 'Let experts decide' });
    await userEvent.click(experts);
    await expect(canvas.getByText('GiveWell Top Charities Fund')).toBeVisible();
    await expect(canvas.queryByText('GiveDirectly')).toBeNull();
    await restore(experts);
    await expect(canvas.getByText('GiveDirectly')).toBeVisible();
  },
};

export const CharityEvidence: Story = {
  render: (args) => <CharityEvidenceScreen {...args} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(CONCEPT_LABEL)).toBeVisible();
    const org = curatedOrganizations.find((record) => record.id === EVIDENCE_CHARITY_ID)!;
    // Every figure keeps its value, its estimate label, and its source and as-of date.
    await expect(canvas.getAllByText('estimate')).toHaveLength(org.figures.length);
    for (const figure of org.figures) {
      await expect(canvas.getByText(figure.value)).toBeVisible();
      await expect(canvas.getAllByRole('link', { name: figure.source_name })[0]).toHaveAttribute('href', figure.source_url);
    }
    await expect(canvas.getAllByText(new RegExp(`As of: ${org.figures[0].as_of}`))).toHaveLength(org.figures.length);
  },
};

export const GivingHistory: Story = {
  render: (args) => <GivingHistoryScreen {...args} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(CONCEPT_LABEL)).toBeVisible();
    await expect(canvas.getByText(/Sample donor/)).toBeVisible();
    const total = sampleDonor.history.reduce((sum, { cents }) => sum + cents, 0);
    await expect(canvas.getByText('Total').closest('div')!).toHaveTextContent(formatCents(total));
  },
};


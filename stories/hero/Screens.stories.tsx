import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent, within } from 'storybook/test';
import { formatCents } from '@/lib/formatters';
import { curatedOrganizations } from '@/lib/seed/sources';
import { CONCEPT_LABEL } from './HeroFrame';
import {
  CharityEvidenceScreen,
  ChooseCausesScreen,
  EVIDENCE_CHARITY_ID,
  ProfileScreen,
  YourPlanScreen,
  type HeroScreenProps,
} from './HeroScreens';
import { heroSplit, plannedForStartYear } from './heroData';
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

const subtotal = (root: HTMLElement, area: string) =>
  within(root.querySelector<HTMLElement>(`[data-area="${area}"]`)!).getByText(/Subtotal/).parentElement!.textContent;

const areaCents = (lines: ReturnType<typeof heroSplit>, area: string) =>
  lines.filter(({ organization }) => organization.category === area).reduce((sum, { cents }) => sum + cents, 0);

export const ChooseCauses: Story = {
  render: (args) => <ChooseCausesScreen {...args} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(CONCEPT_LABEL)).toBeVisible();
    await expect(canvas.getByRole('listitem', { current: 'step' })).toHaveTextContent('Explore');
    const health = canvas.getByRole('button', { name: 'Global health' });
    await userEvent.click(health);
    await expect(health).toHaveAttribute('aria-pressed', 'false');
    await restore(health);
    const experts = canvas.getByRole('button', { name: /Let experts decide/ });
    await userEvent.click(experts);
    await expect(experts).toHaveAttribute('aria-pressed', 'true');
    await restore(experts);
  },
};

export const YourPlan: Story = {
  render: (args) => <YourPlanScreen {...args} />,
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByText(CONCEPT_LABEL)).toBeVisible();
    await expect(canvas.getByRole('listitem', { current: 'step' })).toHaveTextContent('Plan');
    // Grouped by area with subtotals that match the app's own split, to the cent.
    const lines = heroSplit(sampleDonor.areas, sampleDonor.monthlyCents, false);
    await expect(lines.reduce((sum, { cents }) => sum + cents, 0)).toBe(sampleDonor.monthlyCents);
    for (const area of sampleDonor.areas) {
      await expect(subtotal(canvasElement, area)).toBe(`Subtotal ${formatCents(areaCents(lines, area))}`);
    }

    const experts = canvas.getByRole('button', { name: /Let experts decide/ });
    await userEvent.click(experts);
    await expect(canvasElement.querySelectorAll('[data-area]')).toHaveLength(1);
    await expect(canvas.queryByText('GiveDirectly')).toBeNull();
    await restore(experts);
    await expect(canvas.getByText('GiveDirectly')).toBeVisible();
  },
};

export const CharityEvidence: Story = {
  render: (args) => <CharityEvidenceScreen {...args} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText(CONCEPT_LABEL)).toBeVisible();
    await expect(canvas.getByRole('link', { name: 'Back to Explore' })).toBeVisible();
    const org = curatedOrganizations.find((record) => record.id === EVIDENCE_CHARITY_ID)!;
    // Every figure keeps its value and estimate label; the shared source appears once, with its as-of date.
    await expect(canvas.getAllByText('estimate')).toHaveLength(org.figures.length);
    for (const figure of org.figures) await expect(canvas.getByText(figure.value)).toBeVisible();
    const sources = new Set(org.figures.map((f) => `${f.source_url}|${f.as_of}`));
    await expect(canvas.getAllByRole('link', { name: org.figures[0].source_name })).toHaveLength(sources.size);
    await expect(canvas.getByText(new RegExp(`As of: ${org.figures[0].as_of}`))).toBeVisible();
    await expect(canvas.getByText(org.evidence)).toBeVisible();
  },
};

export const Profile: Story = {
  render: (args) => <ProfileScreen {...args} />,
  play: async ({ canvas, step }) => {
    await expect(canvas.getByText(CONCEPT_LABEL)).toBeVisible();
    await expect(canvas.getByRole('heading', { level: 1, name: 'Sample donor' })).toBeVisible();

    await step('the sample history only uses seed charities and adds up', async () => {
      const ids = new Set(curatedOrganizations.map((org) => org.id));
      for (const gift of sampleDonor.history) {
        for (const line of gift.lines) await expect(ids.has(line.organizationId)).toBe(true);
        await expect(gift.lines.reduce((sum, { cents }) => sum + cents, 0)).toBe(gift.cents);
      }
      await expect(canvas.getByText('1 Sep 2026')).toBeVisible();
      await expect(canvas.queryByText(/Sept/)).toBeNull();
    });

    await step('progress is plain: given against planned, no streaks', async () => {
      const given = sampleDonor.history.reduce((sum, { cents }) => sum + cents, 0);
      const bar = canvas.getByRole('progressbar');
      await expect(bar).toHaveAttribute('aria-valuenow', String(given));
      await expect(bar).toHaveAttribute('aria-valuemax', String(plannedForStartYear().cents));
      await expect(canvas.queryByText(/streak/i)).toBeNull();
    });

    await step('plan controls and notification switches respond', async () => {
      const pause = canvas.getByRole('button', { name: 'Pause plan' });
      await userEvent.click(pause);
      await expect(canvas.getByText(/Paused\./)).toBeVisible();
      await restore(canvas.getByRole('button', { name: 'Resume plan' }));
      const updates = canvas.getByRole('switch', { name: 'Product updates' });
      await userEvent.click(updates);
      await expect(updates).toHaveAttribute('aria-checked', 'true');
      await restore(updates);
    });
  },
};

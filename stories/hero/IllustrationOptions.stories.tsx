import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { ReactNode } from 'react';
import { expect } from 'storybook/test';
import { DemoTag } from '@/components/ui/DemoTag';
import { CONCEPT_LABEL } from './HeroFrame';
import type { HeroScreenProps } from './HeroScreens';
import { GiftFlow, GivingPattern, NumberSource } from './Illustrations';

/**
 * The top three illustration spots from the hero polish run, as rough options. They are not placed in any hero
 * frame yet; the ranked shortlist and the rejected candidates are in .agents/design/hero-polish.md.
 */
function Option({ title, screen, purpose, children }: { title: string; screen: string; purpose: string; children: ReactNode }) {
  return (
    <section aria-label={title} className="flex flex-col gap-ds-md border-t border-ds-rule pt-ds-lg">
      <div className="flex flex-col gap-ds-xs">
        <div className="flex items-baseline justify-between gap-ds-sm">
          <h2 className="text-ds-row">{title}</h2>
          <span className="font-ds-mono text-ds-mono uppercase text-ds-ink-2">{screen}</span>
        </div>
        <p className="text-ds-small text-ds-ink-2">{purpose}</p>
      </div>
      {children}
    </section>
  );
}

function IllustrationOptions({ showConceptLabel = true }: HeroScreenProps) {
  return (
    <main className="flex min-h-[844px] w-[390px] flex-col gap-ds-xl bg-ds-ground px-ds-md py-ds-lg font-ds text-ds-ink">
      <div className="flex flex-col gap-ds-sm">
        {showConceptLabel ? <DemoTag>{CONCEPT_LABEL}</DemoTag> : null}
        <h1 className="text-ds-h1">Illustration options</h1>
        <p className="text-ds-small text-ds-ink-2">
          Rough options, not placed yet. Ink plus one accent, one stroke weight, built from the area marks.
        </p>
      </div>

      <Option title="How your gift flows" screen="Plan" purpose="Shows the meta-charity idea in one look: one gift, split, then passed on.">
        <GiftFlow />
        <p className="text-ds-small text-ds-ink-2">With Let experts decide:</p>
        <GiftFlow experts />
      </Option>

      <Option
        title="Where the numbers come from"
        screen="Charity detail"
        purpose="Shows that every figure is an evaluator's estimate with a date, before the reader meets the figure."
      >
        <NumberSource />
      </Option>

      <Option
        title="Giving pattern"
        screen="Profile"
        purpose="The sample donor's causes, each mark sized by its share of money given. Where money went, not what it did."
      >
        <GivingPattern />
        <p className="text-ds-small text-ds-ink-2">
          The fund month counts under Global health, the fund&apos;s category in the seed.
        </p>
      </Option>
    </main>
  );
}

const meta = {
  title: 'IllustrationOptions',
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  globals: { viewport: { value: 'mobile390', isRotated: false } },
  args: { showConceptLabel: true },
  argTypes: {
    showConceptLabel: { control: 'boolean', description: 'Shows "Concept mockup · sample data" at the top.' },
  },
  render: (args) => <IllustrationOptions {...args} />,
} satisfies Meta<HeroScreenProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopThree: Story = {
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByText(CONCEPT_LABEL)).toBeVisible();
    // Informative drawings are named images; none of them carries a digit.
    const images = canvas.getAllByRole('img');
    await expect(images).toHaveLength(4);
    for (const svg of canvasElement.querySelectorAll('svg[role="img"]')) {
      await expect(svg.textContent ?? '').not.toMatch(/\d/);
    }
  },
};

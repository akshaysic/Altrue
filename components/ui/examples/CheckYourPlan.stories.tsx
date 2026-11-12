import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { formatCents } from '@/lib/formatters';
import { buildSplit } from '@/lib/mvpSplit';
import { Amount } from '../Amount';
import { Button } from '../Button';
import { DemoTag } from '../DemoTag';
import { Ledger, LedgerRow } from '../Ledger';
import { NonprofitStatus, type EvaluatorStatus } from '../NonprofitStatus';
import { Notice } from '../Notice';
import { AREAS } from '../storyData';

const PLAN_CENTS = 1000;

/** Evaluator tags come from the source packet's evaluator field. GiveDirectly gets none: GiveWell no longer lists it. */
const EVALUATOR_TAG: Record<string, EvaluatorStatus> = {
  'malaria-consortium': 'givewell',
  'against-malaria-foundation': 'givewell',
  'helen-keller-intl': 'givewell',
  'new-incentives': 'givewell',
  'givewell-top-charities-fund': 'givewell',
  'the-humane-league': 'ace',
};

/**
 * The design-system pieces put together as the "Check your plan" screen: $10 split across the three MVP areas
 * with the real MVP charities. Copy here is placeholder: real screen copy goes through the copy check before it ships.
 */
function CheckYourPlan() {
  const split = buildSplit({ areas: AREAS, amountCents: PLAN_CENTS, letExpertsDecide: false });
  const total = split.reduce((sum, line) => sum + line.cents, 0);

  return (
    <div className="mx-auto flex min-h-screen max-w-[390px] flex-col gap-8 bg-ds-ground px-4 py-8 font-ds text-ds-ink">
      <div className="flex flex-col gap-6">
        <h1 className="text-ds-h1">Check your plan</h1>
        <Amount cents={PLAN_CENTS} caption="every month" />
      </div>

      <section className="flex flex-col gap-3" aria-labelledby="split-heading">
        <div className="flex items-baseline justify-between">
          <h2 id="split-heading" className="text-ds-row">Your split</h2>
          <DemoTag>Illustrative split</DemoTag>
        </div>
        <Ledger>
          {split.map(({ organization, cents }) => {
            const tag = EVALUATOR_TAG[organization.id];

            return (
              <LedgerRow
                key={organization.id}
                label={organization.name}
                value={formatCents(cents)}
                detail={
                  <span className="flex flex-col gap-1">
                    <span>{organization.category}</span>
                    {tag ? <NonprofitStatus status={tag} /> : null}
                  </span>
                }
              />
            );
          })}
          <LedgerRow label="Total" value={formatCents(total)} emphasis />
        </Ledger>
      </section>

      <Notice>This is a starting point. You can adjust the split before confirming.</Notice>

      <div className="mt-auto flex flex-col gap-3">
        <Button block>Set up my plan</Button>
        <Button block variant="secondary">
          Adjust the split
        </Button>
      </div>
    </div>
  );
}

const meta = {
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  render: () => <CheckYourPlan />,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile390: Story = {
  play: async ({ canvas }) => {
    // The rows must add up to what the donor gives.
    const totalRow = canvas.getByText('Total').closest('div')!;
    await expect(totalRow).toHaveTextContent(formatCents(PLAN_CENTS));
    for (const area of AREAS) await expect(canvas.getAllByText(area).length).toBeGreaterThan(0);
  },
};

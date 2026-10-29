import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { MOCKED_FEE_CENTS } from '@/lib/constants';
import { formatCents } from '@/lib/formatters';
import { causes, demoAllocations, demoPlans, nonprofits } from '@/lib/seed';
import { Amount } from '../Amount';
import { Button } from '../Button';
import { DemoTag } from '../DemoTag';
import { Ledger, LedgerRow } from '../Ledger';
import { NonprofitStatus } from '../NonprofitStatus';
import { Notice } from '../Notice';

/**
 * The design-system pieces put together as the "Check your plan" screen, using the seeded demo plan.
 * Copy here is placeholder: real screen copy goes through the copy check before it ships.
 */
function CheckYourPlan() {
  const plan = demoPlans[0];
  const toCauses = plan.monthlyAmountCents - MOCKED_FEE_CENTS;

  return (
    <div className="mx-auto flex min-h-screen max-w-[390px] flex-col gap-8 bg-ds-ground px-4 py-8 font-ds text-ds-ink">
      <div className="flex flex-col gap-6">
        <h1 className="text-ds-h1">Check your plan</h1>
        <Amount cents={plan.monthlyAmountCents} caption="every month" />
      </div>

      <Ledger>
        <LedgerRow label="You give" value={formatCents(plan.monthlyAmountCents)} />
        <LedgerRow label="Platform fee" value={formatCents(MOCKED_FEE_CENTS)} detail="Mocked in this demo" />
        <LedgerRow label="Goes to causes" value={formatCents(toCauses)} emphasis />
      </Ledger>

      <section className="flex flex-col gap-3" aria-labelledby="split-heading">
        <div className="flex items-baseline justify-between">
          <h2 id="split-heading" className="text-ds-row">Your split</h2>
          <DemoTag>Placeholder nonprofits</DemoTag>
        </div>
        <Ledger>
          {demoAllocations.map((allocation) => {
            const cause = causes.find((entry) => entry.id === allocation.causeId);
            const nonprofit = nonprofits.find((entry) => entry.id === allocation.nonprofitId);

            return (
              <LedgerRow
                key={allocation.id}
                label={cause?.name ?? allocation.causeId}
                value={formatCents(allocation.amountCents)}
                detail={
                  nonprofit ? (
                    <span className="flex flex-col gap-1">
                      <span>{nonprofit.name}</span>
                      <NonprofitStatus status={nonprofit.verificationStatus} />
                    </span>
                  ) : undefined
                }
              />
            );
          })}
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
    // What goes to causes must equal the sum of the split shown underneath.
    const splitTotal = demoAllocations.reduce((sum, allocation) => sum + allocation.amountCents, 0);
    const totalRow = canvas.getByText('Goes to causes').closest('div')!;
    await expect(totalRow).toHaveTextContent(formatCents(splitTotal));
  },
};

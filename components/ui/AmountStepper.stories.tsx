import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, fn } from 'storybook/test';
import { causes, demoAllocations } from '@/lib/seed';
import { formatCents } from '@/lib/formatters';
import { AmountStepper } from './AmountStepper';

const meta = {
  component: AmountStepper,
  tags: ['autodocs', 'ai-generated'],
  args: { label: 'Global Health', cents: 400, onChange: fn() },
  decorators: [
    (Story) => (
      <div className="max-w-[390px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AmountStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Give more to Global Health' }));
    await expect(args.onChange).toHaveBeenCalledWith(500);
  },
};

export const AtMinimum: Story = {
  args: { cents: 0 },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Give less to Global Health' })).toBeDisabled();
  },
};

/** The demo plan's split ($10 a month), adjustable per cause. Split option A from the canvas. */
export const Split: Story = {
  render: function Render() {
    const [amounts, setAmounts] = useState(() => Object.fromEntries(demoAllocations.map((a) => [a.causeId, a.amountCents])));

    return (
      <div className="border-t border-ds-rule">
        {demoAllocations.map((allocation) => (
          <AmountStepper
            key={allocation.id}
            label={causes.find((cause) => cause.id === allocation.causeId)?.name ?? allocation.causeId}
            cents={amounts[allocation.causeId]}
            onChange={(cents) => setAmounts((current) => ({ ...current, [allocation.causeId]: cents }))}
          />
        ))}
      </div>
    );
  },
  play: async ({ canvas, userEvent }) => {
    const row = canvas.getByRole('group', { name: 'Global Health' });
    await userEvent.click(canvas.getByRole('button', { name: 'Give more to Global Health' }));
    await expect(row.querySelector('output')).toHaveTextContent(formatCents(demoAllocations[0].amountCents + 100));
  },
};

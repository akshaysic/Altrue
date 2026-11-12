import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, fn } from 'storybook/test';
import { formatCents } from '@/lib/formatters';
import { AmountStepper } from './AmountStepper';
import { AREAS } from './storyData';

const meta = {
  component: AmountStepper,
  tags: ['autodocs', 'ai-generated'],
  args: { label: 'Global health', cents: 400, onChange: fn() },
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
    await userEvent.click(canvas.getByRole('button', { name: 'Give more to Global health' }));
    await expect(args.onChange).toHaveBeenCalledWith(500);
  },
};

export const AtMinimum: Story = {
  args: { cents: 0 },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Give less to Global health' })).toBeDisabled();
  },
};

/** A $10 a month split across the three MVP areas, adjustable per area. Split option A from the canvas. */
export const Split: Story = {
  render: function Render() {
    const [amounts, setAmounts] = useState<Record<string, number>>({ [AREAS[0]]: 400, [AREAS[1]]: 300, [AREAS[2]]: 300 });

    return (
      <div className="border-t border-ds-rule">
        {AREAS.map((area) => (
          <AmountStepper
            key={area}
            label={area}
            cents={amounts[area]}
            onChange={(cents) => setAmounts((current) => ({ ...current, [area]: cents }))}
          />
        ))}
      </div>
    );
  },
  play: async ({ canvas, userEvent }) => {
    const row = canvas.getByRole('group', { name: 'Global health' });
    await userEvent.click(canvas.getByRole('button', { name: 'Give more to Global health' }));
    await expect(row.querySelector('output')).toHaveTextContent(formatCents(500));
  },
};

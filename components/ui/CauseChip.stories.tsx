import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, fn } from 'storybook/test';
import { causes } from '@/lib/seed';
import { CauseChip } from './CauseChip';

const meta = {
  component: CauseChip,
  tags: ['autodocs', 'ai-generated'],
  args: { label: 'Global Health', onToggle: fn() },
} satisfies Meta<typeof CauseChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unselected: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const chip = canvas.getByRole('button', { name: 'Global Health' });
    await expect(chip).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(chip);
    await expect(args.onToggle).toHaveBeenCalledWith(true);
  },
};

export const Selected: Story = { args: { selected: true } };

export const Disabled: Story = { args: { disabled: true } };

/** All seeded causes, as on the "Pick causes" screen. */
export const Picker: Story = {
  render: function Render() {
    const [picked, setPicked] = useState<string[]>(['global-health']);

    return (
      <div className="flex max-w-[390px] flex-wrap gap-2">
        {causes.map((cause) => (
          <CauseChip
            key={cause.id}
            label={cause.name}
            selected={picked.includes(cause.id)}
            onToggle={(on) => setPicked((current) => (on ? [...current, cause.id] : current.filter((id) => id !== cause.id)))}
          />
        ))}
      </div>
    );
  },
  play: async ({ canvas, userEvent }) => {
    const second = canvas.getByRole('button', { name: causes[1].name });
    await userEvent.click(second);
    await expect(second).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(canvas.getByRole('button', { name: causes[0].name }));
    await expect(canvas.getByRole('button', { name: causes[0].name })).toHaveAttribute('aria-pressed', 'false');
  },
};

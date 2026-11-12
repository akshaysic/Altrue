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

export const Selected: Story = {
  args: { selected: true },
  play: async ({ canvas, userEvent, args }) => {
    const chip = canvas.getByRole('button', { name: 'Global Health' });
    await expect(chip).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(chip);
    await expect(args.onToggle).toHaveBeenCalledWith(false);
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas, userEvent, args }) => {
    const chip = canvas.getByRole('button', { name: 'Global Health' });
    await expect(chip).toBeDisabled();
    await expect(chip).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(chip);
    await expect(args.onToggle).not.toHaveBeenCalled();
  },
};

export const DisabledSelected: Story = {
  args: { selected: true, disabled: true },
  play: async ({ canvas, userEvent, args }) => {
    const chip = canvas.getByRole('button', { name: 'Global Health' });
    await expect(chip).toBeDisabled();
    await expect(chip).toHaveAttribute('aria-pressed', 'true');
    await expect(chip).toHaveAccessibleName('Global Health');
    await userEvent.click(chip);
    await expect(args.onToggle).not.toHaveBeenCalled();
  },
};

export const KeyboardFocus: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState(args.selected ?? false);
    return <CauseChip {...args} selected={selected} onToggle={(next) => {
      setSelected(next);
      args.onToggle?.(next);
    }} />;
  },
  play: async ({ canvas, userEvent, args }) => {
    const chip = canvas.getByRole('button', { name: 'Global Health' });
    await userEvent.tab();
    await expect(chip).toHaveFocus();
    await expect(chip.matches(':focus-visible')).toBe(true);
    await expect(getComputedStyle(chip).outlineWidth).toBe('2px');
    await expect(chip.getBoundingClientRect().height).toBeGreaterThanOrEqual(48);
    await userEvent.keyboard(' ');
    await expect(chip).toHaveAttribute('aria-pressed', 'true');
    await expect(args.onToggle).toHaveBeenNthCalledWith(1, true);
    await userEvent.keyboard('{Enter}');
    await expect(chip).toHaveAttribute('aria-pressed', 'false');
    await expect(args.onToggle).toHaveBeenNthCalledWith(2, false);
    await expect(args.onToggle).toHaveBeenCalledTimes(2);
  },
};

export const NarrowContainer: Story = {
  args: { selected: true },
  decorators: [(Story) => <div className="w-32"><Story /></div>],
  play: async ({ canvas }) => {
    const chip = canvas.getByRole('button', { name: 'Global Health' });
    await expect(chip.getBoundingClientRect().width).toBeLessThanOrEqual(128);
    await expect(chip.getBoundingClientRect().height).toBeGreaterThanOrEqual(48);
    await expect(chip.scrollWidth).toBeLessThanOrEqual(chip.clientWidth);
  },
};

export const StateGallery: Story = {
  render: (args) => (
    <div className="flex max-w-[390px] flex-wrap gap-ds-md">
      <CauseChip {...args} selected={false} />
      <CauseChip {...args} selected />
      <CauseChip {...args} selected={false} disabled />
      <CauseChip {...args} selected disabled />
    </div>
  ),
};

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

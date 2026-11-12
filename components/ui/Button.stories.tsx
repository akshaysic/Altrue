import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Link from 'next/link';
import { expect, fn } from 'storybook/test';
import { Button, buttonClassName } from './Button';

const meta = {
  component: Button,
  tags: ['autodocs', 'ai-generated'],
  args: { children: 'Set up my plan', onClick: fn() },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'quiet'] },
    loading: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Set up my plan' }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const Secondary: Story = { args: { variant: 'secondary', children: 'Adjust the split' } };

export const Quiet: Story = { args: { variant: 'quiet', children: 'Not now' } };

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole('button', { name: 'Set up my plan' });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const Loading: Story = {
  args: { loading: true },
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole('button', { name: 'Set up my plan' });
    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute('aria-busy', 'true');
    await expect(button).toHaveAccessibleName('Set up my plan');
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const SecondaryLoading: Story = {
  args: { variant: 'secondary', loading: true, children: 'Adjust the split' },
};

/** Native disabled/loading buttons are skipped; enabled buttons retain keyboard activation. */
export const KeyboardFocus: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-ds-md">
      <Button {...args} disabled />
      <Button {...args} loading />
      <Button {...args} variant="secondary">Adjust the split</Button>
      <Button {...args} variant="quiet">Not now</Button>
    </div>
  ),
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole('button', { name: 'Adjust the split' });
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await expect(button.matches(':focus-visible')).toBe(true);
    await expect(getComputedStyle(button).outlineWidth).toBe('2px');
    await expect(button.getBoundingClientRect().height).toBeGreaterThanOrEqual(56);
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onClick).toHaveBeenCalledTimes(2);
    await userEvent.tab();
    await expect(canvas.getByRole('button', { name: 'Not now' })).toHaveFocus();
  },
};

/** The minimum hit target grows when a label wraps, rather than clipping the label. */
export const NarrowContainer: Story = {
  args: { variant: 'secondary', children: 'Adjust the split', block: true },
  decorators: [(Story) => <div className="w-32"><Story /></div>],
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Adjust the split' });
    await expect(button.getBoundingClientRect().width).toBeLessThanOrEqual(128);
    await expect(button.getBoundingClientRect().height).toBeGreaterThanOrEqual(56);
    await expect(button.scrollWidth).toBeLessThanOrEqual(button.clientWidth);
  },
};

export const StateGallery: Story = {
  render: (args) => (
    <div className="grid w-full max-w-[390px] gap-ds-md">
      <Button {...args} block />
      <Button {...args} block variant="secondary">Adjust the split</Button>
      <Button {...args} block variant="quiet">Not now</Button>
      <Button {...args} block disabled />
      <Button {...args} block loading />
    </div>
  ),
};

/** The main action sits full width at the bottom of the screen on mobile. */
export const FullWidth: Story = {
  args: { block: true },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[390px]">
        <Story />
      </div>
    ),
  ],
};

/** Links that act as the main action share the same classes through `buttonClassName()`. */
export const AsLink: Story = {
  render: () => (
    <Link href="/onboarding" className={buttonClassName()}>
      Start giving
    </Link>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'Start giving' })).toHaveAttribute('href', '/onboarding');
  },
};

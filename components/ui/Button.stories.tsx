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
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Set up my plan' })).toBeDisabled();
  },
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

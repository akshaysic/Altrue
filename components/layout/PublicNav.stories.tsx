import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { PublicNav } from './PublicNav';

const meta = {
  component: PublicNav,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof PublicNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'Altrue' })).toHaveAttribute('href', '/');
    await expect(canvas.getByRole('link', { name: 'Start giving' })).toHaveAttribute('href', '/onboarding');
  },
};

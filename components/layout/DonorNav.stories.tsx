import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { DonorNav } from './DonorNav';

const meta = {
  component: DonorNav,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof DonorNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation');
    const hrefs = Array.from(nav.querySelectorAll('a')).map((link) => link.getAttribute('href'));
    await expect(hrefs).toEqual(['/dashboard', '/causes', '/plan/new', '/impact', '/donations', '/settings']);
  },
};

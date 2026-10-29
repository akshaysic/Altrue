import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DemoTag } from './DemoTag';

const meta = {
  component: DemoTag,
  tags: ['autodocs', 'ai-generated'],
} satisfies Meta<typeof DemoTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Estimate: Story = { args: { children: 'Demo estimate' } };

export const Source: Story = { args: { children: 'Source: demo seed estimate' } };

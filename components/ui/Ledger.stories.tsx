import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { Ledger, LedgerRow } from './Ledger';

const meta = {
  component: LedgerRow,
  tags: ['autodocs', 'ai-generated'],
  args: { label: 'You give', value: '$10' },
  decorators: [
    (Story) => (
      <div className="max-w-[390px]">
        <Ledger>
          <Story />
        </Ledger>
      </div>
    ),
  ],
} satisfies Meta<typeof LedgerRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    // Label and value are a term/description pair, so screen readers read them together.
    await expect(canvas.getByRole('term')).toHaveTextContent('You give');
    await expect(canvas.getByRole('definition')).toHaveTextContent('$10');
  },
};

export const WithDetail: Story = {
  args: { label: 'Platform fee', value: '$0', detail: 'Mocked in this demo' },
};

export const Total: Story = {
  args: { label: 'Goes to causes', value: '$10', emphasis: true },
};

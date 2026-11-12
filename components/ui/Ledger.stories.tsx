import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { formatCents } from '@/lib/formatters';
import { buildSplit } from '@/lib/mvpSplit';
import { Ledger, LedgerRow } from './Ledger';
import { AREAS } from './storyData';

// One real line from the $10 demo split, so the charity name and category come from the seed.
const [firstLine] = buildSplit({ areas: AREAS, amountCents: 1000, letExpertsDecide: false });

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
  args: { label: firstLine.organization.name, value: formatCents(firstLine.cents), detail: firstLine.organization.category },
};

export const Total: Story = {
  args: { label: 'Total', value: '$10', emphasis: true },
};

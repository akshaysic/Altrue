import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
import { causes, demoReportItems, demoReports } from '@/lib/seed';
import { formatCents } from '@/lib/formatters';
import ImpactReportDetailPage from './page';

const report = demoReports[0];

const meta = {
  component: ImpactReportDetailPage,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  args: { params: { reportId: report.id } },
} satisfies Meta<typeof ImpactReportDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DemoMayReport: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(`${report.periodStart} to ${report.periodEnd}`)).toBeVisible();
    await expect(canvas.getByText(`Total mocked donations: ${formatCents(report.totalDonatedCents)}`)).toBeVisible();
    // One card per report item, titled with its cause, showing the allocated amount.
    for (const item of demoReportItems.filter((entry) => entry.impactReportId === report.id)) {
      const causeName = causes.find((cause) => cause.id === item.causeId)?.name ?? item.causeId;
      const card = canvas.getByRole('heading', { name: causeName }).closest('section')!;
      await expect(card).toHaveTextContent(`Allocated amount: ${formatCents(item.amountAllocatedCents)}`);
    }
  },
};

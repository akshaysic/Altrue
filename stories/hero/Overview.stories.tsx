import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { ComponentType } from 'react';
import { expect } from 'storybook/test';
import { DonateScreen } from './DonateScreen';
import { CONCEPT_LABEL, FrameLandmarks } from './HeroFrame';
import {
  CharityEvidenceScreen,
  ChooseCausesScreen,
  ProfileScreen,
  YourPlanScreen,
  type HeroScreenProps,
} from './HeroScreens';

/** The flow in order, Explore → Donate → Plan, then Profile. */
const FRAMES: { name: string; Screen: ComponentType<HeroScreenProps> }[] = [
  { name: 'Explore', Screen: ChooseCausesScreen },
  { name: 'Charity detail', Screen: CharityEvidenceScreen },
  { name: 'Donate', Screen: DonateScreen },
  { name: 'Plan', Screen: YourPlanScreen },
  { name: 'Profile', Screen: ProfileScreen },
];

/** Every hero frame side by side for one-glance review. Frames drop their own landmarks so the page has one main. */
function Overview({ showConceptLabel = true }: HeroScreenProps) {
  return (
    <main className="flex w-max items-start gap-ds-xl bg-ds-rule p-ds-xl">
      <h1 className="sr-only">Altrue hero frames</h1>
      <FrameLandmarks enabled={false}>
        {FRAMES.map(({ name, Screen }) => (
          <section key={name} aria-label={name}>
            <Screen showConceptLabel={showConceptLabel} />
          </section>
        ))}
      </FrameLandmarks>
    </main>
  );
}

const meta = {
  title: 'Overview',
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  args: { showConceptLabel: true },
  argTypes: {
    showConceptLabel: { control: 'boolean', description: 'Shows "Concept mockup · sample data" in every frame header.' },
  },
  render: (args) => <Overview {...args} />,
} satisfies Meta<HeroScreenProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllFrames: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getAllByText(CONCEPT_LABEL)).toHaveLength(FRAMES.length);
  },
};

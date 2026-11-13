"use client";

import { createContext, useContext, type ReactNode } from "react";
import { CircleUser, Compass, PieChart } from "lucide-react";
import clsx from "clsx";
import { DemoTag } from "@/components/ui/DemoTag";

export const CONCEPT_LABEL = "Concept mockup · sample data";

/** 150 ms, and none at all when the viewer asks for reduced motion. */
export const HERO_TRANSITION = "duration-150 ease-out motion-reduce:transition-none";

/**
 * A frame is a whole screen, so it owns header, main and nav landmarks. The overview puts several frames on one
 * page, where repeated main and nav landmarks would fail accessibility checks; it turns them off through this context.
 */
const LandmarksContext = createContext(true);
export const useLandmarks = () => useContext(LandmarksContext);

export function FrameLandmarks({ enabled, children }: { enabled: boolean; children: ReactNode }) {
  return <LandmarksContext.Provider value={enabled}>{children}</LandmarksContext.Provider>;
}

export type HeroTab = "explore" | "plan" | "profile";

const TABS = [
  { id: "explore", label: "Explore", Icon: Compass },
  { id: "plan", label: "Plan", Icon: PieChart },
  { id: "profile", label: "Profile", Icon: CircleUser }
] as const;

/** Flat bottom navigation: a 1 px top rule, no badges, no shadow. The current tab is marked by colour, weight and aria-current. */
function TabBar({ active }: { active: HeroTab }) {
  const landmarks = useLandmarks();
  const Nav = landmarks ? "nav" : "div";

  return (
    <Nav aria-label={landmarks ? "Main" : undefined} className="border-t border-ds-rule bg-ds-ground">
      <ul className="grid grid-cols-3">
        {TABS.map(({ id, label, Icon }) => {
          const current = id === active;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={current ? "page" : undefined}
                className={clsx(
                  "flex min-h-14 flex-col items-center justify-center gap-0.5 font-ds text-ds-small",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ds-focus",
                  current ? "font-semibold text-ds-accent" : "text-ds-ink-2"
                )}
              >
                <Icon aria-hidden size={20} strokeWidth={current ? 2.25 : 1.75} />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </Nav>
  );
}

type HeroFrameProps = {
  /** Every pitch frame carries the concept label so a screenshot can't pass for the live product. */
  showConceptLabel?: boolean;
  /** Which bottom tab this screen belongs to. */
  tab: HeroTab;
  children: ReactNode;
  /** Pinned above the tab bar while the content scrolls: the screen's one primary action. */
  actionBar?: ReactNode;
  /** The screen's one plain caveat line, set in ink-2 just above the bottom rule. Replaces tinted notice boxes. */
  note?: ReactNode;
};

/** One flat 390 px screen: no bezel, no shadow, just the ground colour and a plain-text wordmark. */
export function HeroFrame({ showConceptLabel = true, tab, children, actionBar, note }: HeroFrameProps) {
  const landmarks = useLandmarks();
  const Header = landmarks ? "header" : "div";
  const Main = landmarks ? "main" : "div";

  return (
    <div className="flex min-h-[844px] w-[390px] flex-col bg-ds-ground font-ds text-ds-ink">
      <Header className="flex min-h-ds-touch items-center justify-between gap-ds-sm border-b border-ds-rule px-ds-md">
        <span className="text-ds-row font-bold tracking-tight">Altrue</span>
        {showConceptLabel ? <DemoTag>{CONCEPT_LABEL}</DemoTag> : null}
      </Header>
      <Main className="flex flex-1 flex-col gap-ds-xl px-ds-md pb-ds-md pt-ds-lg">
        {children}
        {note ? <p className="mt-auto text-ds-small text-ds-ink-2">{note}</p> : null}
      </Main>
      <div className="sticky bottom-0">
        {actionBar ? <div className="border-t border-ds-rule bg-ds-ground px-ds-md py-ds-sm">{actionBar}</div> : null}
        <TabBar active={tab} />
      </div>
    </div>
  );
}

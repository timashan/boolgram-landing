import { ReactNode } from "react";
import { MousePointerClick, Shield, TextCursor, Wrench } from "lucide-react";

import {
  Tile,
  TileVisual,
  TileTitle,
  TileDescription,
  TileContent,
  TileLink,
} from "../../ui/tile";
import { Section } from "../../ui/section";
import RippleIllustration from "../../illustrations/ripple";
import ChatIllustration from "../../illustrations/chat";
import MockupResponsiveTopIllustration from "../../illustrations/mockup-responsive-top";
import RadarSmallIllustration from "../../illustrations/radar-small";
import PipelinesIllustration from "../../illustrations/pipeline";

interface TileProps {
  title: string;
  description: ReactNode;
  visual: ReactNode;
  icon?: ReactNode;
  size?: string;
}

interface BentoGridProps {
  title?: string;
  description?: string;
  tiles?: TileProps[] | false;
  className?: string;
}

export default function BentoGrid({
  title = "Build a website that is hard to forget.",
  description = "Build a top-notch landing page even if you don't have the time for it. Create an irresistible offer that speaks professionalism and hi-end design.",
  tiles = [
    {
      title: "Your business in high-def",
      description: (
        <>
          <p>
            Zoom in on project decisions, actions, and insights from inception
            to completion. See your business like never before.
          </p>
        </>
      ),
      visual: (
        <div className="-mx-32 -my-16 lg:my-0">
          <RippleIllustration />
        </div>
      ),
      icon: (
        <MousePointerClick className="text-muted-foreground size-8 stroke-1" />
      ),
      size: "col-span-12 lg:col-span-4",
    },
    {
      title: "Talk to your projects",
      description: (
        <>
          <p>
            Retrace your steps, onboard new team members quickly, and track key
            decisions and action items to their stakeholders.
          </p>
        </>
      ),
      visual: (
        <div className="w-full sm:p-4 md:p-8">
          <ChatIllustration />
        </div>
      ),
      icon: <TextCursor className="text-muted-foreground size-8 stroke-1" />,
      size: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      title: "Cross-Team Collaboration",
      description: (
        <p className="max-w-[520px]">
          Define project scopes and track progress across teams. Set alerts to
          get preemtive, actionable information.
        </p>
      ),
      visual: (
        <div className="relative min-h-[240px]">
          <RadarSmallIllustration className="absolute top-1/2 left-1/2 -mt-32 h-[512px] w-[512px] -translate-x-1/2 -translate-y-1/2" />
        </div>
      ),
      icon: <Shield className="text-muted-foreground size-8 stroke-1" />,
      size: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      title: "The Project Dashboard",
      description: (
        <>
          <p className="max-w-[320px] lg:max-w-[460px]">
            Superdone sets normalized project status and drift risk to you
            assess how well your projects are doing. Create management updates
            with the touch of a button.
          </p>
        </>
      ),
      visual: (
        <div className="min-h-[240px] grow basis-0 sm:p-4 md:min-h-[320px] md:py-12 lg:px-12">
          <MockupResponsiveTopIllustration />
        </div>
      ),
      icon: <Wrench className="text-muted-foreground size-8 stroke-1" />,
      size: "col-span-12 md:flex-row",
    },
  ],
  className,
}: BentoGridProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        <h2 className="text-center text-3xl font-semibold text-balance sm:text-5xl">
          {title}
        </h2>
        <p className="text-md text-muted-foreground max-w-[840px] text-center font-medium text-balance sm:text-xl">
          {description}
        </p>
        {tiles !== false && tiles.length > 0 && (
          <div className="grid grid-cols-12 gap-4">
            {tiles.map((tile, index) => {
              if (index === tiles.length - 1) {
                return (
                  <Tile key={index} className={tile.size}>
                    <TileLink />
                    <TileContent className="grow basis-0 md:justify-end">
                      {tile.icon}
                      <TileTitle>{tile.title}</TileTitle>
                      <TileDescription>{tile.description}</TileDescription>
                    </TileContent>
                    <TileVisual>{tile.visual}</TileVisual>
                  </Tile>
                );
              }
              return (
                <Tile key={index} className={tile.size}>
                  <TileLink />
                  <TileVisual>{tile.visual}</TileVisual>
                  <TileContent>
                    {tile.icon}
                    <TileTitle>{tile.title}</TileTitle>
                    <TileDescription>{tile.description}</TileDescription>
                  </TileContent>
                </Tile>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}

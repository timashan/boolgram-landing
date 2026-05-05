import { ReactNode } from "react";
import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";

import { Item, ItemIcon, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Superdone gives super powers to your pm's",
  items = [
    {
      title: "Improve Meeting Culture",
      description:
        "Better meetings with collaborative agendas before every meeting.",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "Connect your calendar",
      description:
        "Sync with your calendar to pick the meetings you want to analyze.",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Categorize by Project",
      description:
        "Meeting summaries, actions, and decisions categorized by project.",
      icon: <EclipseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Set Alerts",
      description:
        "Be notified when projects are at risk or key decisions are made.",
      icon: <BlocksIcon className="size-5 stroke-1" />,
    },
    {
      title: "Talk to your projects",
      description:
        "Connect your Slack channels to ask questions and get updates.",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Share updates across teams",
      description: "Connect information silos across teams for zero latency.",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
    {
      title: "Your 360° project view",
      description: "Know who is working on what, and what they're working on.",
      icon: <LanguagesIcon className="size-5 stroke-1" />,
    },
    {
      title: "On-and-Offboarding",
      description: "Retain institutional knowledge and reduce onboarding time.",
      icon: <SquarePenIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

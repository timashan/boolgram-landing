import { ReactNode } from "react";
import Link from "next/link";

import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Questions && Answers",
  items = [
    {
      question: "What is Boolean?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Boolean is a digital hive mind that connects you with like-minded
            thinkers. Opinions are more than posts — they’re data points
            revealing collective beliefs.
          </p>
        </>
      ),
    },
    {
      question: "Why use Boolean instead of traditional social media?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Traditional social networks often fail at their core purpose:
            connecting people meaningfully. Most platforms chase likes,
            followers, and endless scrolling. Boolean does one thing
            differently: it connects people on an opinion level, showing what
            people actually think rather than how loudly they can shout.
          </p>
        </>
      ),
    },
    {
      question: "How is Boolean different from polls or surveys?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Surveys ask pre-set questions. Boolean flips this: anyone can post
            an opinion, and others respond organically. Responses are aggregated
            into belief maps and insights, revealing how different groups think
            — for example, US citizens vs Indian citizens or people in 2025 vs
            people in 2030.
          </p>
        </>
      ),
    },
    {
      question: "Can I see how my opinions compare to others?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Yes. Boolean provides analytics that show how your views align with
            different communities, regions, or the overall public mood. You can
            see exactly where you fit in the bigger picture.
          </p>
        </>
      ),
    },
    {
      question: "Does Boolean recommend people to follow?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Boolean recommends people based on shared beliefs and perspectives,
            helping you connect with the thinkers who matter to you.
          </p>
        </>
      ),
    },
    {
      question: "What happens to the opinions I post?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Every opinion becomes part of a living dataset. Boolean tracks
            shifts in sentiment, regional differences, and alignment across
            groups. Your posts aren’t just content — they contribute to
            understanding collective thought patterns.
          </p>
        </>
      ),
    },
    {
      question: "Who is Boolean for?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Boolean is for anyone who wants to express, explore, and understand
            opinions — from casual users debating ideas to researchers studying
            social trends. If you believe opinions shape the world, Boolean lets
            you see it happen in real time.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 md:flex-row md:items-start">
        <h2 className="max-w-[480px] text-center text-3xl leading-tight font-semibold sm:text-5xl md:text-left md:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="flex flex-col gap-4 py-6">
            {items.map((item, index) => (
              <article key={index} className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{item.question}</h3>
                {item.answer}
              </article>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

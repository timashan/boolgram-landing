"use client";
import * as React from "react";

import Glow from "../ui/glow";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

function TypewriterText({
  text,
  delay = 0,
  className = "",
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  React.useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const typeSpeed = 30; // Fast typing speed

    const typeInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, typeSpeed);

    return () => clearInterval(typeInterval);
  }, [text, isVisible]);

  return (
    <div
      className={`${className} ${isVisible ? "animate-in slide-in-from-left-2 duration-300" : "opacity-0"}`}
    >
      {displayedText}
      {isVisible && displayedText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </div>
  );
}

function ChatIllustration() {
  return (
    <div
      data-slot="chat-illustration"
      className="relative flex w-full flex-col gap-6 p-4 text-xs"
    >
      <div className="flex flex-col items-start gap-8">
        <TypewriterText
          text="What happened while I was out?"
          className="glass-4 text-muted-foreground max-w-[280px] rounded-xl px-3 py-2 shadow-md"
        />
        <div className="border-brand-foreground bg-brand-foreground/70 group-hover:animate-hover-reverse dark:border-brand dark:bg-brand-foreground relative z-10 flex rounded-lg border px-2 py-0.5 shadow-lg">
          User
          <div className="absolute -top-6 -right-3">
            <svg
              width="18"
              height="23"
              viewBox="0 0 18 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5514 1.49706L1.49701 14.5515C0.741049 15.3074 1.27645 16.6 2.34553 16.6H8.50147C9.13799 16.6 9.74844 16.8529 10.1985 17.3029L14.5514 21.6558C15.3074 22.4118 16.6 21.8764 16.6 20.8073V2.34558C16.6 1.2765 15.3074 0.741098 14.5514 1.49706Z"
                className="fill-brand-foreground/70 stroke-brand-foreground dark:fill-brand-foreground dark:stroke-brand stroke-1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <TypewriterText
          text="We launched the new dashboard! 🚀 The team pushed several updates including the new analytics view, improved user onboarding, and fixed those pesky bugs you reported. Everything's running smoothly now."
          delay={1500}
          className="glass-4 text-muted-foreground max-w-[280px] rounded-xl px-3 py-2 shadow-md"
        />
        <div className="group-hover:animate-hover relative z-10">
          <div className="border-border/80 bg-foreground text-primary-foreground flex -translate-x-24 rounded-lg border px-2 py-0.5">
            superdone
            <div className="absolute -top-6 -left-3">
              <svg
                width="18"
                height="23"
                viewBox="0 0 18 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.64853 1.49706L15.7029 14.5515C16.4589 15.3074 15.9235 16.6 14.8544 16.6H8.69848C8.06196 16.6 7.45151 16.8529 7.00143 17.3029L2.64853 21.6558C1.89257 22.4118 0.6 21.8764 0.6 20.8073V2.34558C0.6 1.2765 1.89257 0.741098 2.64853 1.49706Z"
                  className="fill-foreground stroke-border/80 stroke-1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Glow
        variant="center"
        className="scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
      />
    </div>
  );
}

export default ChatIllustration;

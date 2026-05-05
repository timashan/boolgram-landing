import * as React from "react";
import type { JSX } from "react";
import { cn } from "@/lib/utils";

import Glow from "../ui/glow";
import LaunchUI from "../logos/launch-ui";

function RadarIllustration({ className }: { className?: string }) {
  const totalCircles = 4;
  const totalSegments = 12;

  const createCircles = (index: number = 0): JSX.Element | null => {
    const opacity = (0.3 * index) / totalCircles;

    if (index === totalCircles) return null;

    const decrementPerStep = 100 / totalCircles;
    const size = 100 - index * decrementPerStep; // Dynamically calculate size reduction

    return (
      <>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border p-4"
          style={{
            borderColor: `color-mix(in oklab, var(--brand) ${opacity + 40}%, transparent)`,
            boxShadow: `inset 0px 0px 128px color-mix(in oklab, var(--brand-foreground) ${opacity + 20}%, transparent)`,
            width: `${size}%`,
            height: `${size}%`,
          }}
        ></div>
        {createCircles(index + 1)}
      </>
    );
  };

  const createSegments = (index: number = 0): JSX.Element | null => {
    if (index === totalSegments) return null;

    return (
      <>
        <div
          className="bg-brand-foreground/20 absolute top-1/2 left-0 h-[1px] w-full"
          style={{
            transform: `rotate(${index * (360 / totalSegments)}deg)`,
          }}
        ></div>
        {createSegments(index + 1)}
      </>
    );
  };

  return (
    <div
      data-slot="radar-illustration"
      className={cn("relative mb-8 aspect-2/1 w-full sm:mb-0", className)}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div className="relative -top-[1px] h-full w-full">
          <div className="relative aspect-1/1 h-[200%] w-full p-12">
            {createSegments()}
            <div className="border-background relative h-full w-full rounded-full border-[12px]">
              {createCircles()}
              <div
                className="animate-spin-slow absolute inset-0 h-full w-full rounded-full opacity-40"
                style={{
                  background:
                    "conic-gradient(transparent, transparent, transparent, transparent, var(--brand-foreground))",
                }}
              ></div>
            </div>
          </div>
        </div>
        <Glow variant="bottom" className="scale-x-[75%]" />
      </div>
      <div className="from-brand/20 to-brand-foreground dark:from-foreground dark:to-foreground/5 absolute bottom-0 left-1/2 flex size-24 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-linear-to-b p-0.5 shadow-2xl md:h-32 md:w-32">
        <div className="bg-background flex h-full w-full items-center justify-center rounded-full p-2.5">
          <svg
            width="60"
            height="49"
            viewBox="0 0 189 156"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.3364 77.9406C48.7974 98.0385 25.8192 106.625 0.999985 102.343L1 153.813C12.4035 154.885 17.5637 155.836 36.7654 153.814C62.3927 151.115 77.4456 140.583 88.2276 130.951C94.3658 125.468 99.5049 118.969 104.037 112.099C115.146 95.26 122.247 85.3863 130.381 75.2198C142.641 59.8971 164.06 53.4466 188 57.4386V3.01856C139.038 -5.31333 103.272 10.7243 61.3364 77.9406Z"
              stroke="white"
              strokeWidth="4"
            />
          </svg>

          {/* <LaunchUI className="size-12 md:h-16 md:w-16" /> */}
        </div>
      </div>
    </div>
  );
}

export default RadarIllustration;

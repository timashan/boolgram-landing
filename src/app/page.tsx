"use client";
import RippleIllustration from "@/components/illustrations/ripple";
import BentoGrid from "@/components/sections/bento-grid/2-rows-bottom";
import FAQ from "@/components/sections/faq/static";
import FeatureStickyLeft from "@/components/sections/feature/sticky-left";
import FeatureStickyRight from "@/components/sections/feature/sticky-right";
import Hero from "@/components/sections/hero/illustration";
import Hero1 from "@/components/sections/hero/top-glow";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Features from "./feature9";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isProd = process.env.NODE_ENV === "production";

  return (
    <div className="relative overflow-hidden">
      <main className="">
        <div className="flex justify-center">
          <Image
            src="logo.svg"
            alt="Mockup"
            width={600}
            height={100}
            className="invert absolute top-0 z-50 opacity-20 px-12 pointer-events-none"
          />
          <Image
            src="logo.svg"
            alt="Mockup"
            width={600}
            height={100}
            className="invert absolute top-0 z-50 px-12 scale-[5] pointer-events-none opacity-0 md:opacity-2"
          />
        </div>
        <Hero1
          // badge={
          //   <Badge variant="outline" className="animate-appear p-3">
          //     <span className="text-muted-foreground text-sm font-bold">
          //       Project
          //     </span>
          //     <Image
          //       src="/logo.png"
          //       alt="Mockup"
          //       width={100}
          //       height={100}
          //       className="invert"
          //     />
          //   </Badge>
          // }
          title=""
          description="Social media sites collect oceans of data but keep the insights locked away. What if that power came back to you? Boolean gives you the analytics behind opinions — so you can make data-driven decisions."
          // form={
          //   <>
          //     <iframe
          //       src="https://docs.google.com/forms/d/e/1FAIpQLSd8l7vmRHwnQFYqCZOfQcVRt7CFQolN6blNNTVYRLI_QXYLCg/viewform?embedded=true"
          //       width="640"
          //       height="418"
          //       frameborder="0"
          //       marginheight="0"
          //       marginwidth="0"
          //     >
          //       Loading…
          //     </iframe>
          //   </>
          // }
          form={
            <>
              {!isSubmitted && (
                <form
                  className="flex w-full max-w-[420px] gap-2"
                  method="POST"
                  onSubmit={(e) => {
                    e.preventDefault();
                    fetch(
                      "https://script.google.com/macros/s/AKfycbzTw6-_2LfDfl5VpKYzV1h2cnkV8jpW2XP36TifI_c5gvD8YoWhbqXPy0ppjGcXVB6S/exec",
                      {
                        method: "POST",
                        body: new FormData(e.currentTarget),
                      }
                    );
                    e.currentTarget.reset();
                    setIsSubmitted(true);
                  }}
                >
                  <Input
                    type="email"
                    placeholder="Email address"
                    className="border-border/10 bg-foreground/10 grow"
                    name="email"
                  />
                  <MagneticButton
                    className="shiny-button"
                    variant="default"
                    size="lg"
                  >
                    Join Waitlist
                  </MagneticButton>
                </form>
              )}
              {isSubmitted ? (
                <p className="text-muted-foreground text-xs">
                  We&apos;ll notify you when we launch.
                </p>
              ) : (
                <p className="text-muted-foreground text-xs">
                  Your email will solely be used for the waitlist.
                </p>
              )}
            </>
          }
          mockup={
            <div>
              <Image
                src="hero.png"
                alt="Mockup"
                width={1248}
                height={765}
                className="min-w-[30rem]"
              />
              <div className="absolute bottom-[-8rem] right-0 sm:max-w-[55%] sm:bottom-[-5rem] text-left font-bold animate-float">
                <div className="absolute z-50 flex gap-2 items-end p-5">
                  <span className="text-2xl md:text-4xl">Belief</span>
                  <span className="text-gray-500">Map</span>
                </div>
                <div className=" border border-accent bg-accent/10 backdrop-blur-md rounded-lg p-2 max-w-[90%]">
                  <Image
                    src="/beliefmap.png"
                    alt="Mockup"
                    width={300}
                    height={500}
                    className="object-cover w-full"
                  />
                  <p className="font-thin text-gray-300 text-sm">
                    A belief map where each node is a comment, showing clusters
                    of like-minded opinions and connections between similar
                    beliefs.
                  </p>
                </div>
              </div>
            </div>
          }
        />
        {/* <FeatureStickyLeft
          // imageDark={"/hero.png"}
          visual={<RippleIllustration />}
          title="Let Me Explain..."
          description="Today’s social platforms are designed for sharing, posting, and reacting — but they rarely reveal what people truly believe. You scroll through endless posts, yet you have no way of knowing how many silently agree with a bold opinion, where genuine consensus ends and division begins, or how much insight gets lost beneath the noise of virality and engagement tactics. It’s time to look deeper and uncover the real pulse of collective belief."
        />
        <FeatureStickyRight
          imageDark={"/hero.png"}
          title="Belief Mapping"
          description=" Collective Belief Mapping is a new way to visualize and understand the beliefs of groups, communities, and societies. It helps you see where people agree, disagree, and how opinions evolve over time."
        /> */}
        {/* <BentoGrid /> */}
        <Features />
        <FAQ />
      </main>
      <footer className=""></footer>
    </div>
  );
}

"use client";

import { EXPERIENCES } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "bottom 30%",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        timelineRef.current,
        { maxHeight: "0%" },
        { maxHeight: "100%", duration: 1, ease: "none" },
        0
      )
        .fromTo(
          timelineRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.2 },
          0
        )
        .fromTo(
          ".timeline-card",
          { opacity: 0 },
          { opacity: 1, stagger: 0.1, duration: 0.5 },
          0
        )
        .fromTo(
          ".timeline-dot",
          { scale: 0 },
          { scale: 1, stagger: 0.1, duration: 0.3 },
          0
        );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-padding" id="experience">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-ink leading-tight">
            My career{" "}
            <span className="font-normal italic text-ink-muted">&</span>
            <br />
            experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-[780px] mx-auto">
          {/* Vertical line container */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <div className="w-full h-full bg-border-cream/30" />
            <div
              ref={timelineRef}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple via-purple-light to-transparent"
              style={{ maxHeight: "0%" }}
            />
            {/* Glowing dot at bottom of line */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple z-10"
              style={{
                boxShadow:
                  "0 0 5px 2px #d29bff, 0 0 15px 5px #d097ff, 0 0 40px 10px rgba(194,164,255,0.3)",
                animation: "timelinePulse 0.8s linear infinite",
              }}
            />
          </div>

          {/* Entries */}
          {EXPERIENCES.map((exp, i) => {
            const isLeft = i % 2 === 1;
            return (
              <div
                key={exp.title}
                className="relative flex mb-12 last:mb-0 md:items-start"
              >
                {/* Mobile: all cards on the right side of the line */}
                {/* Desktop: alternate left/right */}
                {isLeft ? (
                  <>
                    {/* Card on the left */}
                    <div className="hidden md:block flex-1 pr-8">
                      <ExperienceCard exp={exp} className="timeline-card" />
                    </div>
                    {/* Dot */}
                    <TimelineDot />
                    <div className="flex-1 pl-8 md:pl-8">
                      <div className="md:hidden">
                        <ExperienceCard exp={exp} className="timeline-card" />
                      </div>
                      <div className="hidden md:block" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block flex-1" />
                    {/* Dot */}
                    <TimelineDot />
                    {/* Card on the right */}
                    <div className="flex-1 pl-8">
                      <ExperienceCard exp={exp} className="timeline-card" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes timelinePulse {
          10%, 20%, 50%, 70%, 90% {
            box-shadow: 0px 0px 5px 2px #d29bff;
          }
          0%, 30%, 64%, 80%, 100% {
            box-shadow: 0px 0px 5px 2px #d29bff, 0px 0px 15px 5px #d097ff,
              0px 0px 40px 10px rgba(194, 164, 255, 0.3);
          }
        }
      `}</style>
    </section>
  );
};

function TimelineDot() {
  return (
    <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
      <div className="timeline-dot w-3.5 h-3.5 rounded-full bg-white border-[3px] border-purple shadow-[0_0_8px_rgba(139,92,246,0.4)]" />
    </div>
  );
}

function ExperienceCard({
  exp,
  className,
}: {
  exp: (typeof EXPERIENCES)[0];
  className: string;
}) {
  return (
    <div
      className={`${className} bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg overflow-hidden bg-cream-dark flex items-center justify-center shrink-0">
          <Image
            src={exp.logo}
            alt={exp.organization}
            width={36}
            height={36}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-heading text-base font-bold text-purple leading-tight">
            {exp.title}
          </h3>
          <p className="text-xs text-ink-muted">
            {exp.organization} &middot; {exp.location}
          </p>
        </div>
      </div>
      <p className="text-xs text-ink-faint mb-2">{exp.duration}</p>
      <p className="text-sm text-ink-light leading-relaxed">
        {exp.description}
      </p>
    </div>
  );
}

export default Experience;

"use client";

import { TECH_STACK } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".tech-item");
      if (!items.length) return;

      gsap.set(items, { y: 30, opacity: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        onEnter: () => {
          gsap.to(items, {
            y: 0,
            opacity: 1,
            stagger: 0.03,
            duration: 0.5,
            ease: "power2.out",
          });
        },
        once: true,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="tech-stack" className="relative" ref={sectionRef}>
      {/* Gradient fade from cream → dark */}
      <div className="h-32 bg-gradient-to-b from-cream to-[#1a1520]" />

      {/* Dark cinematic island */}
      <div className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#1a1520] py-20">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/video.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-5">
          <h2 className="gradient-text-purple text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-center mb-12 uppercase">
            Tech Stack
          </h2>

          {/* Inverted Pyramid */}
          <div className="flex flex-col items-center gap-3">
            {TECH_STACK.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="flex justify-center gap-2.5 flex-wrap"
              >
                {row.map((tech) => (
                  <div
                    key={tech.name}
                    className="tech-item group flex flex-col items-center justify-center w-[55px] h-[68px] p-2 rounded-[10px] border border-white/10 bg-white/[0.03] backdrop-blur-lg cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:bg-purple/10 hover:border-purple hover:shadow-[0_8px_30px_rgba(194,164,255,0.25)]"
                    title={tech.name}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-[30px] h-[30px] object-contain grayscale contrast-125 brightness-150 opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                    <span className="text-[9px] text-white/70 mt-1 text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[50px] group-hover:text-white">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient fade from dark → cream */}
      <div className="h-32 bg-gradient-to-b from-[#1a1520] to-cream" />
    </section>
  );
};

export default TechStack;

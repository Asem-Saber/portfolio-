"use client";

import { ABOUT_TEXT } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-quote", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-content", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 85%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="section-padding"
      id="about"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Quote */}
        <div className="about-quote max-w-3xl mb-16">
          <blockquote className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink leading-tight">
            &ldquo;{ABOUT_TEXT.quote}&rdquo;
          </blockquote>
        </div>

        {/* Two-column content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="about-content">
            <h3 className="text-xs tracking-widest text-ink-muted uppercase mb-4">
              About Me
            </h3>
            <p className="text-ink-light text-base leading-relaxed">
              {ABOUT_TEXT.bio}
            </p>
          </div>
          <div className="about-content">
            <h3 className="text-xs tracking-widest text-ink-muted uppercase mb-4">
              What I Do
            </h3>
            <ul className="space-y-3">
              {ABOUT_TEXT.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-ink-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

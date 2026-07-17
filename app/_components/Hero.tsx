"use client";

import { GENERAL_INFO } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(".hero-name-first", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".hero-name-last",
          { y: 80, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ".hero-role",
          { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .from(
          ".hero-photo",
          { scale: 1.1, opacity: 0, duration: 1, ease: "power2.out" },
          "-=0.6"
        )
        .from(
          ".hero-cta",
          { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );

      // Scroll fade-out
      gsap.to(".hero-content", {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="relative min-h-screen flex items-center" id="hero">
      <div
        ref={containerRef}
        className="hero-content max-w-[1200px] mx-auto px-6 pt-24 pb-16 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <div className="overflow-hidden mb-2">
              <h1 className="hero-name-first font-heading text-6xl sm:text-7xl lg:text-8xl font-bold text-ink leading-none">
                ASEM
              </h1>
            </div>
            <div className="overflow-hidden mb-6">
              <h1 className="hero-name-last font-heading text-6xl sm:text-7xl lg:text-8xl font-bold text-ink leading-none">
                <span className="italic font-normal text-ink-muted">
                  SABER
                </span>
              </h1>
            </div>
            <div className="hero-role flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-purple" />
              <span className="text-ink-muted text-sm tracking-widest uppercase">
                {GENERAL_INFO.role} — {GENERAL_INFO.location}
              </span>
            </div>
            <div className="hero-cta flex items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-ink text-cream text-sm tracking-wider rounded hover:bg-ink-light transition-colors"
              >
                GET IN TOUCH
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-ink text-ink text-sm tracking-wider rounded hover:bg-ink hover:text-cream transition-colors"
              >
                VIEW WORK
              </a>
            </div>
          </div>

          {/* Right - Photo */}
          <div className="hero-photo relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-96 sm:w-80 sm:h-[440px] rounded-2xl overflow-hidden">
              <Image
                src="/images/personal-pic.jpeg"
                alt="Asem Saber"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream/40 to-transparent" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

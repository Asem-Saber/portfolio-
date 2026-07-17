"use client";

import { GENERAL_INFO } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".contact-email", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".contact-btn", {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="contact" className="py-24 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-ink-muted text-base mb-4">Have a project in mind?</p>
        <a
          href={`mailto:${GENERAL_INFO.email}`}
          className="contact-email inline-block font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ink hover:underline decoration-purple underline-offset-4 transition-all"
        >
          {GENERAL_INFO.email}
        </a>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href={`mailto:${GENERAL_INFO.email}`}
            className="contact-btn px-6 py-2.5 bg-ink text-cream text-sm tracking-wider rounded hover:bg-ink-light transition-colors"
          >
            LET&apos;S TALK
          </a>
          <a
            href={GENERAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn px-6 py-2.5 border border-ink text-ink text-sm tracking-wider rounded hover:bg-ink hover:text-cream transition-colors"
          >
            RESUME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

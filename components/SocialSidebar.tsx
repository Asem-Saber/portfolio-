"use client";

import { SOCIAL_LINKS, GENERAL_INFO } from "@/lib/data";
import { FaGithub, FaLinkedinIn, FaKaggle } from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";
import { useEffect, useRef } from "react";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Kaggle: FaKaggle,
};

const SocialSidebar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cleanups: (() => void)[] = [];

    container.querySelectorAll<HTMLElement>(".social-icon-wrap").forEach((span) => {
      const link = span.querySelector("a") as HTMLElement;
      if (!link) return;

      const rect = span.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = rect.width / 2;
      let currentY = rect.height / 2;
      let rafId: number;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        rafId = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const r = span.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;

        if (x > 5 && x < r.width - 5 && y > 5 && y < r.height - 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = r.width / 2;
          mouseY = r.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      rafId = requestAnimationFrame(updatePosition);

      cleanups.push(() => {
        document.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(rafId);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="fixed inset-0 z-40 hidden lg:block pointer-events-none">
      <div ref={containerRef}>
        {/* Social icons — far left */}
        <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 pointer-events-auto">
          {SOCIAL_LINKS.map((link) => {
            const Icon = ICONS[link.name];
            return (
              <span key={link.name} className="social-icon-wrap w-12 h-12 relative flex">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute text-ink-muted hover:text-purple transition-colors duration-300"
                  style={{
                    left: "var(--siLeft, 50%)",
                    top: "var(--siTop, 50%)",
                    transform: "translate(-50%, -50%)",
                    fontSize: "22px",
                    display: "flex",
                    willChange: "left, top",
                  }}
                  aria-label={link.name}
                >
                  {Icon && <Icon />}
                </a>
              </span>
            );
          })}
        </div>

        {/* Resume button — far right */}
        <a
          href={GENERAL_INFO.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-6 bottom-10 flex items-center gap-1.5 text-ink-muted hover:text-ink transition-colors duration-300 pointer-events-auto group"
          style={{
            letterSpacing: "4px",
            fontSize: "15px",
            lineHeight: "15px",
            fontWeight: 600,
          }}
        >
          <span className="relative overflow-hidden inline-flex">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
              RESUME
            </span>
            <span className="absolute top-full left-0 inline-block transition-transform duration-300 group-hover:-translate-y-full text-purple">
              RESUME
            </span>
          </span>
          <span className="flex items-center text-[17px] -mt-px">
            <TbNotes />
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;

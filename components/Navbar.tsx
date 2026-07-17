"use client";

import { cn } from "@/lib/utils";
import { GENERAL_INFO, NAV_LINKS } from "@/lib/data";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { getLenis } from "./LenisProvider";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  const isProjectPage = pathname.startsWith("/projects/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleAnchorClick = (e: Event) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      e.stopPropagation();

      const target = document.querySelector(href) as HTMLElement;
      const lenisInst = getLenis();
      if (target && lenisInst) {
        lenisInst.scrollTo(target, { offset: -80, duration: 1.5 });
      }
    };

    nav.addEventListener("click", handleAnchorClick, true);
    return () => nav.removeEventListener("click", handleAnchorClick, true);
  }, []);

  if (isProjectPage) return null;

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/80 backdrop-blur-md border-b border-border-cream"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="font-heading text-lg font-bold tracking-tight text-ink"
        >
          asem<span className="text-purple">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-ink-muted hover:text-ink transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block w-6 h-0.5 bg-ink rounded transition-all duration-300",
              menuOpen && "rotate-45 translate-y-[4px]"
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-ink rounded transition-all duration-300",
              menuOpen && "-rotate-45 -translate-y-[4px]"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-cream z-40 transition-all duration-500",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-heading font-semibold text-ink"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

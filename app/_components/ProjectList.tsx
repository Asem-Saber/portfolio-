"use client";

import { FEATURED_PROJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import TransitionLink from "@/components/TransitionLink";
import { useRef, useState, useCallback } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectRow = ({
  project,
  index,
  onMouseEnter,
}: {
  project: (typeof FEATURED_PROJECTS)[0];
  index: number;
  onMouseEnter: (slug: string) => void;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { context, contextSafe } = useGSAP(() => {}, {
    scope: svgRef,
    revertOnUpdate: true,
  });

  const handleMouseEnter = contextSafe?.(() => {
    onMouseEnter(project.slug);

    const box = svgRef.current?.querySelector("#box") as SVGPathElement;
    const arrowLine = svgRef.current?.querySelector(
      "#arrow-line"
    ) as SVGPathElement;
    const arrowCurb = svgRef.current?.querySelector(
      "#arrow-curb"
    ) as SVGPathElement;

    if (!box || !arrowLine || !arrowCurb) return;

    gsap.set(box, {
      opacity: 0,
      strokeDasharray: box.getTotalLength(),
      strokeDashoffset: box.getTotalLength(),
    });
    gsap.set(arrowLine, {
      opacity: 0,
      strokeDasharray: arrowLine.getTotalLength(),
      strokeDashoffset: arrowLine.getTotalLength(),
    });
    gsap.set(arrowCurb, {
      opacity: 0,
      strokeDasharray: arrowCurb.getTotalLength(),
      strokeDashoffset: arrowCurb.getTotalLength(),
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(svgRef.current, { autoAlpha: 1 })
      .to(box, { opacity: 1, strokeDashoffset: 0 })
      .to(arrowLine, { opacity: 1, strokeDashoffset: 0 }, "<0.2")
      .to(arrowCurb, { opacity: 1, strokeDashoffset: 0 })
      .to(svgRef.current, { autoAlpha: 0 }, "+=1");
  });

  const handleMouseLeave = contextSafe?.(() => {
    context.kill();
  });

  return (
    <TransitionLink
      href={`/projects/${project.slug}`}
      className="project-row group border-t border-border-cream py-7 flex items-baseline gap-5 transition-opacity duration-300 md:group-hover/projects:opacity-40 md:hover:!opacity-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-sm text-ink-muted font-mono">
        _{(index + 1).toString().padStart(2, "0")}.
      </span>
      <div className="flex-1">
        <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold flex gap-4 items-center transition-all duration-700 bg-gradient-to-r from-purple to-ink from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
          {project.title}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-ink-muted">
            <svg
              ref={svgRef}
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                id="box"
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
              />
              <path id="arrow-line" d="M10 14 21 3" />
              <path id="arrow-curb" d="M15 3h6v6" />
            </svg>
          </span>
        </h3>
      </div>
      <div className="hidden sm:flex gap-2 flex-wrap max-w-[300px] justify-end">
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 bg-cream-dark rounded-full text-ink-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </TransitionLink>
  );
};

const ProjectList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  useGSAP(
    (_, contextSafe) => {
      if (typeof window === "undefined" || window.innerWidth < 768) return;

      const handleMouseMove = contextSafe?.((e: MouseEvent) => {
        if (!containerRef.current || !imageContainerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const imgRect = imageContainerRef.current.getBoundingClientRect();
        const offsetTop = e.clientY - rect.y;

        if (
          rect.y > e.clientY ||
          rect.bottom < e.clientY ||
          rect.x > e.clientX ||
          rect.right < e.clientX
        ) {
          gsap.to(imageContainerRef.current, { duration: 0.3, opacity: 0 });
          return;
        }

        gsap.to(imageContainerRef.current, {
          y: offsetTop - imgRect.height / 2,
          duration: 1,
          opacity: 1,
        });
      }) as EventListener;

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top 80%",
          toggleActions: "restart none none reverse",
          scrub: 1,
        },
      });

      tl.from(containerRef.current, {
        y: 150,
        opacity: 0,
      });
    },
    { scope: containerRef }
  );

  const handleMouseEnter = useCallback((slug: string) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    setHoveredSlug(slug);
  }, []);

  return (
    <section className="section-padding" id="projects">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs tracking-[4px] text-ink-muted uppercase mb-12">
          Selected Projects
        </p>

        <div className="group/projects relative" ref={containerRef}>
          {/* Floating thumbnail */}
          <div
            ref={imageContainerRef}
            className="hidden md:block absolute right-0 top-0 z-10 pointer-events-none w-[250px] xl:w-[350px] aspect-[4/3] overflow-hidden opacity-0 rounded-lg shadow-2xl"
          >
            {FEATURED_PROJECTS.map((project) => (
              <Image
                key={project.slug}
                src={project.thumbnail}
                alt={project.title}
                width={400}
                height={500}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-all duration-500",
                  hoveredSlug !== project.slug && "opacity-0"
                )}
              />
            ))}
          </div>

          {/* Project rows */}
          <div className="flex flex-col">
            {FEATURED_PROJECTS.map((project, index) => (
              <ProjectRow
                key={project.slug}
                project={project}
                index={index}
                onMouseEnter={handleMouseEnter}
              />
            ))}
          </div>

          {/* Bottom border */}
          <div className="border-t border-border-cream" />
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="text-sm text-ink border-b border-ink pb-0.5 hover:text-purple hover:border-purple transition-colors"
          >
            See All Projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;

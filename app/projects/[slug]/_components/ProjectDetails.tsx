"use client";

import { IProject } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import TransitionLink from "@/components/TransitionLink";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props {
  project: IProject;
}

const ProjectDetails = ({ project }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation 1: Staggered fade-in with y:30→0 (Site 2 exact)
  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.set(".fade-in-later", { autoAlpha: 0, y: 30 });
      gsap.timeline({ delay: 0.5 }).to(".fade-in-later", {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
      });
    },
    { scope: containerRef }
  );

  // Animation 2: Pinned info section blur/scale/fade on scroll (Site 2 exact)
  useGSAP(
    () => {
      if (typeof window === "undefined" || window.innerWidth < 992) return;

      gsap.to("#info", {
        filter: "blur(3px)",
        autoAlpha: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: "#info",
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
        },
      });
    },
    { scope: containerRef }
  );

  // Animation 3: Parallax backgroundPosition on images (Site 2 exact)
  useGSAP(
    () => {
      gsap.utils
        .toArray<HTMLDivElement>("#images > div")
        .forEach((imageDiv, i) => {
          gsap.to(imageDiv, {
            backgroundPosition: "center 0%",
            ease: "none",
            scrollTrigger: {
              trigger: imageDiv,
              start: () => (i ? "top bottom" : "top 50%"),
              end: "bottom top",
              scrub: true,
            },
          });
        });
    },
    { scope: containerRef }
  );

  return (
    <section className="pt-5 pb-14">
      <div className="max-w-[1200px] mx-auto px-6" ref={containerRef}>
        <TransitionLink
          href="/#projects"
          back
          className="mb-16 inline-flex gap-2 items-center group h-12 text-ink-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back
        </TransitionLink>

        <div
          className="top-0 min-h-[calc(100svh-100px)] flex"
          id="info"
        >
          <div className="relative w-full">
            {/* Title + links */}
            <div className="flex items-center gap-4 mx-auto mb-10 max-w-[635px]">
              <h1 className="fade-in-later opacity-0 font-heading text-4xl md:text-6xl font-bold text-ink leading-none">
                {project.title}
              </h1>
              <div className="fade-in-later opacity-0 flex gap-2 shrink-0">
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-ink-muted hover:text-purple transition-colors"
                  >
                    <FaGithub size={28} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-ink-muted hover:text-purple transition-colors"
                  >
                    <ExternalLink size={28} />
                  </a>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="max-w-[635px] space-y-7 pb-20 mx-auto">
              <div className="fade-in-later">
                <p className="text-ink-muted font-heading font-semibold mb-2">
                  Description
                </p>
                <div className="text-base text-ink-light leading-relaxed">
                  {project.description}
                </div>
              </div>
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="fade-in-later">
                  <p className="text-ink-muted font-heading font-semibold mb-2">
                    Key Features
                  </p>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="text-base text-ink-light leading-relaxed flex gap-2"
                      >
                        <span className="text-purple mt-1 shrink-0">—</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="fade-in-later">
                <p className="text-ink-muted font-heading font-semibold mb-2">
                  Tech & Technique
                </p>
                <div className="text-lg text-ink">
                  {project.techStack.join(", ")}
                </div>
              </div>
              {project.role && (
                <div className="fade-in-later">
                  <p className="text-ink-muted font-heading font-semibold mb-2">
                    My Role
                  </p>
                  <div className="text-base text-ink-light leading-relaxed">
                    {project.role}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image gallery with parallax */}
        {project.images.length > 0 && (
          <div
            className="fade-in-later relative flex flex-col gap-2 max-w-[800px] mx-auto"
            id="images"
          >
            {project.images.map((image) => (
              <div
                key={image}
                className="group relative w-full aspect-[750/400] bg-cream-dark rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center 50%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a
                  href={image}
                  target="_blank"
                  className="absolute top-4 right-4 bg-cream/70 text-ink w-10 h-10 inline-flex justify-center items-center rounded opacity-0 group-hover:opacity-100 hover:bg-purple hover:text-white transition-all"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;

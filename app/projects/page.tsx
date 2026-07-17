"use client";

import { PROJECTS } from "@/lib/data";
import TransitionLink from "@/components/TransitionLink";
import Image from "next/image";

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) => {
  return (
    <TransitionLink
      href={`/projects/${project.slug}`}
      className="group relative bg-cream-light rounded-2xl overflow-hidden border border-border-cream hover:border-purple/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Number badge */}
      <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-ink/80 backdrop-blur-sm flex items-center justify-center">
        <span className="text-xs font-mono font-bold text-cream">
          {(index + 1).toString().padStart(2, "0")}
        </span>
      </div>

      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-cream-dark">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-xl font-bold text-ink group-hover:text-purple transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-xs text-ink-muted font-mono">{project.year}</span>
        </div>

        <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2.5 py-0.5 bg-cream-dark rounded-full text-ink-muted"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[11px] px-2.5 py-0.5 bg-cream-dark rounded-full text-ink-muted">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </TransitionLink>
  );
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-14">
          <TransitionLink
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-purple transition-colors mb-8 group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </TransitionLink>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-ink">
            All Projects<span className="text-purple">.</span>
          </h1>
          <p className="text-ink-muted mt-4 max-w-lg">
            A collection of AI, NLP, and full-stack projects I&apos;ve built.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";
import ProjectDetails from "./_components/ProjectDetails";
import type { Metadata } from "next";

export const generateStaticParams = async () => {
  return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  return {
    title: `${project?.title} — Asem Saber`,
    description: project?.tagline,
  };
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectDetails project={project} />;
};

export default Page;

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  kind?: "desktop" | "mobile" | "detail";
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: number;
  summary: string;
  services: string[];
  coverImage: ProjectImage;
  gallery: ProjectImage[];
  challenge: string;
  approach?: string;
  solution: string;
  results?: { label: string; value: string; context?: string }[];
  website?: string;
  status: "draft" | "in-progress" | "completed";
  featured: boolean;
};

// Publish only verified, completed work. See README for the content contract.
export const projects: Project[] = [];

export const completedProjects = projects.filter(
  (project) => project.status === "completed",
);
export const featuredProjects = completedProjects.filter(
  (project) => project.featured,
);
export const getProject = (slug: string) =>
  completedProjects.find((project) => project.slug === slug);

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  completedProjects,
  getProject,
  type ProjectImage,
} from "@/data/projects";
import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/metadata";
import { Identity } from "@/components/Identity";
import { Arrow } from "@/components/Arrow";
import { ContactLinks } from "@/components/ContactLinks";

export function generateStaticParams() {
  return completedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project)
    return {
      title: "Project not found",
      robots: { index: false, follow: false },
    };
  return {
    title: project.title,
    description: project.summary,
    alternates: getSiteUrl()
      ? { canonical: `/work/${project.slug}` }
      : undefined,
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      url: getSiteUrl() ? `/work/${project.slug}` : undefined,
      images: [
        {
          url: project.coverImage.src,
          width: project.coverImage.width,
          height: project.coverImage.height,
          alt: project.coverImage.alt,
        },
      ],
    },
  };
}

function CaseImage({
  image,
  priority = false,
}: {
  image: ProjectImage;
  priority?: boolean;
}) {
  return (
    <figure
      className={`case-image${image.kind === "mobile" ? " case-image--mobile" : ""}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={
          image.kind === "mobile"
            ? "(max-width: 600px) 90vw, 430px"
            : "(max-width: 1600px) 90vw, 1400px"
        }
        priority={priority}
      />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const index = completedProjects.findIndex((item) => item.id === project.id);
  const nextProject =
    completedProjects.length > 1
      ? completedProjects[(index + 1) % completedProjects.length]
      : undefined;
  return (
    <>
      <header className="document-header">
        <Link href="/">
          <Identity />
        </Link>
        <Link
          className="text-link"
          href={project.featured ? `/#work-${project.slug}` : "/#intro"}
        >
          Back to the studio <Arrow />
        </Link>
      </header>
      <main className="case-study">
        <span className="mono accent">Selected work / {project.industry}</span>
        <h1>{project.title}</h1>
        <p className="case-intro">{project.summary}</p>
        <dl className="case-facts">
          <div>
            <dt>Client</dt>
            <dd>{project.client}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>What we did</dt>
            <dd>{project.services.join(" / ")}</dd>
          </div>
        </dl>
        <CaseImage image={project.coverImage} priority />
        <section className="case-text">
          <h2>The challenge</h2>
          <p>{project.challenge}</p>
        </section>
        {project.approach && (
          <section className="case-text">
            <h2>Our approach</h2>
            <p>{project.approach}</p>
          </section>
        )}
        <section className="case-text">
          <h2>The solution</h2>
          <p>{project.solution}</p>
        </section>
        {project.gallery.map((image) => (
          <CaseImage key={image.src} image={image} />
        ))}
        {!!project.results?.length && (
          <section className="case-text">
            <h2>The results</h2>
            <dl className="case-results">
              {project.results.map((result) => (
                <div key={result.label}>
                  <dt>{result.label}</dt>
                  <dd>
                    {result.value}
                    {result.context && <p>{result.context}</p>}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}
        {project.website && (
          <p className="case-image">
            <a
              className="text-link"
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit {project.client}’s website{" "}
              <span className="mono">(opens in a new tab)</span>
              <Arrow diagonal />
            </a>
          </p>
        )}
        {nextProject && (
          <Link className="next-project" href={`/work/${nextProject.slug}`}>
            <span className="mono">Next project / {nextProject.industry}</span>
            <h2>
              {nextProject.title} <span aria-hidden="true">↗</span>
            </h2>
          </Link>
        )}
        <section className="case-contact">
          <h2>Your business. What’s next?</h2>
          <ContactLinks />
        </section>
      </main>
    </>
  );
}

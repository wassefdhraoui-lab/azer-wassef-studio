import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { conversationHref } from "@/data/site";

export function WorkShowcase() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <div className="section-kicker">
        <span className="mono">01 / Selected work</span>
        <span className="mono">
          Considered, from first thought to final detail.
        </span>
      </div>
      <div className="work-title-row">
        <h2 id="work-heading">
          Made with
          <br />
          <span className="serifless-italic">a point of view.</span>
        </h2>
        <span className="work-punctuation" aria-hidden="true">
          [w]
        </span>
      </div>
      {featuredProjects.length ? (
        <div className="project-sequence">
          {featuredProjects.map((project, index) => (
            <article
              className="portfolio-project"
              id={`work-${project.slug}`}
              key={project.id}
            >
              <Link
                className="portfolio-image"
                href={`/work/${project.slug}`}
                data-reactive
                aria-label={`Explore ${project.title}`}
              >
                <div data-motion-target>
                  <Image
                    src={project.coverImage.src}
                    alt={project.coverImage.alt}
                    width={project.coverImage.width}
                    height={project.coverImage.height}
                    sizes="(max-width: 900px) 92vw, 88vw"
                  />
                </div>
                <span className="project-open mono">Explore project ↗</span>
              </Link>
              <div className="portfolio-caption">
                <span className="mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <Link href={`/work/${project.slug}`}>
                    <h3>{project.title}</h3>
                  </Link>
                  <p>
                    {project.industry} / {project.year}
                  </p>
                </div>
                <span className="mono">{project.services.join(" / ")}</span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="work-in-progress" data-reactive>
          <span className="work-watermark" aria-hidden="true">
            IN PROGRESS
          </span>
          <div className="work-proof" data-motion-target>
            <div className="proof-top mono">
              <span>Portfolio / In preparation</span>
              <span>●</span>
            </div>
            <span className="proof-title">
              Good work.
              <br />
              No shortcuts.
            </span>
            <div className="proof-bottom">
              <p>
                Our first project stories are being prepared.
                <br />
                We’ll publish the work when it’s ready.
              </p>
              <span className="mono">Built. Then shared.</span>
            </div>
          </div>
          <div className="work-empty-caption">
            <span className="mono">
              Real projects. The full story. Coming in time.
            </span>
            <a href={conversationHref()} className="text-link">
              Have a project in mind? <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

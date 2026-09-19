import { site } from "@/data/site";
import { Arrow } from "./Arrow";

export function ContactLinks() {
  return (
    <div className="contact-links">
      {site.founders.map((founder) => (
        <a
          key={founder.email}
          href={`mailto:${founder.email}`}
          className="contact-link"
        >
          <span>
            <span className="contact-name">{founder.name}</span>
            <span className="contact-email">{founder.email}</span>
          </span>
          <Arrow diagonal />
        </a>
      ))}
    </div>
  );
}

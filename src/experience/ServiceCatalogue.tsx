"use client";
import { useState } from "react";
import { services } from "@/data/services";
import { conversationHref } from "@/data/site";

export function ServiceCatalogue() {
  const [active, setActive] = useState(0);
  const current = services[active];
  return (
    <div className="service-catalogue">
      <aside className="service-preview" aria-label="Service preview">
        <div className="service-specimen" data-reactive>
          <div data-motion-target>
            <span className="mono">
              {current.category} / {String(active + 1).padStart(2, "0")}
            </span>
            <span className="specimen-number" aria-hidden="true">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="specimen-caption">
              A specific need.
              <br />A considered solution.
            </span>
            <span className="specimen-cross" aria-hidden="true">
              +
            </span>
          </div>
        </div>
        <div className="service-preview-copy">
          <span className="mono">What could we make?</span>
          <p>{current.example}</p>
          <span className="service-preview-price">{current.price}</span>
        </div>
      </aside>
      <div className="service-index">
        {services.map((service, index) => (
          <details
            key={service.id}
            name="studio-services"
            className="service-row"
            onPointerEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onToggle={(event) => {
              if (event.currentTarget.open) setActive(index);
            }}
          >
            <summary>
              <span className="service-number mono">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="service-name">{service.name}</span>
              <span className="service-price mono">{service.price}</span>
              <span className="expand-sign" aria-hidden="true" />
            </summary>
            <div className="service-details">
              <p>{service.description}</p>
              <ul>
                {service.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {"note" in service && (
                <p className="service-note">{service.note}</p>
              )}
              <a
                className="text-link"
                href={conversationHref(
                  `Let’s talk about ${service.name.toLowerCase()}`,
                )}
              >
                Discuss this service <span aria-hidden="true">↗</span>
              </a>
            </div>
          </details>
        ))}
        <p className="service-smallprint">
          Starting prices depend on scope. We agree the work and final quote
          before we begin. Choose one service, or combine what you need.
        </p>
      </div>
    </div>
  );
}

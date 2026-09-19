import { packages, services } from "@/data/services";
import { conversationHref } from "@/data/site";

export function MonthlySupport() {
  return (
    <section
      id="support"
      className="support-section"
      aria-labelledby="support-heading"
    >
      <div className="section-kicker">
        <span className="mono">03 / Optional monthly support</span>
        <span className="mono">After the launch</span>
      </div>
      <div className="support-intro">
        <h2 id="support-heading">
          Built once.
          <br />
          Looked after.
        </h2>
        <div>
          <p>
            We build it.
            <br />
            We can also keep it running.
          </p>
          <span>
            One-off projects come first. Monthly support is an optional next
            step, never a requirement.
          </span>
        </div>
      </div>
      <div className="support-plans">
        {packages.map((plan, index) => (
          <article className="support-plan" key={plan.id}>
            <div className="plan-top">
              <span className="mono">0{index + 1}</span>
              <h3>{plan.name}</h3>
            </div>
            <p className="plan-price">
              €{plan.price}
              <span>/ month</span>
            </p>
            <p className="plan-description">{plan.description}</p>
            <ul>
              {plan.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className="plan-cta"
              href={conversationHref(
                `I’m interested in the ${plan.name} monthly plan`,
              )}
              data-magnetic
            >
              <span data-motion-target>Discuss {plan.name}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
      <div className="support-example">
        <span className="mono">For example</span>
        <p>
          Website <strong>{services[0].price.toLowerCase()}</strong>
          <span className="optional-plus">+</span>Optional {packages[0].name}{" "}
          <strong>€{packages[0].price} / month</strong>
        </p>
        <span>Build what you need. Add support if it helps.</span>
      </div>
      <div className="support-faq">
        <details>
          <summary>
            Where does monthly support stop?
            <span className="expand-sign" aria-hidden="true" />
          </summary>
          <p>
            Large redesigns, new pages, new automations, new functionality and
            substantial content work are quoted as separate projects. Included
            change time is a monthly allowance, not unlimited work. Higher plans
            replace the lower plan’s change-time allowance; they do not add
            together.
          </p>
        </details>
        <details>
          <summary>
            Are third-party costs included?
            <span className="expand-sign" aria-hidden="true" />
          </summary>
          <p>
            Domains, hosting, premium software, external APIs, AI usage, email
            providers and booking platforms are separate unless explicitly
            agreed. Hosting/support coordination means helping you manage those
            services, not automatically covering their charges.
          </p>
        </details>
      </div>
    </section>
  );
}

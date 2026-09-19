import { site, conversationHref } from "@/data/site";
import { Identity } from "@/components/Identity";
import { ContactLinks } from "@/components/ContactLinks";
import { ServiceCatalogue } from "./ServiceCatalogue";
import { WorkShowcase } from "./WorkShowcase";
import { MonthlySupport } from "./MonthlySupport";

export function StudioPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a
          href="#intro"
          className="brand"
          aria-label="Studio home"
          data-magnetic
        >
          <span data-motion-target>
            <Identity />
          </span>
        </a>
        <span className="header-description mono">
          Creative digital studio
          <br />
          Independent by design.
        </span>
        <nav aria-label="Main navigation">
          <a href="#work" data-magnetic>
            <span data-motion-target>Work</span>
          </a>
          <a href="#services" data-magnetic>
            <span data-motion-target>Services</span>
          </a>
          <a href="#support" data-magnetic>
            <span data-motion-target>Care</span>
          </a>
          <a href="#contact" className="nav-contact" data-magnetic>
            <span data-motion-target>Let’s talk</span>
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <main id="main">
        <section id="intro" className="hero" aria-labelledby="hero-heading">
          <div className="hero-top">
            <span className="mono">Independent creative digital studio</span>
            <span className="mono">Web / Automation / Interaction</span>
          </div>
          <div className="hero-type" data-reactive>
            <h1 id="hero-heading">
              <span>Good ideas.</span>
              <span className="hero-second" data-motion-target>
                Better <em>made.</em>
              </span>
            </h1>
          </div>
          <div className="hero-proof" aria-hidden="true">
            <div className="type-proof">
              <span className="mono">A thought, taking shape.</span>
              <span className="proof-glyph">
                Aa
                <span className="caret" />
              </span>
              <div className="proof-measure mono">
                <span>Design</span>
                <span>×</span>
                <span>Development</span>
              </div>
              <i className="handle handle--tl" />
              <i className="handle handle--tr" />
              <i className="handle handle--bl" />
              <i className="handle handle--br" />
            </div>
          </div>
          <div className="hero-bottom">
            <a href="#work" className="explore-link" data-magnetic>
              <span data-motion-target>Explore the work</span>
              <span aria-hidden="true">↓</span>
            </a>
            <p>
              We make websites, useful systems
              <br />
              and digital experiences.
              <br />
              <span>For the business behind the screen.</span>
            </p>
            <span className="mono hero-signature">
              Two minds.
              <br />A hands-on studio.
            </span>
          </div>
        </section>
        <div className="studio-thesis">
          <span className="mono">A little context</span>
          <p>
            A website people remember.
            <br />A task you never have to repeat.
            <br />
            <span>Good digital work makes a difference.</span>
          </p>
        </div>
        <WorkShowcase />
        <section
          id="services"
          className="services-section"
          aria-labelledby="services-heading"
        >
          <div className="section-kicker">
            <span className="mono">02 / Individual services</span>
            <span className="mono">One thing. Or a few things, connected.</span>
          </div>
          <div className="services-intro">
            <h2 id="services-heading">
              What do
              <br />
              you have in mind?
            </h2>
            <p>
              A new website. A better booking flow.
              <br />
              One less repetitive task.
              <br />
              <strong>Every service is available on its own.</strong>
              <span>Open a service to explore the details.</span>
            </p>
          </div>
          <ServiceCatalogue />
        </section>
        <MonthlySupport />
        <section
          id="studio"
          className="founders-section"
          aria-labelledby="founders-heading"
        >
          <div className="section-kicker">
            <span className="mono">04 / The studio</span>
            <span className="mono">Small by choice. Close to the work.</span>
          </div>
          <div className="founders-intro">
            <h2 id="founders-heading">
              No layers.
              <br />
              Just us.
            </h2>
            <p>
              The people you talk to
              <br />
              are the people who build it.
              <span>
                We work with cafés, trades, local services and growing
                businesses. Start with what should work better. We’ll take it
                from there.
              </span>
            </p>
          </div>
          <div className="founder-list">
            {site.founders.map((founder, index) => (
              <a
                key={founder.email}
                href={`mailto:${founder.email}`}
                data-magnetic
              >
                <span className="mono">0{index + 1} / Co-founder</span>
                <span className="founder-name" data-motion-target>
                  {founder.name}
                </span>
                <span className="founder-write mono">Say hello ↗</span>
              </a>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-heading"
        >
          <div className="section-kicker">
            <span className="mono">05 / Your next move</span>
            <span className="mono">A business. A question. An idea.</span>
          </div>
          <div className="contact-intro">
            <p>
              Have something
              <br />
              that should work better?
            </p>
            <span className="mono">No perfect brief needed.</span>
          </div>
          <h2 id="contact-heading" className="contact-word">
            <a href={conversationHref()} data-magnetic>
              <span data-motion-target>
                Let’s talk<span className="contact-period">.</span>
              </span>
              <span className="contact-plus" aria-hidden="true">
                ↗
              </span>
            </a>
          </h2>
          <ContactLinks />
          <footer className="site-footer">
            <Identity />
            <span className="mono">Web / Automation / Digital experiences</span>
            {site.socialLinks.map((link) => (
              <a key={link.href} href={link.href} className="mono" rel="me">
                {link.label}
              </a>
            ))}
            <a href="#intro" className="mono">
              Back to top ↑
            </a>
          </footer>
        </section>
      </main>
    </>
  );
}

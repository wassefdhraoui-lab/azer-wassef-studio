import { StudioShell } from "@/experience/StudioShell";
import { StudioPage } from "@/experience/StudioPage";
import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/metadata";

export default function Home() {
  const siteUrl = getSiteUrl();
  return (
    <>
      {siteUrl && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: siteUrl.href,
              description: site.description,
              founder: site.founders.map((founder) => ({
                "@type": "Person",
                name: founder.name,
              })),
              email: site.founders.map((founder) => founder.email),
            }).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <StudioShell>
        <StudioPage />
      </StudioShell>
    </>
  );
}

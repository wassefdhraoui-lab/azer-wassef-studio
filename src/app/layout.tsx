import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/metadata";
import "@/styles/globals.css";

const siteUrl = getSiteUrl();
const instrument = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-italic.woff2",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--font-instrument",
  display: "swap",
  weight: "400 700",
});
const plex = localFont({
  src: "../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
  variable: "--font-plex",
  display: "swap",
  weight: "400",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: siteUrl ?? new URL("http://localhost:3000"),
  title: {
    default: `${site.name} — Independent digital studio`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: site.founders.map((founder) => ({ name: founder.name })),
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    locale: "en",
    siteName: site.name,
    title: site.name,
    description: site.description,
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#efefe7",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrument.variable} ${plex.variable}`}>
      <body>{children}</body>
    </html>
  );
}

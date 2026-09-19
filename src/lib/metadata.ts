export function getSiteUrl(): URL | undefined {
  const value = process.env.SITE_URL;
  if (!value) return undefined;
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol))
    throw new Error("SITE_URL must be an HTTP(S) origin.");
  return new URL(url.origin);
}

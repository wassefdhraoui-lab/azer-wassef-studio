export const site = {
  name: "AZER × WASSEF",
  description:
    "A creative digital studio by Azer Kahwech and Wassef Dhraoui. Custom websites, practical automation and digital experiences for real businesses.",
  positioning: "Good ideas. Better made.",
  founders: [
    { name: "Azer Kahwech", email: "azerkahwech@gmail.com" },
    { name: "Wassef Dhraoui", email: "wassefdhraoui@gmail.com" },
  ],
  socialLinks: [] as { label: string; href: string }[],
  contact: { subject: "Let’s make something work better" },
} as const;

export function conversationHref(subject: string = site.contact.subject) {
  return `mailto:${site.founders.map((founder) => founder.email).join(",")}?subject=${encodeURIComponent(subject)}`;
}

import { site } from "@/data/site";

export function Identity() {
  return <span className="identity">{site.name}</span>;
}

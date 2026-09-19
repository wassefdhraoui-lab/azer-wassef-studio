import Link from "next/link";
import { Identity } from "@/components/Identity";
import { Arrow } from "@/components/Arrow";

export default function NotFound() {
  return (
    <>
      <header className="document-header">
        <Link href="/">
          <Identity />
        </Link>
      </header>
      <main className="not-found">
        <span className="mono accent">404 / Page not found</span>
        <h1>
          Wrong turn.
          <br />
          Right studio.
        </h1>
        <p>That page isn’t here. Let’s get you back to the studio.</p>
        <Link href="/" className="text-link">
          Back to the beginning <Arrow />
        </Link>
      </main>
    </>
  );
}

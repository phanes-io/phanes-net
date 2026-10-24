import type { Metadata } from 'next';
import AsciiArt from "@/components/AsciiArt";
import ProjectCard from "@/components/ProjectCard";
import ContactLinks from "@/components/ContactLinks";
import Link from "next/link";
import { getSortedProjects } from "@/lib/github";

export const revalidate = 21600;
export const metadata: Metadata = { alternates: {canonical:'https://phanes.net/'} };

export default async function Home() {
  const featured = (await getSortedProjects()).slice(0, 3);
  return (
    <>
      <div className="page-shell">
        <div className="center-zone">
          <main className="page-grid">
            {/* LEFT: ASCII Art */}
            <aside className="ascii-column">
              <AsciiArt />
            </aside>

            {/* RIGHT: Content — projects first */}
            <section className="content-column">

              {/* Tagline — the thing this site is about */}
              <h1 className="tagline">
                Building tools for a more private, open web.
              </h1>

              {/* Projects — main focus */}
              <div className="projects-block">
                {featured.map((project) => (
                  <ProjectCard key={project.name} {...project} lastUpdated={project.lastUpdated} />
                ))}
                <Link href="/projects" className="see-more">
                  → all projects
                </Link>
                <Link href="/blog" className="see-more">→ engineering notes</Link>
              </div>

              <div className="divider" />

              {/* Identity — present but in the background */}
              <div className="identity-block">
                <div className="identity-row">
                  <span className="identity-name">Jannik Schröder</span>
                  <span className="identity-sep">·</span>
                  <span className="identity-site">phanes.net</span>
                </div>
                <div className="identity-bio">
                  System Engineer. Privacy, open-source, infrastructure.
                </div>
              </div>

              {/* Contact */}
              <ContactLinks />

            </section>
          </main>
        </div>

        {/* Footer */}
        <footer className="page-footer">
          <span className="footer-text">phanes.net</span>
          <span className="footer-dot">·</span>
          <Link href="/legal" className="footer-link">Legal Notice</Link>
          <span className="footer-dot">·</span>
          <Link href="/privacy" className="footer-link">Privacy Policy</Link>
          <span className="footer-spacer" />
          <a href="https://status.phanes.net" className="footer-link footer-status">Status</a>
        </footer>
      </div>

      <style>{`
        /* ─── Shell ──────────────────────────────────────────────── */
        .page-shell {
          min-height: 100vh;
          background-color: #0a0a0f;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .center-zone {
          flex: 1;
          width: 100%;
          max-width: 1080px;
          padding: 2.5rem 1.5rem;
          display: flex;
          align-items: safe center;
          justify-content: center;
        }

        /* ─── Grid ───────────────────────────────────────────────── */
        .page-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        .ascii-column {
          display: none;
        }
        @media (min-width: 860px) {
          .page-grid {
            grid-template-columns: 1fr 1fr;
          }
          .ascii-column {
            display: flex;
            align-items: center;
            justify-content: center;
            position: sticky;
            top: 2.5rem;
          }
        }

        /* ─── Content column ─────────────────────────────────────── */
        .content-column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* ─── Tagline ────────────────────────────────────────────── */
        .tagline {
          color: #a78bfa;
          font-size: 0.9rem;
          font-family: var(--font-mono);
          letter-spacing: 0.04em;
          line-height: 1.5;
          margin: 0;
        }

        /* ─── Projects ───────────────────────────────────────────── */
        .projects-block {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .project-card:hover {
          border-left-color: #4c1d95 !important;
        }
        .project-card a:hover {
          color: #c4b5fd !important;
        }
        .see-more {
          color: #334155 !important;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
          text-shadow: none !important;
          transition: color 0.15s;
          align-self: flex-start;
        }
        .see-more:hover {
          color: #6d28d9 !important;
        }

        /* ─── Divider ────────────────────────────────────────────── */
        .divider {
          height: 1px;
          background-color: #13131e;
          width: 100%;
        }

        /* ─── Identity ───────────────────────────────────────────── */
        .identity-block {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-family: var(--font-mono);
        }
        .identity-row {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .identity-name {
          color: #94a3b8;
          font-size: 0.78rem;
          letter-spacing: 0.03em;
        }
        .identity-sep {
          color: #1e293b;
          font-size: 0.78rem;
        }
        .identity-site {
          color: #6d28d9;
          font-size: 0.78rem;
          letter-spacing: 0.03em;
        }
        .identity-bio {
          color: #475569;
          font-size: 0.75rem;
          letter-spacing: 0.02em;
        }

        /* ─── Footer ─────────────────────────────────────────────── */
        .page-footer {
          width: 100%;
          max-width: 1080px;
          padding: 1.1rem 1.5rem;
          border-top: 1px solid #13131e;
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }
        .footer-text {
          color: #334155;
          font-size: 0.72rem;
          letter-spacing: 0.05em;
          font-family: var(--font-mono);
        }
        .footer-dot { color: #1e293b; font-size: 0.72rem; }
        .footer-link {
          color: #334155 !important;
          font-size: 0.72rem;
          letter-spacing: 0.05em;
          font-family: var(--font-mono);
          text-shadow: none !important;
        }
        .footer-link:hover {
          color: #64748b !important;
          text-shadow: none !important;
        }
        .footer-spacer { flex: 1; }
        .footer-status {
          color: #7c3aed !important;
        }
        .footer-status:hover {
          color: #a78bfa !important;
        }
      `}</style>
    </>
  );
}

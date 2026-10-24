import Link from "next/link";
import { getSortedProjects } from "@/lib/github";
import { contributions } from "@/lib/projects";
import type { Metadata } from "next";

export const revalidate = 21600;

export const metadata: Metadata = {
  alternates: {canonical:"https://phanes.net/projects"},
  title: "Projects — phanes.net",
  description: "All projects by Jannik Schröder.",
};

export default async function ProjectsPage() {
  const sortedProjects = await getSortedProjects();
  return (
    <>
      <div className="proj-shell">
        <div className="proj-zone">
          {/* Header */}
          <header className="proj-header">
            <Link href="/" className="proj-back">← phanes.net</Link>
            <h1 className="proj-title">Projects</h1>
          </header>

          {/* Project list */}
          <main className="proj-list">
            {sortedProjects.map((project) => (
              <details key={project.slug} className="proj-item">
                <summary className="proj-summary">
                  <span className="proj-marker">▶</span>
                  <span className="proj-name">{project.name}</span>
                  {project.subtitle && (
                    <span className="proj-sub">{project.subtitle}</span>
                  )}
                  <span className="proj-short">{project.description}</span>
                </summary>

                <div className="proj-body">
                  <p className="proj-details">{project.details}</p>
                  <div className="proj-footer">
                    <div className="proj-links">
                      {project.links.map((link) => (
                        <span key={link.href} className="proj-link-wrap">
                          {link.dimPrefix && (
                            <span className="proj-link-prefix">{link.dimPrefix}</span>
                          )}
                          <a
                            href={link.href}
                            target={link.href.startsWith("/") ? undefined : "_blank"}
                            rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
                            className="proj-link"
                          >
                            {link.label}
                          </a>
                        </span>
                      ))}
                    </div>
                    {project.lastUpdated && (
                      <span className="proj-updated">updated {project.lastUpdated}</span>
                    )}
                  </div>
                </div>
              </details>
            ))}
          </main>

          {contributions.length > 0 && (
            <>
              <div className="contrib-divider" />
              <section className="contrib-section">
                <h2 className="contrib-heading">Contributions</h2>
                <div className="contrib-list">
                  {[...contributions]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((c) => (
                      <details key={c.repo} className="contrib-item">
                        <summary className="contrib-summary">
                          <span className="contrib-marker">▶</span>
                          <span className="contrib-name">{c.name}</span>
                          <span className="contrib-repo">{c.repo}</span>
                          <span className="contrib-short">{c.description}</span>
                        </summary>
                        <div className="contrib-body">
                          <p className="contrib-desc">{c.description}</p>
                          <span style={{ display: "inline-flex", alignItems: "baseline", gap: "0.2rem" }}>
                            <span className="proj-link-prefix">gh/</span>
                            <a href={c.href} target="_blank" rel="noopener noreferrer" className="contrib-link">
                              {c.repo}
                            </a>
                          </span>
                        </div>
                      </details>
                    ))}
                </div>
              </section>
            </>
          )}
        </div>

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
        .proj-shell {
          min-height: 100vh;
          background-color: #0a0a0f;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .proj-zone {
          flex: 1;
          width: 100%;
          max-width: 680px;
          padding: 3rem 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        /* Header */
        .proj-header {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .proj-back {
          color: #4c1d95 !important;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          letter-spacing: 0.06em;
          text-shadow: none !important;
          transition: color 0.15s;
        }
        .proj-back:hover { color: #7c3aed !important; }
        .proj-title {
          color: #c4b5fd;
          font-size: 1rem;
          font-family: var(--font-mono);
          font-weight: 400;
          letter-spacing: 0.08em;
          margin: 0;
        }

        /* List */
        .proj-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-left: 1px solid #13131e;
        }

        /* Item */
        .proj-item {
          border-left: 1px solid transparent;
          margin-left: -1px;
          transition: border-color 0.15s;
        }
        .proj-item[open] {
          border-left-color: #4c1d95;
        }
        .proj-item + .proj-item {
          border-top: 1px solid #0d0d16;
        }

        /* Summary row */
        .proj-summary {
          list-style: none;
          display: grid;
          grid-template-columns: 0.9rem auto auto 1fr;
          align-items: baseline;
          gap: 0.55rem;
          padding: 0.85rem 1rem;
          cursor: pointer;
          user-select: none;
          transition: background 0.12s;
        }
        .proj-summary::-webkit-details-marker { display: none; }
        .proj-summary::marker { display: none; }
        .proj-summary:hover { background: #0d0d16; }

        .proj-marker {
          color: #4c1d95;
          font-size: 0.55rem;
          transition: transform 0.18s, color 0.15s;
          display: inline-block;
          line-height: 1;
          align-self: center;
        }
        .proj-item[open] .proj-marker {
          transform: rotate(90deg);
          color: #7c3aed;
        }
        .proj-name {
          color: #e2e8f0;
          font-size: 0.82rem;
          font-family: var(--font-mono);
          font-weight: 600;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }
        .proj-sub {
          color: #334155;
          font-size: 0.72rem;
          font-family: var(--font-mono);
          white-space: nowrap;
        }
        .proj-short {
          color: #475569;
          font-size: 0.76rem;
          font-family: var(--font-mono);
          letter-spacing: 0.01em;
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* Expanded body */
        .proj-body {
          padding: 0 1rem 1rem 2.45rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .proj-details {
          color: #64748b;
          font-size: 0.79rem;
          font-family: var(--font-mono);
          line-height: 1.7;
          letter-spacing: 0.01em;
          margin: 0;
        }
        .proj-footer {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .proj-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0 1.25rem;
        }
        .proj-updated {
          color: #1e293b;
          font-size: 0.68rem;
          font-family: var(--font-mono);
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        /* ─── Contributions ───────────────────────────────────── */
        .contrib-divider {
          height: 1px;
          background: #13131e;
          width: 100%;
        }
        .contrib-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contrib-heading {
          color: #334155;
          font-size: 0.68rem;
          font-family: var(--font-mono);
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0;
        }
        .contrib-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-left: 1px solid #13131e;
        }
        .contrib-item {
          border-left: 1px solid transparent;
          margin-left: -1px;
          transition: border-color 0.15s;
        }
        .contrib-item[open] {
          border-left-color: #1e1b2e;
        }
        .contrib-item + .contrib-item {
          border-top: 1px solid #0d0d16;
        }
        .contrib-summary {
          list-style: none;
          display: grid;
          grid-template-columns: 0.9rem auto auto 1fr;
          align-items: baseline;
          gap: 0.55rem;
          padding: 0.75rem 1rem;
          cursor: pointer;
          user-select: none;
          transition: background 0.12s;
        }
        .contrib-summary::-webkit-details-marker { display: none; }
        .contrib-summary::marker { display: none; }
        .contrib-summary:hover { background: #0a0a11; }
        .contrib-marker {
          color: #1e293b;
          font-size: 0.55rem;
          transition: transform 0.18s, color 0.15s;
          display: inline-block;
          line-height: 1;
          align-self: center;
        }
        .contrib-item[open] .contrib-marker {
          transform: rotate(90deg);
          color: #334155;
        }
        .contrib-name {
          color: #64748b;
          font-size: 0.82rem;
          font-family: var(--font-mono);
          font-weight: 600;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }
        .contrib-summary:hover .contrib-name { color: #94a3b8; }
        .contrib-repo {
          color: #1e293b;
          font-size: 0.72rem;
          font-family: var(--font-mono);
          white-space: nowrap;
        }
        .contrib-short {
          color: #334155;
          font-size: 0.76rem;
          font-family: var(--font-mono);
          letter-spacing: 0.01em;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .contrib-body {
          padding: 0 1rem 0.85rem 2.45rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .contrib-desc {
          color: #475569;
          font-size: 0.79rem;
          font-family: var(--font-mono);
          line-height: 1.7;
          letter-spacing: 0.01em;
          margin: 0;
        }
        .contrib-link {
          color: #4c1d95 !important;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          text-shadow: none !important;
          transition: color 0.15s;
        }
        .contrib-link:hover { color: #7c3aed !important; }
        @media (max-width: 600px) {
          .contrib-summary {
            grid-template-columns: 0.9rem auto 1fr;
          }
          .contrib-repo { display: none; }
          .contrib-short { white-space: normal; }
        }
        .proj-link-wrap {
          display: inline-flex;
          align-items: baseline;
          gap: 0.2rem;
        }
        .proj-link-prefix {
          color: #334155;
          font-size: 0.72rem;
          font-family: var(--font-mono);
        }
        .proj-link {
          color: #7c3aed !important;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          text-shadow: none !important;
          transition: color 0.15s;
        }
        .proj-link:hover { color: #a78bfa !important; }

        /* Footer */
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
        .footer-status { color: #7c3aed !important; }
        .footer-status:hover { color: #a78bfa !important; }

        @media (max-width: 600px) {
          .proj-summary {
            grid-template-columns: 0.9rem auto 1fr;
          }
          .proj-sub { display: none; }
          .proj-short { white-space: normal; }
        }
      `}</style>
    </>
  );
}

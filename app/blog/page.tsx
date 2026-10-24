import { connection } from 'next/server';
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogAsciiArt from "@/components/BlogAsciiArt";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {canonical:"https://phanes.net/blog"},
  title: "Blog — phanes.net",
  description: "Notes on privacy, open infrastructure, and systems design.",
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-CA", {timeZone:"Europe/Berlin"}); // YYYY-MM-DD
}

export default async function BlogPage() {
  await connection();
  const posts = await getAllPosts();

  return (
    <>
      <div className="blog-shell">
        <div className="blog-zone">
          {/* Header */}
          <header className="blog-header">
            <div className="blog-header-text">
              <Link href="/" className="blog-back">← phanes.net</Link>
              <h1 className="blog-title">Blog</h1>
              <p className="blog-sub">Notes on privacy, infrastructure, and the open web.</p>
            </div>
            <div className="blog-header-art">
              <BlogAsciiArt />
            </div>
          </header>

          {/* Post list */}
          <main className="blog-list">
            {posts.length === 0 && (
              <p className="blog-empty">No posts yet.</p>
            )}
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="post-item">
                <span className="post-date">{formatDate(post.date)}</span>
                <span className="post-name">{post.title}</span>
              </Link>
            ))}
          </main>
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
        .blog-shell {
          min-height: 100vh;
          background-color: #0a0a0f;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .blog-zone {
          flex: 1;
          width: 100%;
          max-width: 680px;
          padding: 3rem 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        /* Header */
        .blog-header {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }
        .blog-header-text {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          flex: 1;
        }
        .blog-header-art {
          opacity: 0.5;
          flex-shrink: 0;
        }
        .blog-back {
          color: #4c1d95 !important;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          letter-spacing: 0.06em;
          text-shadow: none !important;
          transition: color 0.15s;
        }
        .blog-back:hover {
          color: #7c3aed !important;
        }
        .blog-title {
          color: #c4b5fd;
          font-size: 1rem;
          font-family: var(--font-mono);
          font-weight: 400;
          letter-spacing: 0.08em;
          margin: 0;
        }
        .blog-sub {
          color: #475569;
          font-size: 0.76rem;
          font-family: var(--font-mono);
          letter-spacing: 0.03em;
          margin: 0;
        }

        /* Post list */
        .blog-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-left: 1px solid #13131e;
        }
        .post-item {
          display: flex;
          align-items: baseline;
          gap: 1.2rem;
          padding: 0.85rem 1rem;
          border-left: 1px solid transparent;
          margin-left: -1px;
          transition: border-color 0.15s;
          text-decoration: none !important;
          text-shadow: none !important;
        }
        .post-item:hover {
          border-left-color: #6d28d9;
          background-color: #0d0d16;
        }
        .post-date {
          color: #334155;
          font-size: 0.72rem;
          font-family: var(--font-mono);
          letter-spacing: 0.04em;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .post-name {
          color: #94a3b8;
          font-size: 0.82rem;
          font-family: var(--font-mono);
          letter-spacing: 0.02em;
          transition: color 0.15s;
        }
        .post-item:hover .post-name {
          color: #a78bfa;
        }
        .blog-empty {
          color: #334155;
          font-size: 0.78rem;
          font-family: var(--font-mono);
          padding: 0 1rem;
        }

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
      `}</style>
    </>
  );
}

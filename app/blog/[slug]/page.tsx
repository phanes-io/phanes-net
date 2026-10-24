import { connection } from 'next/server';
import Link from "next/link";
import { getPost } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import BlogAsciiArt from "@/components/BlogAsciiArt";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await connection();
  let post;
  try { post=await getPost((await params).slug); } catch { notFound(); }
  const url='https://phanes.net/blog/'+post.slug;
  return {title:`${post.title} — phanes.net`,description:post.description,alternates:{canonical:url},openGraph:{title:post.title,description:post.description,url,type:'article',publishedTime:post.date},robots:{index:true,follow:true}};
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-CA", {timeZone:"Europe/Berlin"});
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 style={{ color: "#c4b5fd", fontSize: "1rem", fontFamily: "var(--font-mono)", fontWeight: 400, letterSpacing: "0.06em", margin: "2rem 0 0.75rem" }} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 style={{ color: "#a78bfa", fontSize: "0.9rem", fontFamily: "var(--font-mono)", fontWeight: 400, letterSpacing: "0.06em", margin: "1.8rem 0 0.6rem", paddingLeft: "0.75rem", borderLeft: "1px solid #4c1d95" }} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 style={{ color: "#7c3aed", fontSize: "0.84rem", fontFamily: "var(--font-mono)", fontWeight: 400, letterSpacing: "0.05em", margin: "1.5rem 0 0.5rem" }} {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p style={{ color: "#94a3b8", fontSize: "0.84rem", fontFamily: "var(--font-mono)", lineHeight: 1.75, letterSpacing: "0.02em", margin: "0 0 1rem" }} {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a style={{ color: "#7c3aed", textDecoration: "none" }} {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul style={{ color: "#94a3b8", fontSize: "0.84rem", fontFamily: "var(--font-mono)", lineHeight: 1.75, margin: "0 0 1rem", paddingLeft: "1.2rem" }} {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol style={{ color: "#94a3b8", fontSize: "0.84rem", fontFamily: "var(--font-mono)", lineHeight: 1.75, margin: "0 0 1rem", paddingLeft: "1.2rem" }} {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li style={{ color: "#94a3b8", marginBottom: "0.25rem" }} {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote style={{ borderLeft: "2px solid #4c1d95", paddingLeft: "1rem", margin: "1rem 0", color: "#64748b", fontStyle: "normal" }} {...props} />
  ),
  hr: () => (
    <hr style={{ border: "none", borderTop: "1px solid #13131e", margin: "2rem 0" }} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code style={{ background: "#0d0d16", color: "#a78bfa", padding: "0.1em 0.4em", borderRadius: "2px", fontSize: "0.82em", fontFamily: "var(--font-mono)", border: "1px solid #1e1b2e" }} {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre style={{ background: "#0d0d16", border: "1px solid #1e1b2e", borderLeft: "2px solid #4c1d95", padding: "1rem", borderRadius: "2px", overflow: "auto", margin: "1rem 0", fontSize: "0.8rem", fontFamily: "var(--font-mono)", color: "#94a3b8" }} {...props} />
  ),
};

export default async function PostPage({ params }: Props) {
  await connection();
  const { slug } = await params;

  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <div className="post-shell">
        <div className="post-zone">
          {/* Nav + header + art side by side */}
          <div className="post-top">
            <div className="post-top-left">
              <nav className="post-nav">
                <Link href="/blog" className="post-back">← blog</Link>
              </nav>
              <header className="post-header">
                <time className="post-date" dateTime={post.date}>{formatDate(post.date)}</time>
                <h1 className="post-title">{post.title}</h1>
              </header>
            </div>
            <div className="post-top-art">
              <BlogAsciiArt />
            </div>
          </div>

          {/* Divider */}
          <div className="post-divider" />

          {/* Content */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'BlogPosting',headline:post.title,description:post.description,datePublished:post.date,author:{'@type':'Person',name:'Jannik Schröder',url:'https://phanes.net/'},mainEntityOfPage:'https://phanes.net/blog/'+post.slug}).replace(/</g,'\u003c')}} />
          <article className="post-content">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>
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
        .post-shell {
          min-height: 100vh;
          background-color: #0a0a0f;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .post-zone {
          flex: 1;
          width: 100%;
          max-width: 680px;
          padding: 3rem 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Top row */
        .post-top {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }
        .post-top-left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          flex: 1;
          min-width: 0;
        }
        .post-top-art {
          opacity: 0.5;
          flex-shrink: 0;
        }

        /* Nav */
        .post-nav {
          display: flex;
          align-items: center;
        }
        .post-back {
          color: #4c1d95 !important;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          letter-spacing: 0.06em;
          text-shadow: none !important;
          transition: color 0.15s;
        }
        .post-back:hover {
          color: #7c3aed !important;
        }

        /* Article header */
        .post-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .post-date {
          color: #334155;
          font-size: 0.72rem;
          font-family: var(--font-mono);
          letter-spacing: 0.06em;
        }
        .post-title {
          color: #c4b5fd;
          font-size: 1.05rem;
          font-family: var(--font-mono);
          font-weight: 400;
          letter-spacing: 0.05em;
          margin: 0;
        }

        /* Divider */
        .post-divider {
          height: 1px;
          background: #13131e;
          width: 100%;
        }

        /* Content */
        .post-content {
          display: flex;
          flex-direction: column;
        }
        /* Override <pre> > <code> so the inner code tag doesn't double-style */
        .post-content pre code {
          background: none !important;
          border: none !important;
          padding: 0 !important;
          color: inherit !important;
          font-size: inherit !important;
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — phanes.net",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0f",
        padding: "3rem 1.5rem",
        maxWidth: "640px",
        margin: "0 auto",
        fontFamily: "var(--font-mono)",
      }}
    >
      <nav style={{ marginBottom: "2.5rem" }}>
        <Link
          href="/"
          style={{
            color: "#7c3aed",
            fontSize: "0.75rem",
            letterSpacing: "0.06em",
          }}
        >
          ← phanes.net
        </Link>
      </nav>

      <h1
        style={{
          color: "#e2e8f0",
          fontSize: "1rem",
          fontWeight: "700",
          letterSpacing: "0.08em",
          marginBottom: "2rem",
          textTransform: "uppercase",
        }}
      >
        Privacy Policy
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          color: "#94a3b8",
          fontSize: "0.8125rem",
          lineHeight: "1.7",
        }}
      >
        <section>
          <h2
            style={{
              color: "#64748b",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Controller
          </h2>
          <p>
            Jannik Schröder — E-Mail:{" "}
            <a href="mailto:hello@phanes.net" style={{ color: "#a78bfa" }}>
              hello@phanes.net
            </a>
          </p>
        </section>

        <div style={{ height: "1px", backgroundColor: "#1a1a26" }} />

        <section>
          <h2
            style={{
              color: "#64748b",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Data Collection
          </h2>
          <p>
            We use our self-hosted Rybbit instance at rybbit.scpx.de to measure page views and website usage. It receives the page path without query parameters, time, referring site, browser, device and approximate country. The IP address is processed for delivery and a daily rotating pseudonymous visitor identifier, but is not stored as an IP address in analytics. No analytics cookies are set. Form inputs and session recordings are not collected. Analytics is used to improve this website, without combining it with advertising profiles. For access, deletion or objection, use the contact details in this notice.
          </p>
        </section>

        <section>
          <h2
            style={{
              color: "#64748b",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Hosting
          </h2>
          <p>
            This website is hosted on servers. Upon visiting, IP addresses may
            be stored in server access logs. This is done on the basis of
            legitimate interests pursuant to Art. 6(1)(f) GDPR.
          </p>
        </section>

        <section>
          <h2
            style={{
              color: "#64748b",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Your Rights
          </h2>
          <p>
            You have the right to access, rectification, erasure, and
            restriction of processing of your personal data, as well as the
            right to data portability and the right to object. Please contact
            the e-mail address above to exercise these rights.
          </p>
        </section>

        <section>
          <h2
            style={{
              color: "#64748b",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            External Links
          </h2>
          <p>
            This site contains links to external websites. Their respective
            operators are responsible for their own privacy practices.
          </p>
        </section>
      </div>

      <footer
        style={{
          marginTop: "3rem",
          paddingTop: "1rem",
          borderTop: "1px solid #1a1a26",
        }}
      >
        <span style={{ color: "#64748b", fontSize: "0.75rem" }}>
          phanes.net
        </span>
      </footer>
    </div>
  );
}
